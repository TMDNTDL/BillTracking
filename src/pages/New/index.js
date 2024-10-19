import Icon from "@/components/icon"
import { DatePicker } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import { billListData } from "@/TypeList/BillList"
import { useState } from "react"
import classNames from "classnames"
import './index.scss'
const New = () =>{

    const [userValue, setUserValue ] = useState('')
    const [select, setSelect] = useState(true)
    const navigate = useNavigate
    const handleInputChange = (e) => {
        setUserValue(e.target.value);
    };

    const BillChange = () =>{
        setSelect(!select)
    }

    return(
        <div className="newBill">
            <div className="headLine">
                <span className="GoBack-arrow">
                    <Icon type="backArrow" className="backArrow"/>
                </span>
                <span className="newBill-title">Record Bill</span>
            </div>
            
            <div className="header">
                <div className="option">
                    <span className={classNames("spent-button", select && 'selected')} onClick={BillChange}>
                        spent
                    </span>
                    <span className={classNames("income-button", !select && 'selected')} onClick={BillChange}>
                        income
                    </span>
                </div>
                <div className="form-wrapper">
                    <div className="form">
                        <div className="date">
                            <Icon type="calendar" className="icon"/>
                            <span className="text">{"Today"}</span>
                            <DatePicker
                                className="date-input"
                                aria-placeholder="0.00"
                                type="number"
                            />
                        </div>
                        <div className="input-content">
                            <input 
                                className="input" 
                                type="text"
                                placeholder="0.00"
                                value={userValue}
                                onChange={handleInputChange}></input>
                                <span className="dollarSign">$</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="typeList">
                {billListData['pay'].map(item=>{
                    console.log(billListData['pay'])
                    return(
                        <div className="Type">
                            <div className="title">{item.name}</div>
                            <div className={`categoryList`}>
                                {item.list.map(item =>{
                                    return(
                                        <div
                                            className={classNames(
                                                'item',
                                                ''
                                            )}
                                            key={item.type}
                                        >
                                            <div className={`icon`}>
                                                <Icon type={item.type}/>
                                            </div>
                                            <div className="text">{item.type}</div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default New

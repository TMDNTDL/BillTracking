import Icon from "@/components/icon"
import { DatePicker, setDefaultConfig } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import { billListData } from "@/TypeList/BillList"
import { useState } from "react"
import classNames from "classnames"
import './index.scss'
import { Value } from "sass"
import { addBillList } from "@/store/modules/billStore"
import { useDispatch } from "react-redux"
import { createSelectorCreator } from "@reduxjs/toolkit"
import dayjs from "dayjs"

const New = () =>{

    const [userValue, setUserValue ] = useState(null)
    const [useFor, setUseFor ] = useState('')
    const [type, setType] = useState('pay')
    const [toggle, setToggle] = useState(false)
    const [date, setDate] = useState()
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const handleInputChange = (e) => {
        setUserValue(e.target.value);
    };

    const BillChange = () =>{
        if(type == 'pay'){
            setType('income')
        }
        else{
            setType('pay')
        }
    }

    const onClick =(value)=>{
        setUseFor(value)
        console.log(useFor)
        //setToggle(!toggle)
    }

    // Save Bill
    const saveBill = () => {
        if(userValue === null || userValue === "" ){
            return alert("must need a value")
        }
        const data ={
            type:type,
            money: type === 'pay' ? -userValue : userValue,
            date : date,
            useFor: useFor
        }
        dispatch(addBillList(data))
        console.log(data)
    }
    const onDateConfirm = (value) =>{
        setDate(value)
        setToggle(false)
        
    }
    return(
        <div className="newBill">
            <div className="headLine">
                <span className="GoBack-arrow" onClick={()=>navigate(-1)}>
                    <Icon type="backArrow" className="backArrow"/>
                </span>
                <span className="newBill-title">Record Bill</span>
            </div>
            
            <div className="header">
                <div className="option">
                    <span className={classNames("spent-button", type =='pay' && 'selected')} onClick={BillChange}>
                        spent
                    </span>
                    <span className={classNames("income-button", type == 'income' && 'selected')} onClick={BillChange}>
                        income
                    </span>
                </div>
                <div className="form-wrapper">
                    <div className="form">
                        <div className="date" onClick={()=> setToggle(true)}>
                            <Icon type="calendar" className="icon" />
                            <span className="text" >{dayjs(date).format('YYYY-MM-DD')}</span>
                            <DatePicker
                                className="date-input"
                                title='Bill Date'
                                max = {new Date()}
                                visible={toggle}
                                onConfirm={onDateConfirm}
                                onClose={()=> setToggle(false)}
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
                {billListData[type].map(item=>{
                    
                    return(
                        <div className="Type">
                            <div className="title">{item.name}</div>
                            <div className={`categoryList`}>
                                {item.list.map(item =>{
                                    return(
                                        <div
                                            className={classNames(
                                                'item',
                                                useFor === item.type &&
                                                'selected'
                                            )}
                                            key={item.type}
                                            onClick={() => onClick(item.type)}
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
            <div className="saveButton-Wrap">
                <button className="saveButton" onClick={saveBill}>Save
                    <span className="saveText" ></span>   
                </button>
                    
            </div>
        </div>
    )
}

export default New

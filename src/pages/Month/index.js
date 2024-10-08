import { DatePicker } from 'antd-mobile';
import { useState } from 'react';
import './index.scss';
import classNames from 'classnames';
const Month = () =>{
    // control the time picker
    const [dateVisible, setDateVisible] = useState(false)
    console.log('arrow', dateVisible && 'expand')
    return( 
        <div className="monthyBill">
            <div className="title">
                Monthly Bill
            </div>
            <div className="header">
                <div className="date" onClick={() => setDateVisible(true)}>
                    <span className="text">2023 | Feb bill</span>
                    <span className={classNames('arrow', dateVisible && 'expand')} ></span>
                </div>
                <div className="summary">
                    <div className="spent">
                        <span className="spent-amount">{100}</span>
                        <div className="title-spent">spent</div>
                    </div>
                    <div className="income">
                        <span className="income-amount">{200}</span>
                        <div className="title-income">Income</div>
                    </div>
                    <div className="remain">
                        <span className="remain-amount">{100}</span>
                        <div className="title-remain">Remain</div>
                    </div>
                </div>

                {/* time picker API*/}
                <DatePicker
                    className="kaDate"
                    title='Track Date'
                    precision='month'
                    visible={dateVisible}
                    onCancel={() => setDateVisible(false)}
                    onConfirm={()=> setDateVisible(false)}
                    onClose={() => setDateVisible(false)}
                    max={new Date()}
                />
            </div>


            
        </div>
        

    )

}

export default Month
import classNames from "classnames";
import './index.scss'
import { useMemo } from 'react'
import { useState } from "react";
import Icon from "@/components/icon";
const DayBill = ({date, billList})=>{
    console.log(date)
    console.log(billList)
    const [toogle, setToogle] = useState(false)
    // calculate the result
    const dayResult = useMemo(() =>{
        const pay = billList.filter(item => item.type === 'pay').reduce((a,c) => a + c.money, 0)
        const income = billList.filter(item => item.type ==='income').reduce((a,c) => a + c.money, 0)
        const remain = income + pay
        return {
            pay, 
            income,
            remain
        }
    }, [billList])
    console.log(dayResult)
   
    return(
        <div className="dayBillContainer">
            <div className="bills">
                <div className="header">
                    <span className="date">{date}</span>
                    <span className={classNames('arrow', toogle && 'expand')} onClick={() => setToogle(!toogle)}></span>
                </div>
                <div className="MoneySummary">
                    <div className="spent">
                        <span className="spent-title">spent</span> 
                        <span className="spent-amount">{dayResult.pay.toFixed(2)}</span>
            
                    </div>
                    <div className="income">
                        <span className="income-title">income</span>
                        <span className="income-amount">{dayResult.income.toFixed(2)}</span>
                    </div>
                    <div className="Remain">
                        <span className="remain-amount">{dayResult.remain.toFixed(2)}</span>
                        <span className="remain-title">remain</span>
                    </div>
                    
                
                </div>
            </div>
            
            {billList.map(item => {
                console.log(billList)
                if(item.money !== null){
                    return(
                    
                        <div className={classNames('detail', toogle && "visible")}>
                            <div className="icon-usefor">
                                <Icon type={item.useFor}/>
                                <span className="usefor">{item.useFor}</span>
                            </div>
                            
                            <span className={classNames('money', item.type)}>{item.money.toFixed(2)}</span>
                        </div>
                    )
                }
                
                
            })}
            

        </div>
    )
}

export default DayBill
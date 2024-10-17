import classNames from "classnames";
import './index.scss'
import { useMemo } from 'react'
const DayBill = ({date, billList})=>{
    console.log(date)
    console.log(billList)

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

    return(
        <div className="dayBillContainer">
            <div className="bills">
                <div className="header">
                    <span className="date">{date}</span>
                    <span className="arrow"></span>
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
                return(
                    <div className='detail'>
                        <span className="usefor">{item.useFor}</span>
                        <span className={classNames('money', item.type)}>{item.money.toFixed(2)}</span>
                    </div>
                )
            })}
            

        </div>
    )
}

export default DayBill
import classNames from "classnames";
import './index.scss'
const DayBill = ()=>{
    return(
        <div className="dayBillContainer">
            <div className="bills">
                <div className="header">
                    <span className="date">{"03/25"}</span>
                    <span className="arrow"></span>
                </div>
                <div className="MoneySummary">
                    <div className="spent">
                        <span className="spent-title">spent</span> 
                        <span className="spent-amount">{100}</span>
            
                    </div>
                    <div className="income">
                        <span className="income-title">income</span>
                        <span className="income-amount">{100}</span>
                    </div>
                    <div className="Remain">
                        <span className="remain-amount">{100}</span>
                        <span className="remain-title">remain</span>
                    </div>
                    
                
                </div>
            </div>
            
        </div>
    )
}

export default DayBill
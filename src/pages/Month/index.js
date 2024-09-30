import { DatePicker } from 'antd-mobile';
import './index.scss';
const Month = () =>{
    return( 
        <div className="monthyBill">
            <div className="title">
                Monthly Bill
            </div>
            <div className="header">
                <div className="date">
                    <span className="text">2023 | Feb bill</span>
                    <span className='arrow expand'></span>
                </div>
                <div className="summary">
                    <div className="spent">
                        <span className="spent-amount">{100}</span>
                        <div className="title-spent">支出</div>
                    </div>
                    <div className="income">
                        <span className="income-amount">{200}</span>
                        <div className="title-income">收入</div>
                    </div>
                    <div className="remain">
                        <span className="remain-amount">{100}</span>
                        <div className="title-remain">结余</div>
                    </div>
                </div>

                {/* time picker API*/}
                <DatePicker
                    className="kaDate"
                    title='Track Date'
                    precision='month'
                    visible={false}
                    max={new Date()}
                />
            </div>


            
        </div>
        

    )

}

export default Month
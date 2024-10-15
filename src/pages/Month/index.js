import { DatePicker } from 'antd-mobile';
import { useState, useMemo, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import DayBill from './components/DayBill'
const Month = () =>{
    // category the data
    const billList = useSelector(state => state.bill.billList)
    console.log(billList)
    const monthGroup = useMemo(() => {
        // return the procesed value
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    },[billList])
    console.log(monthGroup)
    // control the time picker
    const [dateVisible, setDateVisible] = useState(false)

    // display the time
    const [currentDate, setCurrentDate] = useState(()=>{
        return dayjs(new Date()).format('YYYY-MM')
    })

    // MonthList
    const [currentMonthList, setMonthList] = useState([])
    // calculate the spents
    const monthResult = useMemo(() => {
        //spent
        const pay = currentMonthList.filter(item=> item.type === 'pay').reduce((a,c) => a + c.money, 0)
        // income
        const income = currentMonthList.filter(item => item.type === 'income').reduce((a,c) => a + c.money, 0)
        console.log(pay, income)
        return {
            pay,
            income,
            total: pay + income
        }
    })
    // -----------
    // UseEffect
    useEffect(()=>{
        const nowDate = dayjs().format('YYYY-MM')
        if(monthGroup[nowDate]){
            setMonthList(monthGroup[nowDate])
        }

    }, [monthGroup])

    const onConfirm = (date) =>{
        setDateVisible(false)
        const formatDate = dayjs(date).format('YYYY-MM')
        setMonthList(monthGroup[formatDate])
        setCurrentDate(formatDate)
        console.log(date)
    }

    return( 
        <div className="monthyBill">
            <div className="title">
                Monthly Bill
            </div>
            <div className="header">
                <div className="date" onClick={() => setDateVisible(true)}>
                    <span className="text">{currentDate + ' bill'}</span>
                    <span className={classNames('arrow', dateVisible && 'expand')} ></span>
                </div>
                <div className="summary">
                    <div className="spent">
                        <span className="spent-amount">{monthResult.pay.toFixed(2)}</span>
                        <div className="title-spent">spent</div>
                    </div>
                    <div className="income">
                        <span className="income-amount">{monthResult.income.toFixed(2)}</span>
                        <div className="title-income">Income</div>
                    </div>
                    <div className="remain">
                        <span className="remain-amount">{monthResult.total.toFixed(2)}</span>
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
                    onConfirm={onConfirm}
                    onClose={() => setDateVisible(false)}
                    max={new Date()}
                />
            </div>

            <DayBill/>
            
        </div>
        

    )

}

export default Month
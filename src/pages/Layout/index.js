import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "antd-mobile"
import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getBillList, setActiveIndex } from "@/store/modules/billStore"
import './index.scss'
import classNames from "classnames"

const Layout = () =>{

    const tabs = [
        {
        name:'Monthly',
        key: '/month',
        title:'Monthly Bill',
        icon: '../../../image/Bill.png',
        },
        {
            name:'New',
            key :'/new',
            title: 'Bill Keeping',
            icon: '../../../image/Add.png',
        },
        {
            name:'Yearly',
            key: '/year',
            title: 'Yearly Bill',
            icon: '../../../image/Calculator.png',
        
        }
    ]
    //const { activeIndex } = useSelector(state => state.billReducer)
    const activeIndex = useSelector(state => state.bill.activeIndex)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    }, [dispatch])

    //switch router, using switchRoute method such that when click, will return back the router of the button
    // and using that it will help us to achieve switing the router.
    const navigate = useNavigate()

    const switchRoute = (path) =>{
        console.log(path)
        navigate(path)
    }
    return(
        <div className="layout">
            {/* after define children router in the router folder and class, we need to define a exit for the children to be render out in the first-class router */}
            <div className="container">
                <Outlet />
            </div>
            <div className="footer">
                {tabs.map((item,index) =>{
                    return(
                        <div className='button_list'>
                             <button className={classNames(`button-${item.name}`, activeIndex === index && 'active')} onClick={() => {
                                dispatch(setActiveIndex(index))
                                switchRoute(item.key)}}>
                            
                            </button>
                            <div className="button-text">{item.title}</div>
                        </div>
                       
                        
                    )                    
                })}
            </div>
            {/* test global render
            <Button color="primary">TESTING</Button>
            <div className="purple">
                <Button color="primary"> partial TESTING</Button>
            </div> */}
        </div>
    ) 
}

export default Layout
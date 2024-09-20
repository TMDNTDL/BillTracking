import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"

const Layout = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBillList())
    }, [dispatch])
    return(
        <div>
            {/* after define children router in the router folder and class, we need to define a exit for the children to be render out in the first-class router */}

            <Outlet />
            我是layout
            {/* test global render */}
            <Button color="primary">TESTING</Button>
            <div className="purple">
                <Button color="primary"> partial TESTING</Button>
            </div>
        </div>
    ) 
}

export default Layout
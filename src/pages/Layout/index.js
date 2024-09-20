import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <div>
            {/* after define children router in the router folder and class, we need to define a exit for the children to be render out in the first-class router */}
            
            <Outlet />
            我是layout
        </div>
    ) 
}

export default Layout
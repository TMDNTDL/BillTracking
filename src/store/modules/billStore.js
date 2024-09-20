// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const billStore = createSlice({
    name:'bill',
    // state
    initialState:{
        billList:[]
    },
    reducers:{
        // set method
        setBillList(state,action){
            state.billList = action.payload
        }
    }
})

//destructre actionCreator funciton
const { setBillList } = billStore.actions

const getBillList = () =>{
    return (dispatch) =>{
        // get data
        const res = axios.get('http://localhost:8888/ka')
        dispatch(setBillList(res.data))
    }
}
export {getBillList}
// export reducer
const reducer = billStore.reducer

export default reducer
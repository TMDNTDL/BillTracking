// 账单列表相关store
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const billStore = createSlice({
    name:'bill',
    // state
    initialState:{
        billList:[],
        activeIndex : 0
    },
    reducers:{
        // set method
        setBillList(state,action){
            state.billList = action.payload
        },
        setActiveIndex(state, action){
            state.activeIndex = action.payload;
        },
        addBill(state,action){
            state.billList.push(action.payload)
        }

    }
})

//destructre actionCreator funciton
const { setBillList, setActiveIndex, addBill } = billStore.actions

const getBillList = () =>{
    return async(dispatch) =>{
        // get data
        const res =await axios.get('http://localhost:8887/ka')
        //console.log("res: " + res.ka)
        dispatch(setBillList(res.data))
    }
}
const addBillList = (data) =>{
    return async(dispatch) =>{
        const res = await axios.post('http://localhost:8887/ka', data)
        dispatch(addBill(res.data))
    }
}
export {getBillList, setActiveIndex, addBillList}
// export reducer
const reducer = billStore.reducer

export default reducer
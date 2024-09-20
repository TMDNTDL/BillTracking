// combine all the sub module

import billReducer from './modules/billStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        bill: billReducer
    }
})

export default store

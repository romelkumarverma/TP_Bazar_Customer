import {configureStore}  from '@reduxjs/toolkit'
import couterReducer from './Counter'


export const store = configureStore({
    reducer: {
        allCarts:couterReducer,
    },
})
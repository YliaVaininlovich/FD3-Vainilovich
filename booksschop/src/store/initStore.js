import { configureStore } from '@reduxjs/toolkit'
import  booksShopReducer  from "./reducer"


  
export function initiateStore() {
    return configureStore(
        {
            reducer: booksShopReducer
        });
}
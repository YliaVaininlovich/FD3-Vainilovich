
import { configureStore } from '@reduxjs/toolkit'
import  mobileCompanyReducer  from "./reducer"


  
export function initiateStore() {
    return configureStore(
        {
            reducer: mobileCompanyReducer
        });
}
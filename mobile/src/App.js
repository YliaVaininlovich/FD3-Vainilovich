
import './App.css';
// import React, { useEffect } from 'react';
import { initiateStore } from "./store/store";
import { Provider } from "react-redux";
//import { useSelector } from 'react-redux'
import {NameCompanyChange } from "./store/actions"

import MobileCompany from './components/mobileCompany';


const store = initiateStore();


const App = () => {

  //const companyName = useSelector((state) => state.companyName);
    
  const cbCompanyNameMTS = (newName) => {
    store.dispatch(NameCompanyChange({ companyName: "MTC" }));
    console.log("store.getState().companyName", store.getState().companyName);
  }

  const cbCompanyNameA1 = (newName) => {
    store.dispatch(NameCompanyChange({ companyName: "A1" }));
  }

//   useEffect(() => {
//     store.subscribe(() => {
//       console.log(store.getState());
//     });
// }, []);

  return (
    <Provider store={store}>
      <div className="App">
        {console.log("Provider   " ,store.getState()) }
      <MobileCompany 
         name={store.getState().companyName}
        clients={store.getState().clientsArr}
        cbCompanyNameMTS={cbCompanyNameMTS}
        cbCompanyNameA1={cbCompanyNameA1}
       />
      </div>
    </Provider>
  );
}

export default App;


import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import {NameCompanyChange } from "./store/actions"
import MobileCompany from './components/mobileCompany';

const App = (store) => {

  const companyName = useSelector((state) => state.companyName);
  const clientsArr = useSelector((state) => state.clientsArr);
  
  const dispatch = useDispatch();

  const cbCompanyNameMTS = (newName) => {
    dispatch(NameCompanyChange({ companyName: "MTC" }));
  }

  const cbCompanyNameA1 = (newName) => {
   dispatch(NameCompanyChange({ companyName: "A1" }));
  }

  return (
    
      <div className="App">
      <MobileCompany 
        name={companyName}
        clients={clientsArr}
        cbCompanyNameMTS={cbCompanyNameMTS}
        cbCompanyNameA1={cbCompanyNameA1}
       />
      </div>
    
  );
}

export default App;

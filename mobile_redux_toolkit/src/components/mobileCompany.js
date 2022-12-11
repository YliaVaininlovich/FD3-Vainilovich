import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MobileClient from './mobileClients';
import { NameCompanyChange } from "../store/reducer"
import {BalanceChange } from "../store/reducer"

import './mobileCompany.css';

const MobileCompany = () => {

  
  const clients = useSelector((state) => state.clientsArr);
  const companyName = useSelector((state) => state.companyName);
  
  const dispatch = useDispatch();
    
  const setName1 = () => {
    dispatch(NameCompanyChange({ companyName: "MTC" }));
  };

  const setName2 = () => {
    dispatch(NameCompanyChange({ companyName: "A1" }));
  };
  
  const setBalance = (clientId,newBalance) => {
    dispatch(BalanceChange(clientId,newBalance));
  };

  const setBalance1 = () => {
   setBalance(105,230);
  };

  const setBalance2 = () => {
    setBalance(105,250);
  };
  
     return (
       <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={setName1} />
        <input type="button" value="=A1" onClick={setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{companyName}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clients.map( client =>
      <MobileClient key={client.id} info={client}  />)}
        </div>
        <input type="button" value="Сидоров=230" onClick={setBalance1} />
        <input type="button" value="Сидоров=250" onClick={setBalance2} />
      </div>
    )
    ;
}

export default MobileCompany;
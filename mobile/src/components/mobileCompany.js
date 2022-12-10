import React from 'react';
import {useState} from "react"

import MobileClient from './mobileClients';

import './mobileCompany.css';

const MobileCompany = (props) => {

   const [clients, setStateClients] = useState(props.clients);

 
  const setName1 = () => {
    props.cbCompanyNameMTS('МТС');
  };

  const setName2 = () => {
    props.cbCompanyNameA1("A1");
  };
  
  const setBalance = (clientId,newBalance) => {
    let newClients=[...clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id===clientId ) {
      //if ( c.id==clientId && c.balance!==newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
      }
    } );
    setStateClients(newClients);
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
        <div className='MobileCompanyName'>Компания &laquo;{props.name}&raquo;</div>
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
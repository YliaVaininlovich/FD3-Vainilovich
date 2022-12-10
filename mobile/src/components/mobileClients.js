import React from 'react';
import { useState, useEffect } from "react"

import './mobileClients.css';

const MobileClient =(props)=> {


    const [info, setStateInfo] = useState(props.info);

    useEffect(() => {
      setStateInfo(props.info);
   },[props.info]);

    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{info.balance}</span>
        <span className='MobileClientFIO'>{info.fio}</span>
      </div>
    );

  }

export default MobileClient;
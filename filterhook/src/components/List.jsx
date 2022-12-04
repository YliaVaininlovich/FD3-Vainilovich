
import './List.css';
import React from 'react';

const List = (props) => {
  
  return (
    <div className="app">
      <div className='filter__output'>
        {props.data.map((e) => <p key={e}>{e}</p>)}
      </div>
    </div>
  );
}

export default List;

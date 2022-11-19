
import './App.css';
import React, { useState, useRef } from 'react';



const App = (props) => {
  
  const [sortArr, setSortArr] = useState(props.data)
  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState('')

  const checkboxEl = useRef(null);
  const inputEl = useRef(null);

  const sort = () => {
    const input = inputEl.current.value.toLowerCase();
    const checked = checkboxEl.current.checked;

    let arr = [...props.data].filter((word) => word.indexOf(input) !== -1);
    setSortArr(checked ? [...arr].sort() : arr);
  }

  const onChange = () => {
    sort();
    setInput(inputEl.current.value.toLowerCase());
  }

  const checkbox = () => {
    sort();
    setChecked(checkboxEl.current.checked);
  }

  const clear = () => {
    setInput('');
    setChecked(false);
    setSortArr(props.data);
  }

  return (
    <div className="app">
      <input type="checkbox" ref={checkboxEl} checked={checked} onChange={checkbox} />
      <input type="text" ref={inputEl} value={input} onChange={onChange} />
      <button onClick={clear}>
        сброс
      </button>
      <div className='filter__output'>
        {sortArr.map((e) => <p key={e}>{e}</p>)}
      </div>
    </div>
  );
}

export default App;

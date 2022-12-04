
import './List.css';
import React, {  useRef, useState } from 'react';

const Conrtols = (props) => {

  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState('')

  const checkboxEl = useRef(null);
  const inputEl = useRef(null);

  const onChange = () => {
      setInput(inputEl.current.value.toLowerCase());
      props.cbOnChange(inputEl.current.value.toLowerCase());
  }

  const checkbox = () => {
      setChecked(checkboxEl.current.checked);
      props.cbCheckbox(checkboxEl.current.checked);
  }

    const clear = () => {
        setChecked(false);
        setInput("");
      props.cbClear();
  }
  return (
      <div className="app">
         
      <input type="checkbox" ref={checkboxEl} checked={checked} onChange={checkbox} />
      <input type="text" ref={inputEl} value={input} onChange={onChange} />
      <button onClick={clear}>
        сброс
      </button>
    </div>
  );
}

export default Conrtols;

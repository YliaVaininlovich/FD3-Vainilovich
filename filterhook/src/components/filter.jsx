
import '../App';
import List from "./List"
import Controls from "./controls"
import { useState } from 'react';

const Filter = (props) => {

    const [sortArr, setSortArr] = useState(props.data);
    const [checked, setChecked] = useState(false);
    const [input, setInput] = useState("");

    const sort = (checked, input) => {
        let arr = [...props.data].filter((word) => word.indexOf(input) !== -1);
      setSortArr(checked ? [...arr].sort() : arr);
    }

      const cbCheckbox = (newChecked) => {
        setChecked(newChecked);
        sort(newChecked, input);
    }   

    const cbOnChange = (newInput) => { 
        setInput(newInput);
        sort(checked, newInput);
}
    const cbClear = () => {
        setChecked(false);
        setInput("");
        sort(false, "");
  }

  return (
      <div className="App">
          <Controls cbCheckbox={cbCheckbox} cbOnChange={cbOnChange} cbClear={cbClear} checked={false} input={""} />
          <List data={sortArr} /> 
    </div>
  );
}

export default Filter;

import BR2JSX from "./BR2JSX"
import './App.css';

const App = () => {
  
  let text = "первый<br>второй<br/>третий<br />последний"

  return (
    <div className="App">
     
       <BR2JSX text={text}/>
    </div>
  );
}

export default App;

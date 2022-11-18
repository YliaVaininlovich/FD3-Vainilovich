
import './App.css';
import RainbowFrame from "./RainbowFrame"

 const App = () => {

   let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
   
  return (
    <div className="App">

    <RainbowFrame  colors={colors}>
      Hello!!!
    </RainbowFrame>
    </div>
  );
}

export default App;

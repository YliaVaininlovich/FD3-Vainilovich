
import './App.css';
import Filter from "../src/components/filter"

const App = (props) => {
  return (
    <div className="App">
     <Filter data={props.data} />
    </div>
  );
}

export default App;

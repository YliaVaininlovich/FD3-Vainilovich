
import './App.css';
import DoubleButton from "./doublebutton"
import withRainbowFrame from "./withRainbowFrame"

const App = () => {

  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

 return (
   <div >
<br/><br/>
     <DoubleButton caption1={"однажды"} caption2={"пору"} cbPressed={num => alert(num)} > в студёную зимнюю </DoubleButton>
<br/>
     <FramedDoubleButton caption1={"я из лесу"} caption2={"мороз"} cbPressed={num => alert(num)}>
вышел, был сильный
</FramedDoubleButton>
     
   </div>
 );
}

export default App;



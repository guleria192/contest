
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';

function App() {


  const [loc , setLoc] = useState("")
  console.log(loc);
  const [condition , setCondition] = useState("")
  const [tempc , setTempc] = useState("")
  const [tempf  , setTempf ] = useState("")
  const [humi , setHumi] = useState("")

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home  setLoc={setLoc} setCondition={setCondition}  setTempc={setTempc} setTempf={setTempf} setHumi={setHumi}  />} />
      <Route path='weather/:city' element={<Details loc={loc} condition={condition} tempc={tempc} tempf={tempf} humi={humi}/>} />
     </Routes>
    </div>
  );
}

export default App;

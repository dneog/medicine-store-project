import { useState } from 'react';
import axios from 'axios'
import './App.css';
import InputDataForm from './InputDataForm';
import ShowData from './ShowData';
function App() {
  // const [tasks, setTasks]= useState([]);

  // useEffect(()=> {
    
  // },[tasks])
  

  return (
    <div className="App">
    <InputDataForm  />
    <ShowData />
    </div>
  );
}

export default App;

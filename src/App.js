
import './App.css';
import React , {useState} from 'react';
import Task1 from './Task1';
import Task2 from './Task2';


function App() {

const [btnStatus,setBtnStatus] = useState('')

const showTask =  btnStatus === 'task2'



  return (
  <>
  <button onClick={() => setBtnStatus('task1')}>  task 1</button>
  <button onClick={() => setBtnStatus('task2')}>Task 2</button>
  {!showTask && <Task1/>}
  {showTask && <Task2/>}
  
  </>
  );
}

export default App;

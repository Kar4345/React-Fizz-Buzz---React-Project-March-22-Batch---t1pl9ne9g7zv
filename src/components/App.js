import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [count,setCount] = useState(1);
  const [counterClass,setCounterClass] = useState("normal");

  useEffect(()=>{
    if(count % 3 === 0 && count % 5 === 0){
      setCounterClass("fizzbuzz");
    }else if(count % 3 === 0){
      setCounterClass("fizz");
    }else if(count % 5 === 0){
      setCounterClass("buzz");
    }else{
      setCounterClass("normal");
    }
  },[count])


  const onIncrementHandler=()=>{
    setCount(count=>count + 1);
  }
  const onDecrementHandler = ()=>{
    setCount(count=> count - 1);
  }
  
  return (
    <div id="main">
      <div id="counter" className={counterClass}>{count}</div>
      <button id='increment' onClick={onIncrementHandler}>+</button>
      <button id='decrement' onClick={onDecrementHandler}>-</button>
    </div>
  )
}


export default App;

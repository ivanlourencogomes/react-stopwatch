import { useState, useEffect } from 'react'
import Display from './components/Display.jsx'
import Controls from './components/Controls.jsx'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartStop() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setTime(0);
  }

  useEffect(()=>{

    let interval;

    if(isRunning) {
      interval = setInterval(()=>{setTime(time + 1)},1000);
    }

    return ()=> clearInterval(interval);

  },[time, isRunning])

  return (
    <>
      <section className="stopwatch">
        <h1>React Stopwatch</h1>
        <Display time={time} />
        
        <Controls 
          isRunning={isRunning} 
          startStop={handleStartStop}
          reset={handleReset} />

      </section>
    </>
  )
}

export default App

import './Controls.css'

function Controls({startStop, reset, isRunning}) {

  return (
    <>
      <section className="controls">
        <button 
            className="reset"
            onClick={reset} >
                Reset
        </button>
        <button 
            onClick={startStop} 
            className={`start-stop ${isRunning ? 'red' : ''}`}>
                {isRunning ? 'Stop' : 'Start'}
        </button>
      </section>
    </>
  )
}

export default Controls

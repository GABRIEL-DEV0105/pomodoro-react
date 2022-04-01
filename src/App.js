import './App.css'
import {useState} from 'react'

function App() {
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [isStart, setIsStart] = useState(false)
  setIsStart(true)
  console.log('atz isStart', isStart)



const handleStart = () => {
  
  console.log('clicou')
  setIsStart(true)
  
  console.log('atz isStart', isStart)
  const timer = () => {
    
  console.log('entrei no timer')
    setTimeout(() => {
      
    console.log('entrei no setTimeOut')
    setSec(sec + 1)
    
    console.log('atz sec', sec)
    if (isStart) {
      
      console.log('entrei no IF isStart')
      timer()}
    }, 1000)
  }
  console.log('antes do timer')
  timer()
}


  return (
    <div className="app">

      <div className="container">
        <div className="display">
          <h1>{min}</h1>
          <h1>:</h1>
          <h1>{sec}</h1>
        </div>
        <div className="containerBtnA">
          <button className="btnA" onClick={handleStart}>Iniciar</button>
          <button className="btnA">Pausar</button>
        </div>
        <div className="containerBtnB">
          <button className="stop">Parar</button>
        </div>
      </div>

    </div>
    );
}

export default App;
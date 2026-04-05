import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const { count } = counter
  return (
    <>
      <h1>count: {count}</h1> 
      <CountBox />
    </>
  )
}

export default App

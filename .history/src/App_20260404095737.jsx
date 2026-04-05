// import { useState } from 'react'
// import './App.css'
import counterStore from './stores/counterStore.JS'
import CountBox from './components/CountBox';

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase, decrease } = counterStore();
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={() => increaseBy(20)}>20씩 증가</button>
      <button onClick={decrease}>-</button>
      <CountBox />
    </>
  )
}

export default App

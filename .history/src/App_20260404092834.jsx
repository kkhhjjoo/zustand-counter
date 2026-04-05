// import { useState } from 'react'
// import './App.css'
import counterStore from './stores/counterStore.JS'
import CountBox from './components/CountBox';

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase } = counterStore();
  return (
    <>
      <h1>count: {count}</h1>
      <button>increase</button>
      <CountBox />
    </>
  )
}

export default App

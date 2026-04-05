import React from 'react'
import counterStore from '../stores/counterStore.JS'

const CountBox = () => {
  const { count } = counterStore();
  return (
    <div>
      <h2>CountBox: {count}</h2>
    </div>
  )
}

export default CountBox

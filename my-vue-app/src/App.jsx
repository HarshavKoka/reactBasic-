import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const inc = () => {
    setCount((prev) => prev + 6)
  }
  console.log(count)
  return (
    <>
      <div>{count}</div>
      <button onClick={inc}>click me</button>
    </>
  )
}

export default App
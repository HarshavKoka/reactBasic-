import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const dec = () => {
    setCount((prev) => prev - 1)
  }
  console.log(count)
  return (
    <>
      <div>{count}</div>
      <button onClick={dec}>click me</button>
    </>
  )
}

export default App
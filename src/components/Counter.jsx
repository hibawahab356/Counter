import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

    const handleClick = ()=>{
        setCount(count = count+1)
        console.log(count);
    }
 
const handleDec = ()=>{
    setCount(count = count-1)
}

const handleReset = ()=>{
    setCount(0)
}

  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleDec}>Decrease</button>
        <button onClick={handleReset}>Reset</button>


      
    </div>
  )
}

export default Counter
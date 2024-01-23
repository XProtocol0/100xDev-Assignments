import { useState } from 'react'
import { useMemo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  
  let count = useMemo(() => {
    let sum=0;
    for(let i=1; i<inputValue; i++) {
      sum+=i;
    }
    return sum;
  }, [inputValue])

  return (
    <>
      <input onChange={function(e) {
        setInputValue(e.target.value)
      }} placeholder= {"find sum from 1 to n"}></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter+1)
      }}>Counter {counter}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        hello world
      </Card>
      <br></br><br></br>
      <Card>
        <div>
          hello world 2
        </div>
      </Card>
      <br></br><br></br>
      <Card>
        <Card>
          hello world 3
        </Card>
      </Card>
    </>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <HeaderWithButton />        
      <Header title="popu2"></Header>
    </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is popu");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

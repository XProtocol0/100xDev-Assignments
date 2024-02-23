import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="bottom-bar">
        <ColorBar></ColorBar>
      </div>
    </>
  )
}

function ColorBar() {
  const [color, setColor] = useState('White')

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])

  function updateColor(Newcolor) {
    setColor(Newcolor);
  }

  return (
    <div className="color-bar">
        <button className="color-button" onClick={() => {updateColor("red")}} style={{backgroundColor: "red"}}>Red</button>
        <button className="color-button" onClick={() => {updateColor("yellow")}} style={{backgroundColor: "yellow"}}>Yellow</button>
        <button className="color-button" onClick={() => {updateColor("black")}} style={{backgroundColor: "black", color:"white"}}>Black</button>
        <button className="color-button" onClick={() => {updateColor("purple")}} style={{backgroundColor: "purple"}}>Purple</button>
        <button className="color-button" onClick={() => {updateColor("green")}} style={{backgroundColor: "green"}}>Green</button>
        <button className="color-button" onClick={() => {updateColor("blue")}} style={{backgroundColor: "blue"}}>Blue</button>
        <button className="color-button" onClick={() => {updateColor("white")}} style={{backgroundColor: "orange"}}>Default</button>
    </div>
  )
}

export default App
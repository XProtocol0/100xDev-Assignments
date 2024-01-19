import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
        <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
        <button onClick={addTodo}>
          Add todo
        </button>
        <div id="todos"> </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

let globalId = 1;
let todoState = [];

function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done!"
}

function createChild(title, description, id) {
  const child = document.createElement("div");
  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;
  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;
  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as done";
  thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent)
  child.setAttribute("id", id);
  return child;
}

function updateState(newTodos) {
  const parent = document.getElementById("todos");
  parent.innerHTML = "";
  for (let i = 0; i < newTodos.length; i++) {
    const title = newTodos[i].title;
    const description = newTodos[i].description;
    parent.appendChild(createChild(title, description, globalId++));
  }
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  todoState.push({
    title: title,
    description: description,
    id: globalId++,
  })
  updateState(todoState);
}

export default App

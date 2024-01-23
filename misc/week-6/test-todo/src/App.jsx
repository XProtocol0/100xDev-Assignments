import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodo] = useState([{
    id: crypto.randomUUID(),
    title: "Week-4",
    description: "Complete week 4"
  }, {
    id: crypto.randomUUID(),
    title: "Week-5",
    description: "Complete week 5"
  }, {
    id: crypto.randomUUID(),
    title: "Week-6",
    description: "Complete week 6"
  }])

  function addTodo() {
    setTodo([...todos, {
      id: crypto.randomUUID(),
      title: "New todo",
      description: "This is new todo"
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todo key= {todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}


function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App

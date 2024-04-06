import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline'
import { useDebounce } from './hooks/useDebounce'

// custom hooks
function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos)
          setLoading(false)
        })
    }, n*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })

//  clears old interval if value of n changes other 2 or more interval will run together
    return () => {
      clearInterval(value)
    }
  }, [n])

  return {todos, loading}
}

function App() {
  const [render, setRender] = useState(true)
  const {todos,loading} = useTodos(10000)
  const isOnline = useIsOnline()
 
  useEffect(() => {
    setTimeout(() => {
      setRender(false)
    }, 10000)
    // setInterval(() => {
    //   setRender(r => !r)
    // }, 2000)
  }, [])


  return (
      <>
        {/* <MyComponent />
        <MyClassCompement /> */}
        {render ? <LifeCycleComponent /> : <div></div>}        
        {loading ? <div>loading....</div> : todos.map(todo => <Track todo={todo} />)}
        {isOnline ? <div>You're online</div> : <div> You're offline, please connect to internet</div>}
        <ValueDebounceComponent />
      </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

class MyClassCompement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 2});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment by 2</button>
      </div>
    );
  }
}

function LifeCycleComponent() {
  useEffect (() => {
    console.log("component mounted")

    // can return function from useEffect
    // returns whenever dependency i.e variables in []
    // suppose we have todos in []. Then when todos changes for first time line 53 would run. 
    // After when todos again changes, then return function runs and then line 53 again runs.
    // In this case as dependency array is empty. So line 53 runs when component mounts. 
    // And return function runs when compenent unmounts
    return () => {
      console.log("component unmounted")
    }
  }, [])

  return <div>
    From inside LifeCycleComponent
  </div>
}

function Track({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

function ValueDebounceComponent() {
  const [value, setValue] = useState(0)
  const debouncedValue = useDebounce(value, 500)
  return (
    <div>
      Debounced value is {debouncedValue}
      <input type = "text" onChange={e =>setValue(e.target.value)} />
    </div>
  )
}

export default App

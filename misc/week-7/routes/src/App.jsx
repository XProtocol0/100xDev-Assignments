import { useState, lazy, Suspense } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';
const Login = lazy(() => import('./components/Login'));

function App() {

  return (
    <>
 
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/login' element={<Suspense fallback={"loading...."}><Login /> </Suspense>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
      navigate("/");
    }}>Landing Page</button>
    <button onClick={() => {
      navigate("/dashboard")
    }}>Dashboard Page</button>
    <button onClick={() => {
      navigate("/login")
    }}>Login</button>
  </div>
  
}

export default App

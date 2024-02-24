import { useState } from 'react'
import './App.css'
import PhoneForOtp from './components/phone-for-otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='login-card'>
        <h1>Login via OTP</h1>
        <PhoneForOtp/>
      </div>
    </>
  )
}

export default App

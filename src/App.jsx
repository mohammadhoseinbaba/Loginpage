import LoginForm from './Components/LoginForm'
import SignUp from './Components/Signup'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState("login")

  const handleLogin = () => {

  }
  const handleShowRegister = () => {
    setShow('Signup')
  }
  const handleOnLoginShow = () => {
    setShow('login')
  }
  const handleSignUp = () => {

  }

  return (
    <>
      {
        show === 'login' ? (
          <div>
            <LoginForm onLogin={handleLogin} onRegis={handleShowRegister} />
          </div>) : (
          <div>
            <SignUp onSign={handleSignUp} onLoginShow={handleOnLoginShow} />
          </div>)}
    </>

  )
}
export default App


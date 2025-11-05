import LoginForm from './Components/LoginForm'
import SignUp from './Components/Signup'
import api from './API'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState("login")

  const handleLogin = async (data) => {
    const response =await api.post("/users", {
      email: data.email,
      password: data.password
    })
  }
  const handleSignUp = (da) => {
    console.log(da)
  }

  const handleShowRegister = () => {
    setShow('Signup')
  }
  const handleOnLoginShow = () => {
    setShow('login')
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


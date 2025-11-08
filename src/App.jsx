import LoginForm from './Components/LoginForm'
import SignUp from './Components/Signup'
import api from './API'
import { useCallback, useState } from 'react'
import FirstPage from './Components/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function App() {

  const navigate = useNavigate();

  const handleLogin = useCallback(async (data) => {
    const response = await api.post("/users", {
      email: data.email,
      password: data.password
    })
    navigate("/")
  }
    , [navigate])

  const handleSignUp = (da) => {
    console.log(da)
  }

  const handleShowRegister = useCallback(() => {
    navigate("/signUp")
  }, [navigate])

  const handleOnLoginShow = useCallback(() => {
    navigate("/login")
  }, [navigate])


  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/login' element={<LoginForm onLogin={handleLogin} onRegis={handleShowRegister} />} />
      <Route path='/signup' element={<SignUp onLoginShow={handleOnLoginShow} />} />
    </Routes>
  )
}
export default App


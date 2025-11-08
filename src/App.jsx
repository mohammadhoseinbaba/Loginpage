import LoginForm from './Components/LoginForm'
import SignUp from './Components/Signup'
import api from './API'
import axios from 'axios'
import { useCallback, useState } from 'react'
import FirstPage from './Components/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {

  const [show, setShow] = useState("login")

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

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>

      {
        show === 'login' ? (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginForm onLogin={handleLogin} onRegis={handleShowRegister} />} />
              </Routes>
            </BrowserRouter>
          </div>) : (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/singup" element={<SignUp onSign={handleSignUp} onLoginShow={handleOnLoginShow} />} />
              </Routes>
            </BrowserRouter>

          </div>)}
    </>

  )
}
export default App


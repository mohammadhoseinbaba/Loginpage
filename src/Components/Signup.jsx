import { useState } from 'react'

function SignUp({ onLoginShow, onSign }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameEmailPassword = {
            name,
            email,
            password
        }
        onSign(nameEmailPassword)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleLogin = () => {
        onLoginShow()
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your Name </label>
                <input value={name} onChange={handleName} type='email' />
                <br />
                <label>Enter your email address </label>
                <input value={email} onChange={handleEmail} type='email' />
                <br />
                <label>Enter your Password </label>
                <input value={password} onChange={handlePassword} type='password' />
                <br />
                <button type='submit'>Sign up</button>
                <button onClick={handleLogin} type='button'>Log in</button>
            </form>

        </div>
    )
}
export default SignUp
import { useState } from 'react'

function LoginForm({ onLogin }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const EmailPassword =
        {
            email,
            password
        }

        onLogin(EmailPassword)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your email address </label>
                <input value={email} onChange={handleEmail} type='email' />
                <br />
                <label>Enter your Password </label>
                <input value={password} onChange={handlePassword} type='password' />
                <br />
                <button type='submit'>Login</button>
                <button type='button'>Forget Password</button>
                <button type='button'>Register</button>
            </form>

        </div>
    )
}
export default LoginForm;
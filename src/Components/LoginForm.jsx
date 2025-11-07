import { useState } from 'react'

function LoginForm({ onLogin, onRegis }) {

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
        setEmail('')
        setPassword('')

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleRegister = () => {
        onRegis()
    }

    return (
        <div className='min-h-screen grid place-items-center px-4 '>
            <form className='w-full max-w-sm' onSubmit={handleSubmit} >
                <div>
                    <label className='flex' htmlFor='email'>Email </label>
                    <input className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white placeholder:text-gray focus:outline-none'
                        id='email'
                        autoComplete='email'
                        required
                        value={email}
                        placeholder='abs@gmail.com'
                        onChange={handleEmail}
                        type='email' />
                </div>
                <div className='mt-3'>
                    <label className='flex ' htmlFor='password'>Password </label>
                    <input className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white focus:outline-none'
                        id='password'
                        autoComplete='password'
                        required
                        value={password}
                        onChange={handlePassword}
                        type='password' />
                </div>
                <button className="block bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 mt-3 " type='submit'>Login</button>
                <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 mt-3 " type='button'>Forget Password</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2" onClick={handleRegister} type='button'>Register</button>
            </form>

        </div>
    )
}
export default LoginForm;
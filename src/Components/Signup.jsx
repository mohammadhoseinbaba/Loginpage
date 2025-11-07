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
        setEmail('')
        setName('')
        setPassword('')
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
        <div className='min-h-screen grid place-items-center px-4'>
            <form className='w-full max-w-sm' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name </label>
                    <input
                        className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white placeholder:text-gray focus:outline-none'
                        id='name'
                        value={name}
                        onChange={handleName}
                        type='text' />
                </div>
                <div className='mt-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white placeholder:text-gray focus:outline-none'
                        required
                        id='email'
                        value={email}
                        onChange={handleEmail}
                        type='email' />
                </div>
                <div className='mt-3 mb-3'>
                    <label htmlFor='password'>Password </label>
                    <input
                        className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white placeholder:text-gray focus:outline-none'
                        required
                        id='password'
                        value={password}
                        onChange={handlePassword}
                        type='password' />
                </div>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mt-3 " type='submit'>Sign up</button>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 ml-3" onClick={handleLogin} type='button'>Log in</button>
            </form>

        </div>
    )
}
export default SignUp
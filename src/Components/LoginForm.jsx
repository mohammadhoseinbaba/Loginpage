import { useState } from 'react'
import {useNavigate} from 'react-router'

function LoginForm({ onRegis }) {
    
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading , setLoading]=useState(false)
    const [error , setError]=useState("")
    
    const  handleSubmit =async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try{
       const response = await api.post("/users",{ params :{
      email,
      password,
          },} )
            if (!response.data || response.data.length === 0){
                throw new Error("Inavlid Email or password")
    } 
            navigate("/")
            setEmail('')
            setPassword('')
        }
            
        catch(e){
        const message = e instanceof Error ? e.message : "Login failed"
        setError(message)
    } finally{
        setLoading(false)
    }
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
                        onChange={(e)=>setEmail(e.target.value)}
                        type='email' />
                </div>
                <div className='mt-3'>
                    <label className='flex ' htmlFor='password'>Password </label>
                    <input className='mt-3 block min-w-0 bg-gray-500 rounded pr-3 pl-1 text-base text-white focus:outline-none'
                        id='password'
                        autoComplete='password'
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type='password' />
                </div>
                <button className="block bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 mt-3 " type='submit'>Login</button>
                <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 mt-3 " type='button'>Forget Password</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"  type='button'>Register</button>
            </form>

        </div>
    )
}
export default LoginForm;

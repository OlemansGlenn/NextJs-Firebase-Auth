import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type="email" onChange={(e:any) =>setData({...data, email: e.target.value,})} value={data.email} placeholder="Enter your email" required />
            <input type="password" onChange={(e:any) =>setData({...data, password: e.target.value,})} value={data.password} placeholder="Enter your password" required />
            <button type='submit'>Login</button>
        </form>
    </>
  )
}

export default Login
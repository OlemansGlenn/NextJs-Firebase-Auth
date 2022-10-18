import { contains, FirebaseError } from '@firebase/util'
import Router from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      Router.push('/dashboard')
    } catch (err) {
      console.log(err)
      if(FirebaseError){
        Router.push('/login')
      }
    }

    console.log(data)
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={handleSignup}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
    
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />

        <button type="submit">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
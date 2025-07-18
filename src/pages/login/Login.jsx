import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('All fields are required!')
      return
    }

    setError(null)
    console.log('Logging in with:', { email, password })

    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="max-w-md mt-[200px] mx-auto  bg-[#fafafa] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">Login</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition"
        >
          Log In
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition"
        >
          Go back
        </button>
      </form>
    </div>
  )
}

export default Login

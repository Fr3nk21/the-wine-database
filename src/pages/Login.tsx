import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const handleLogin = async (e) => {
    e.preventDefault()
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === 'user' && password === 'password') {
      // Replace with actual authentication logic
      await login({ username })
    } else {
      alert('Invalid username or password')
    }
  }
  return (
    <div className="bg-red-500 flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-green-500 h-96 w-96 flex flex-col justify-center p-10 rounded-md"
      >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-md w-full mt-3"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md w-full mt-3"
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 px-4 py-2 rounded-md mt-10 hover:bg-yellow-500"
        >
          Login
        </button>
      </form>
    </div>
  )
}

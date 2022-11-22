import { useState } from 'react'

export default function LoginPage({ login }) {
  const [userName, setUserName] = useState('')

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userName)
    setUserName('')
  }

  return (
    <main className='LoginPage'>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          id='username'
          value={userName}
          onChange={handleChange}
          placeholder='Enter Your Username'
          required
        />
        <button className='' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}

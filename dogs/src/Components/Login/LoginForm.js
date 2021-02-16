import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })

    console.log(response)

    const json = await response.json()
    console.log(json)
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>

        <input
          type="text" 
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="password" 
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Logar</button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </div>
  )
}

export default LoginForm

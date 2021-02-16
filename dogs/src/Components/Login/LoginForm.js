import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

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

        <Input
          label="Usuario"
          type="text"
          name="username"
        />        

        <Input
          label="Senha"
          type="password"
          name="password"
        />

        <Button >Logar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </div>
  )
}

export default LoginForm

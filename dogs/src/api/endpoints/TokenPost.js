import React from 'react'

const TokenPost = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    console.log('submit')

    console.log({
      username,
      password,     
    })
    
    const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      
      headers: {
        'Content-Type' : 'application/json',

      },
      body: JSON.stringify({
        username,
        password,        
      })

    })

    console.log(response)

    const json = await response.json()
    setToken(json.token)
    console.log(json.token)
    
  }

  return (
    <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        value={username} 
        onChange={({target}) => {setUsername(target.value)}} 
        placeholder="username"
      />

      <input 
        type="text" 
        value={password} 
        onChange={({target}) => {setPassword(target.value)}} 
        placeholder="Password"
      />

      <button>Enviar</button>
      <p>{token}</p>
    </form>

  )
}

export default TokenPost

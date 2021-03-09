import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    console.log('submit')

    console.log({
      username,
      email,
      password
    })
    
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      
      headers: {
        'Content-Type' : 'application/json',

      },
      body: JSON.stringify({
        username,
        password,
        email,
      })

    })

    console.log(response)

    const json = await response.json()
    console.log(json)
    
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

      <input 
        type="email" 
        value={email} 
        onChange={({target}) => {setEmail(target.value)}} 
        placeholder="email"
      />


      <button>Enviar</button>
    </form>
  )
}

export default UserPost

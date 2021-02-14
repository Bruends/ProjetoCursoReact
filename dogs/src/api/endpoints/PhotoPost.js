import React from 'react'

const PhotoPost = () => {
  const [token, setToken] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [peso, setPeso] = React.useState('')
  const [idade, setIdade] = React.useState('')
  const [img, setImg] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault()
    console.log('submit')    
    
    const formData = new FormData();
    formData.append('img', img)
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)
    
    try {
      const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
        method: 'POST',
        
        headers: {
          Authorization : 'Bearer ' + token

        },
        body: formData

      })

      console.log(response)

      const json = await response.json()
      setToken(json.token)
      console.log(json.token)
    
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input 
        type="text" 
        value={token} 
        onChange={({target}) => {setToken(target.value)}} 
        placeholder="Token"
      />

      <input 
        type="text" 
        value={nome} 
        onChange={({target}) => {setNome(target.value)}} 
        placeholder="nome"
      />
      
      <input 
        type="text" 
        value={peso} 
        onChange={({target}) => {setPeso(target.value)}} 
        placeholder="peso"
      />

      <input 
        type="text" 
        value={idade} 
        onChange={({target}) => {setIdade(target.value)}} 
        placeholder="idade"
      />

      <input 
        type="file"        
        onChange={ ({target}) => {setImg(target.files[0])} }        
      />


      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost

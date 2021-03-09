import React from 'react'

const PhotoGet = () => {
 const [img, setImg] = React.useState([])

 async function handleSubmit(event) {
    event.preventDefault()

   const response = await fetch('https://dogsapi.origamid.dev/json/api/photo')
   const json = await response.json()
   console.log(json)
   setImg(json)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Enviar</button>
      {img.map(({src}) => {
       return (
         <img src={src} />
       ) 
      })}
    </form>
  )
}

export default PhotoGet

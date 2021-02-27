import React from 'react'

const types = {
  email: {
    regex: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
    message: 'Preencha um email válido'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')
  
  function validate(value) {
    if(type === false) return true

    if(value.length === 0) {
      setError('Preencha um valor')      
      return false
    
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false

    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }){
    if(error) validate(target.value)
    setValue(target.value)
    console.log(value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm

import React from "react"
import { Link } from "react-router-dom"
import { TOKEN_POST, USER_GET } from "../../api"
import useForm from "../../Hooks/useForm"
import Button from "../Forms/Button"
import Input from "../Forms/Input"
import { UserContext } from "../../userContext"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, data } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Logar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}

export default LoginForm

import React from "react"
import styles from "./header.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as Dogs } from "../Assets/dogs.svg"
import { UserContext } from "../userContext"

const Header = () => {
  const { data } = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/login">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header

import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()
  const {setLoggedUser} = useContext(ChatContext)
  
  const handleNavigate= ()=> {
   navigate("/Login")
  }

  const handleRegister = () => {
    setLoggedUser(true)
    navigate("/")
}
  const { handleAccounts } = useContext(ChatContext)
    
 const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    }

 const handleChangeName = (e) => {
    setName(e.target.value)
    }

 const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!email || !password || !name){return}

    
      handleAccounts({ email, name, password })
      
    navigate("/")
  }

  return (
    <section>
      <h2>REGISTRATE</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="correo electronico"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="text"
          placeholder="nombre de usuario"
          value={name}
          onChange={handleChangeName}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={handleChangePassword}
        />
        <button onClick={handleRegister}>INGRESAR</button>
          </form>
          <h2>¿Ya tienes una cuenta?</h2>
      <button onClick={handleNavigate}>Inicia Sesion aquí</button>
    </section>
  )
}

export { Register }
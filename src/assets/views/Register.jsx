import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(null)
  const [errorPassword, setErrorPassword]=useState(null)
  const {setLoggedUser} = useContext(ChatContext)
  const navigate = useNavigate()
  
  const handleNavigate= ()=> {
   navigate("/Login")
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
      if (!email || !password || !name) { return }
      
      
      if (name.length < 3 || (password.length < 6)  ) { 
        setErrorName(true)
        setErrorPassword(true)
        return
      }
    
    handleAccounts({ email, name, password })  
    setLoggedUser(true)
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
          required
          onChange={handleChangeEmail}
        />
        <input
          type="text"
          placeholder="nombre de usuario"
          value={name}
          required
          onChange={handleChangeName}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          required
          onChange={handleChangePassword}
        />
        {
          errorName && <p>El nombre de usuario requiere minimo 3 caracteres</p>
        }
        {
          errorPassword && <p>La contraseña requiere minimo 6 caracteres</p>
        }
        <button onClick={handleSubmit}>INGRESAR</button>

          </form>
          <h2>¿Ya tienes una cuenta?</h2>
      <button onClick={handleNavigate}>Inicia Sesion aquí</button>
    </section>
  )
}

export { Register }
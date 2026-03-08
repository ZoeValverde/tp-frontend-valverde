import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(true)
  const [errorEmail, setErrorEmail]= useState("")
  const [errorPassword, setErrorPassword] = useState(true)
  const [errorBlank, setErrorBlank]= useState("")
  const { setLoggedUser, handleAccounts} = useContext(ChatContext)
  const navigate = useNavigate()
  
  const handleNavigate= ()=> {
   navigate("/Login")
  }

    
 const handleChangeEmail = (e) => {
   setEmail(e.target.value)
   setErrorEmail("")
   setErrorBlank("")
  }

 const handleChangeName = (e) => {
   setName(e.target.value)
   setErrorBlank("")
   setErrorName("")
  }
  

 const handleChangePassword = (e) => {
   setPassword(e.target.value)
   setErrorPassword("")
   setErrorBlank("")
  }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!email || !password || !name) {
        setErrorBlank(true)
        return
      }    

const arroba = email.includes("@")

      setErrorEmail(!arroba)
      setErrorPassword(password.length < 6)
      setErrorName(name.length < 3)
      
      if (name.length < 3 || password.length < 6 || !arroba) {
        return
      }
    
    handleAccounts({ email, name, password })  
    setLoggedUser(true)
    navigate("/")
  }

  return (
    <section className="Register">
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
        {errorEmail && <p>Se necesita un Email valido</p>} 
        {errorName && <p>El nombre de usuario requiere minimo 3 caracteres</p>}
        {errorPassword && <p>La contraseña requiere minimo 6 caracteres</p>}
        {errorBlank && <p>Es necesario completar los datos</p>}
        <button onClick={handleSubmit}>INGRESAR</button>

      </form>
      <div className="register-login">
          <h2>¿Ya tienes una cuenta?</h2>
      <button onClick={handleNavigate}>Inicia sesion aquí</button>
    </div>
    </section>
  )
}

export { Register }
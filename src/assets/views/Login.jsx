import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState(null)
    const [errorBlank, setErrorBlank]= useState(null)
    const { login } = useContext(ChatContext)
  const navigate = useNavigate()
    
    const handleNavigate = () => {
        navigate("/Register")
    }

    const handleChangeEmail = (e) => { 
        setEmail(e.target.value)
        setErrorBlank("")
        setError("")
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
         setErrorBlank("")
        setError("")
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
         setErrorBlank("")
        setError("")
    }


    const handleSubmit = (e) => {
        setError(null)
        e.preventDefault()
        const response = login({ email, password, name })
        if (!name || !email || !password) {
            setErrorBlank(true)
            return
        }
        if (!response) {
            setError(true)
            return
        }


     navigate("/")
    }
    
    return (
        <section className="Login">
            <h2>INICIA SESIÓN</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="correo electronico"  onChange={handleChangeEmail} value={email}/>
                <input type="text" placeholder="nombre de usuario"  onChange={handleChangeName} value={name}/>
                <input type="password" placeholder="contraseña"  onChange={handleChangePassword} value={password}/>
                <button>INGRESAR</button> 
                {error && <h3>Error en alguno de los datos</h3>}
                {errorBlank && <p>Es necesario completar los datos</p>}
            </form>
            <div className="Login-Register">
        <h2>¿No tienes una cuenta?</h2>
            <button onClick={handleNavigate}>Registrate Aquí</button>
        </div>
        </section>
    )
}

export { Login }
import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"

const Aside = () => {
  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId, logout} = useContext(ChatContext)
  
  const handleLogout = () => {
  logout()
}

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  const handleClick = (id) => {
    handleSelectedUserId(id)
  }

  return (
    <aside>
      <h1>Chat</h1>
      <input className="search" type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      <section className="chats-section">
                {
                    filteredUsers.length===0? <p className="not-found-text">no hay contactos</p>: 
                    filteredUsers.map((user) => (
                      <button className="Chats" key={user.id} onClick={() => handleClick(user.id)}>
                        <img src={user.image} alt="" />
                        <div>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <p>{user.status}</p>
                        </div>
                        </button>
                    ))
                }
            </section>
            <section className="user-Panel">
                <img src="https://play-lh.googleusercontent.com/duj_SVESXrsYlsAqUjcIK15n0EQ5AV4g_YPi3cv4XqwzDHgigsCU5u7134BJu-Q6LQ=s256-rw" alt="foto de perfil" />
                <button  className="Aside-button" onClick={handleLogout}>cerrar sesion</button>
            </section>
    </aside>
  )
}

export { Aside }
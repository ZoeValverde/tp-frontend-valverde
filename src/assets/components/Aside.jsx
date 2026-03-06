import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"

const Aside = () => {
  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId } = useContext(ChatContext)

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
      <h1>Chat UTN</h1>
      <input className="search" type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      {
        filteredUsers.length === 0 && <p className="not-found-text">No se encontraron contactos</p>
      }
      <section className="chats-section">
                {
                    filteredUsers.length===0? <p>no hay contactos</p>: 
                    filteredUsers.map((user) => (
                      <button className="chat" key={user.id} onClick={() => handleClick(user.id)}>
                            <h3>{user.firstName} {user.lastName}</h3>
                        </button>
                    ))
                }
            </section>
            <section className="user-Panel">
                <img src="https://placehold.co/100x100" alt="foto de perfil"/>
                <h2>Natalie</h2>
                <button>cerrar sesion</button>
            </section>
    </aside>
  )
}

export { Aside }
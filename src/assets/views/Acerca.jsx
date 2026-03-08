const Acerca = () => {
    return (
        <main className="Acerca-main">
            <header>
                <a href="/Login">Login</a>
                <a href="/Register">Register</a>
                <a href="/">Home</a>
            </header>
            <section className="Acerca">
            <div>
                <h1>Aplicación de Mensajes</h1>
                    <p>Este proyecto es una aplicación de mensajes hecho en React, tomando de referencia la interfaz de WhatsApp o Messenger. La aplicación se basa en un Home en la que se componen de un Aside que lleva un buscador con sus contactos, y un panel con un botón para cerrar sesión. </p>
                    
                    <p> Para poder ingresar al Home se muestra en Login, un formulario con sus 3 inputs (Email, nombre de usuario y contraseña)
                    y un botón que te redirige al Registro en caso de no tener una cuenta, con el mismo formato que el Login.Para esta Aplicación se usó React,
                        usando como lenguajes principales JavaScript, HTML y CSS.</p>
                    
                    <p>Como herramienta externa se utilizó una librería llamada “react-router-dom” de npm para manejar las rutas y navegaciones que brinda el mismo.</p>

                <h2>Decisiones</h2>
                <h3>Cuenta</h3>
                    
                    <p>Desde la base del proyecto se decidió que todo se centre en la cuenta que el usuario crea, editando el proyecto base que el registro persista la cuenta y el “MockApi” sea solo una lista de contactos.</p>
        
                <h3>Experiencia de Usuario</h3>
                    <p>Se adaptó el registro para que en caso de ya tener una cuenta poder navegar hacia el login, de igual manera con el Login pero para navegar al Register.</p>

                    <p>Sobre el estilo es simple y sigue la del proyecto base, pero se eligió tonos azules para tener una armonia visual, además de elegir una tematica de animales para los contactos</p>
                
                    <h3>Observaciones personales/ dificultades</h3>
                    <p>Sobre el desempeño en el trabajo ha costado un poco de trabajo, algunos temas tomaron un poco de tiempo en entender, pero se pudo mejorar</p>
                    <p>Algo a mejorar es sobre el orden de los commits, la validación de los views "Login" y "Register" tomaron su tiempo en realizar y en diferentes momentos cambia sus estilos, eso es algo mejorar.</p>
            </div>
            </section>
            </main>
    )
}

export { Acerca }
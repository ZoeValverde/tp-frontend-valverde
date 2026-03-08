## Aplicación de mensajes

Este proyecto trata de una aplicación que como interfaz se basa en los softwares de mensajería, con su lista de contactos y su zona de chats como home y luego sus autenticación de datos con un login y un registro para crear una cuenta. 

Para este proyecto se usó React, los lenguajes principales fueron JavaScript, HTML y CSS, con una librería de NPM con el nombre de “react-router-dom” para las rutas de la aplicación.

#### ¿Cómo ejecutar el proyecto de manera local?

Para poder abrir el proyecto de manera local se necesita tener instalado “Node.js” y tener actualizado el “NPM” 

#### Pasos:

Paso 1:  Copiar el link del repositorio en el botón "clone" o desde el link de la página.

Paso 2: ir al Git Bash y poner los comandos "Git clone + link del repositorio".

Paso 3: Ir al Visual Studio Code y al abrir la carpeta poner en su terminal “npm install .”

Paso 4: Escribir “npm run dev” en la terminal y entrar al el link del localhost.


#### Instrucciones para el deploy

###### Estructura del proyecto
Toda la base del proyecto:

- Assets
- Main

Dentro de Assets hay 6 carpetas: 
- Components
- Context
- Routes
- Services
- Styles 
- Views

El proyecto tiene un main, donde dentro del contexto (ChatContext) tiene el “RouterApp”,  allí se encuentra todas las rutas del proyecto, Home siendo protegido por un componente llamado “RouteProtected”, en la que su función se basa en dejar entrar al Home a quien esté logueado. 
Home retorna dos componentes: Aside y Chat, ambas siendo lo principal de la aplicación, de un lado mostrando una lista de contactos y del otro en la chat de cada uno.
Además tiene otras dos Views importantes, el Login y el Register, donde en la autenticación de la aplicación, en la que ayuda a proteger el home validando la cuenta del usuario, en caso de no tener, el register permite crear uno para poder ingresar al Home.

Otras dos views que aportan al proyecto son “NotFound” en caso de ingresar una ruta no existente se ejecuta, y “Acerca” que muestra más información sobre el proyecto.

# Prueba Técnica - Programador (Front-end)

La siguiente es una prueba para evaluar a los futuros **Dixpergramadores Front-end**.

#### ¿Qué queremos en Dixper?

Principalmente los siguientes aspectos:

- [x] Creatividad para maquetar diseños
- [x] Calidad del código entregado (estructura y buenas prácticas)
- [x] Eficiencia de los algoritmos, sobre todo en los que tienen que ver con rxjs (la memoria lo agradecerá)
- [x] Estar familiarizado con Angular y Redux.
- [x] Agilidad con el uso de nuevas herramientas
- [x] Que nunca falte el toque gaming/freak en tus tareas

## IMPORTANTE

1. Asegúrate de tener `Node.js` y `npm` instalados.
2. Queremos que crees la aplicación utilizando **[Angular](https://angular.io/)**(2 o superior) + **Bootstrap** y **[NGRX](https://ngrx.io/)**.
3. Te recomendamos emplear un máximo de **5 horas** y enviar todo lo que puedas (no queremos explotar a nadie).
4. Necesitarás una **cuenta de GitHub** para realizar la prueba.
5. **Antes de comenzar a programar:**
   - Realizar un `Fork` de este repositorio.
   - Clonar el fork a tu máquina local.
   - Crear un `branch` en tu cuenta de GitHub utilizando tu nombre completo.
6. **Al finalizar**, existen 2 opciones para entregar tu proyecto:
   - 1. Realizar un `Commit` de tu proyecto, **enviar un `Pull Request` al branch con tu NOMBRE**, y nos a la siguiente dirección de correo electrónico [hello@dixper.io](mailto:hello@dixper.io).
   - 2. Crear un archivo comprimido (_.zip_ o _.rar_) de tu proyecto y enviar a la siguiente dirección de correo electrónico [hello@dixper.io](mailto:hello@dixper.io).

## EJERCICIO PRÁCTICO

**Objetivo:** Crear una aplicación parecida al diseño adjunto que obtenga una lista de usuarios y muestre la información de sus perfiles, explotando el API Rest pública de GitHub https://api.github.com/search/users?q=USER_NAME.

#### Requerimientos generales

1. **Diseño y maquetación:** El proyecto debe parecerse lo máximo posible al siguiente diseño:

   ![Diseño y maquetación](https://cdn.dribbble.com/users/192407/screenshots/6408843/employees4_2x.png)

   ![Diseño y maquetación](https://cdn.dribbble.com/users/192407/screenshots/6408843/employees4_2x.png)

2. **Funcionalidad:** La aplicación debe cumplir con los siguientes requisitos:

   - **Página de Inicio**

     - Crear una aplicación que incluya un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API anteriormente indicada.

     - Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario `'user.login'`, el avatar `'user.avatar_url'` y el id `'user.id'` de cada registro.

     - Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad `'user.login'` como parámetro.

     - Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 3 caracteres.

     - Añadir un `Guard` que no permita consultar el perfil de usuarios con un `'user.score'` menor a **30.0**.

   - **Página de Perfil**

     - Crear un componente independiente en el que se lea el parámetro de la URL, y a continuación, obtenga los datos de dicho usuario mediante el siguiente end point: https://api.github.com/users/USER_NAME e incluir los siguientes campos en el componente: `'user.avatar_url'`, `'user.location'`, `'user.bio'`, `'user.followers'`, `'user.following'`.

     - Mostrar también una lista con los repositorios del usuario seleccionado mediante el siguiente end point https://api.github.com/users/USER_NAME/repos

     - Mostrar los siguientes campos de cada repositorio: `'repoList.private'`, `'repoList.size'`, `'repoList.forks'`, `'repoList.created_at'`, `'repoList.updated_at'`, `'repoList.url'`

     - Mostrar un resumen con el sumatorio de los siguientes campos de todos los repositorios obtenidos: `'repoList.open_issues'`, `'repoList.size'`, `'repoList.forks'`,

   - **OTROS**

     - Incluir un componente para mostrar mensajes de Error en toda la aplicación.

3. **SCSS:** Utilizar scss para escribir los ficheros de estilos.

4. **Iconos:** Utilizar [Font Awesome](http://fontawesome.io/) para los iconos necesarios

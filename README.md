# Servicio Web REST

Este proyecto consiste en un servicio web REST para la gestión de recursos relacionados con el crowdsourcing. Los principales recursos incluyen Donatarios, Donadores y Proyectos. Cada Proyecto puede tener un Donatario y uno o más Donadores. Este servicio permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en estos recursos y consultas relacionadas.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

- **/modelos:** Contiene archivos JavaScript que simulan la persistencia de datos en memoria utilizando listas. Cada archivo modelo se enfoca en un recurso específico (Donatarios, Donadores, Proyectos).

- **/controladores:** Incluye archivos con funciones específicas para manipular los recursos y realizar operaciones CRUD.

- **/rutas:** Contiene archivos de rutas individuales para cada recurso. Se implementa la carga dinámica de rutas mediante el archivo `index.js`.

- **app.js:** Archivo de inicialización del servidor y manejo de las rutas.

## Configuración y Uso

1. Clona este repositorio en tu máquina local.

2. Instala las dependencias necesarias usando `npm install`.

3. Inicia el servidor con `node app.js`.

4. Puedes utilizar un cliente REST como Postman para probar las diferentes rutas y funcionalidades del servicio.

## Rutas Disponibles

- **GET /donatarios:** Obtiene todos los Donatarios.
- **GET /donadores:** Obtiene todos los Donadores.
- **GET /proyectos:** Obtiene todos los Proyectos.

Además, puedes realizar operaciones CRUD para cada recurso:

- **POST /donatarios:** Crea un nuevo Donatario.
- **POST /donadores:** Crea un nuevo Donador.
- **POST /proyectos:** Crea un nuevo Proyecto.

- **GET /donatarios/{RFC}:** Obtiene un Donatario por RFC.
- **GET /donadores/{RFC}:** Obtiene un Donador por RFC.
- **GET /proyectos/{ID}:** Obtiene un Proyecto por ID.

- **PUT /donatarios/{RFC}:** Actualiza un Donatario por RFC.
- **PUT /donadores/{RFC}:** Actualiza un Donador por RFC.
- **PUT /proyectos/{ID}:** Actualiza un Proyecto por ID.

- **DELETE /donatarios/{RFC}:** Elimina un Donatario por RFC.
- **DELETE /donadores/{RFC}:** Elimina un Donador por RFC.
- **DELETE /proyectos/{ID}:** Elimina un Proyecto por ID.

## Ejemplos de Solicitudes

A continuación, se presentan ejemplos de solicitudes utilizando Postman:

- **Crear un nuevo Donatario:**
  - Método: POST
  - URL: `http://localhost:puerto/api/donatarios`
  - Cuerpo (JSON): `{ "RFC": "NuevoRFC", "nombre": "Nuevo Donatario", ... }`

- **Actualizar un Donador existente:**
  - Método: PUT
  - URL: `http://localhost:puerto/api/donadores/RFC-001`
  - Cuerpo (JSON): `{ "RFC": "RFC-001", "nombre": "Donador Actualizado", ... }`

- **Eliminar un Proyecto existente:**
  - Método: DELETE
  - URL: `http://localhost:puerto/api/proyectos/PR-100`

## Contribuciones

Si deseas contribuir a este proyecto, ¡te invitamos a hacerlo! Siéntete libre de crear un fork y enviar un pull request con tus mejoras.

## Licencia

Este proyecto se encuentra bajo la [Licencia MIT](LICENSE).

---
**Autor:** Tu Nombre

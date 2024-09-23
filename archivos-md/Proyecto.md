# Proyecto: Promptest Web App

## 1. Descripción del Proyecto

**Promptest** es una aplicación web para que los usuarios gestionen "prompts" (indicaciones o comandos que pueden generar y utilizar). Los usuarios registrados pueden crear, copiar y eliminar sus propios prompts. La aplicación ofrece una experiencia de usuario sencilla y eficiente, con acceso personalizado y seguro a la información.

## 2. Objetivos del Proyecto

- **Gestión de Prompts**: Los usuarios podrán crear, ver, copiar y eliminar prompts.
- **Autenticación**: La app gestiona usuarios registrados que pueden ver solo sus propios prompts.
- **Persistencia de Datos**: Los prompts se guardan en una base de datos relacional (MySQL), accesible solo por el usuario que los ha creado.
- **Experiencia Intuitiva**: Interfaz clara y fácil de usar, permitiendo interacción directa con las funcionalidades de la aplicación.

## 3. Tecnologías Utilizadas

**Frontend**:
- **HTML5**: Estructuración de la página.
- **CSS3**: Diseño y presentación visual.
- **JavaScript (ES6)**: Lógica de interacción del usuario.
- **Fetch API**: Comunicación asíncrona con el servidor.

**Backend**:
- **Node.js**: Plataforma para el servidor.
- **Express.js**: Framework para gestionar rutas HTTP y la lógica del servidor.
- **MySQL**: Base de datos relacional para almacenar usuarios y prompts.
- **MySQL2**: Paquete Node.js para interactuar con la base de datos.

**Servicios**:
- **MySQL Hosting**: La base de datos está alojada de forma remota.
- **GitHub**: Control de versiones y almacenamiento del código.
- **CORS**: Permite el acceso entre dominios.

## 4. Estructura de Archivos y Carpetas

Prompetes                 
├─ CSS                    
│  ├─ style_index.css     
│  └─ style_main.css      
├─ login                  
│  └─ login.js            
├─ main                   
│  ├─ copiarPrompt.js     
│  ├─ deletePrompt.js     
│  ├─ grabarPrompt.js     
│  ├─ limpiarCampos.js    
│  ├─ main.html           
│  └─ showPrompts.js      
├─ registro               
│  ├─ registro.html       
│  ├─ registro.js         
│  └─ validarRegistro.js  
├─ index.ejemplo.js       
├─ index.html             
├─ index.js               
├─ package-lock.json      
├─ package.json           
└─ ProyectThree           


**Descripción de Archivos y Carpetas**:

- **index.html**: Página principal donde el usuario puede iniciar sesión o registrarse.
- **login/login.js**: Maneja el proceso de inicio de sesión. Valida las credenciales del usuario enviadas al servidor mediante una solicitud `POST`. Si son correctas, se almacena el `usuario_id` en el `localStorage` para gestionar la sesión del usuario.
- **main**:
  - **main.html**: Contiene un formulario donde los usuarios pueden agregar un título y un prompt, los cuales luego pueden ser grabados, eliminados o copiados.
  - **copiarPrompt.js**: Gestiona la funcionalidad de copiar prompts al portapapeles.
  - **deletePrompt.js**: Maneja la eliminación de prompts del usuario.
  - **grabarPrompt.js**: Permite a los usuarios grabar nuevos prompts en la base de datos.
  - **limpiarCampos.js**: Limpia los campos del formulario cuando el usuario hace clic en el botón "Limpiar".
  - **showPrompts.js**: Carga y muestra los prompts del usuario autenticado y asigna los eventos de copiar y eliminar.
- **registro**:
  - **registro.html**: Página donde los usuarios nuevos se registran para usar la aplicación.
  - **registro.js**: Maneja el proceso de registro enviando la información al servidor.
  - **validarRegistro.js**: Realiza validaciones en el frontend para asegurar que los campos del formulario de registro están correctos antes de enviarlos.
- **index.ejemplo.js**: Archivo del servidor sin credenciales de la base de datos, usado como ejemplo para subir a GitHub.
- **index.js**: Archivo del servidor con las credenciales de conexión a la base de datos y la configuración de las rutas.
- **.gitignore**:
  - `index.js`: Excluye el archivo que contiene las credenciales de la base de datos.
  - `node_modules/`: Excluye la carpeta de dependencias.
  - `/comparar`: Carpeta temporal utilizada para comparar archivos antes de reemplazarlos.

## 5. Desarrollo de la Aplicación

### Fases de Desarrollo:

1. **Desarrollo del Frontend**: 
   - Creación de formularios de inicio de sesión, registro y manejo de prompts.
   - Implementación de la lógica de los eventos de los botones para copiar, eliminar y grabar prompts.
   - Estilos en `CSS` para una interfaz amigable.

2. **Configuración del Backend**: 
   - Creación de rutas de API en **Node.js** con **Express** para autenticar, crear, eliminar y obtener prompts.
   - Configuración de la conexión con la base de datos MySQL.

3. **Conexión Frontend-Backend**: 
   - Uso de `fetch` para conectar el frontend con el backend mediante solicitudes HTTP.
   - Manejo de respuestas JSON para interacciones con la base de datos.

4. **Pruebas**:
   - Pruebas locales de la funcionalidad.
   - Subida a **GitHub** del proyecto, excluyendo credenciales.

## 6. Entorno de Desarrollo y Servicios

- **Sistemas Operativos**: Compatible con **Windows**, **macOS** y **Linux**.
- **Herramientas de Desarrollo**:
  - **Node.js (v20.16.0)**: Servidor backend.
  - **MySQL**: Base de datos.
  - **VSCode**: Editor de código.
  - **GitHub**: Control de versiones.
- **Servicios Externos**: 
  - Hosting para la base de datos MySQL.
  
## 7. Seguridad

- Las credenciales sensibles del servidor se almacenan en un archivo local (`index.js`), que no se sube a GitHub.
- **Gitignore**: Protege las credenciales y dependencias del sistema, excluyendo archivos sensibles y temporales.

## 8. Futuras Expansiones

1. **Mejora de la interfaz**: Implementar funcionalidades como la edición de prompts.
2. **Seguridad avanzada**: Incorporar tokens JWT para mejorar la seguridad de la autenticación.
3. **Optimización del rendimiento**: Mejorar las consultas SQL para soportar una mayor cantidad de usuarios.



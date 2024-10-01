# Proyecto Promptest Web App

```javascript
1. Proyecto Promptest:
   - Se creó una aplicación web donde los usuarios pueden gestionar "prompts" (crear, copiar, eliminar).
   - Se desarrolló usando HTML5, CSS3, JavaScript (ES6), Node.js, Express.js, y MySQL.

2. Estructura del Proyecto:
   - Archivos Frontend: main.html, showPrompts.js, grabarPrompt.js, deletePrompt.js, copiarPrompt.js, limpiarCampos.js, registro.html, registro.js, validarRegistro.js, login.js, style_index.css, style_main.css.
   - Archivos Backend: index.js con rutas para login, creación, obtención y eliminación de prompts.
   - Estructura de carpetas: Proyecto organizado en carpetas main, login, registro, CSS.

3. Base de Datos:
   - Se creó una tabla prompts en MySQL para almacenar prompts de usuarios.
   - Se definió un archivo SQL para la estructura de la base de datos.

4. Autenticación de Usuarios:
   - El sistema utiliza localStorage para manejar el usuario_id después de iniciar sesión.
   - Se agregó la función getUsuarioId() para obtener el ID del usuario autenticado desde localStorage.

5. Frontend:
   - Funciones desarrolladas para crear prompts (grabarPrompt), eliminar prompts (deletePrompt), y copiar prompts al portapapeles (copiarAlPortapapeles).
   - La funcionalidad de eliminar y copiar se mejoró para trabajar con eventos de clic dentro de JavaScript en lugar de HTML.

6. Backend:
   - Se definieron rutas en index.js para:
     - Grabar un prompt (POST /grabar-prompt).
     - Eliminar un prompt (DELETE /eliminar-prompt/:usuario_id/:prompt_id).
     - Obtener los prompts de un usuario (GET /obtener-prompts/:usuario_id).
     - Manejo de inicio de sesión (POST /login).

7. Cambios para facilitar el flujo de trabajo:
   - Se mejoró el código JavaScript para evitar el uso de eventos onclick en HTML, manejando eventos desde el JavaScript con querySelector.
   - Se corrigieron errores relacionados con el uso de import en JavaScript modular.

8. Problemas resueltos:
   - Se resolvió un problema donde los prompts de diferentes usuarios se mezclaban.
   - Se ajustó la forma en que se eliminan y muestran los prompts en el DOM sin recargar la página.

9. Documentación del Proyecto:
   - Se creó un esquema general del proyecto en Markdown para ser utilizado en GitHub Wiki o como README.md.
   - Se recomendó usar GitHub para documentar las tareas pendientes (archivo TODO.md).

10. Próximos pasos:
   - Mejora de la interfaz, implementación de JWT para seguridad, optimización de rendimiento en consultas SQL, y soporte de múltiples idiomas.

/* Ejercicio 01: Encadenamiento de Callbacks (Callback Hell controlado) 
   Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras. 
*/

// Importamos solo lo que necesitamos de la capa de servicios
import { obtenerUsuario, activarUsuario } from './services/userService.js';

// Función para mostrar el resultado (Capa de Vista/Consola)
function finalizarRegistro(usuarioFinal) {
    console.log("--- Registro completado con éxito ---");
    // Imprimimos el objeto final en formato tabla
    console.table(usuarioFinal); 
}

// --- EJECUCIÓN (El flujo de la aplicación) ---
// Iniciamos el encadenamiento
obtenerUsuario((user) => {
    // Cuando el usuario es creado, llamamos a la activación
    activarUsuario(user, (userActivado) => {
        // Finalmente, cuando está activado, mostramos el reporte
        finalizarRegistro(userActivado);
    });
});
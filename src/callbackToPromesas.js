/* 5. Transformando Callbacks en Promesas 
Ejercicio: 
Convertir el ejercicio anterior en una estructura basada en Promesas con .then(). 
Meta: visualizar cómo mejora la legibilidad. */


// Importamos las versiones de Promesas
import { obtenerUsuarioPromesa, activarUsuarioPromesa } from './services/userService.js';

// Ejecución encadenada (Vertical)
obtenerUsuarioPromesa()
    .then((usuario) => {
        // Retornamos la siguiente promesa para seguir la cadena
        return activarUsuarioPromesa(usuario);
    })
    .then((usuarioActivado) => {
        console.log("Registro completado con éxito mediante Promesas:");
        console.table(usuarioActivado);
    })
    .catch((error) => {
        // Si algo falla en cualquier punto, cae aquí
        console.error("Hubo un error:", error);
    });
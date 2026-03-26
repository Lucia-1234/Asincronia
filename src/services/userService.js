// Importamos nuestro prompt compartido
import prompt from './promptService.js';

// 1. Función para obtener el usuario (Lógica de Datos)
export function obtenerUsuario(callback) {
    console.log(`Buscando usuario...`);
    // Simulamos tiempo de espera de red/servidor
    setTimeout(() => {
        let nombreIngresado = prompt("¿Cómo se llama? ");
        let rolIngresado = prompt("¿Cuál es su profesión? ");

        const usuario = {
            id: Math.floor(Math.random() * 1000),
            nombre: nombreIngresado,
            rol: rolIngresado,
            estaActivo: false
        };
        // Enviamos el objeto al siguiente eslabón de la cadena
        callback(usuario); 
    }, 1700);
}

// 2. Función para activar (Lógica de Proceso)
export function activarUsuario(usuario, callback) {
    console.log(`Activando a ${usuario.nombre}...`);
    setTimeout(() => {
        // Modificamos el objeto recibido por referencia
        usuario.estaActivo = true;
        usuario.fechaActivacion = new Date().toLocaleDateString(); 
        // Devolvemos el objeto actualizado
        callback(usuario);
    }, 2000);
}
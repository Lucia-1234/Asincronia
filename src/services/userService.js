// Importamos nuestro prompt compartido
import prompt from './promptService.js';

//----------CAllBACKHELL O CALLBACK CONTROLADO-----------
// 1. Función para obtener el usuario (Lógica de Datos)
export function obtenerUsuario(callback) {
    console.log(`Buscando usuario...`);
    // Simulamos tiempo de espera de red/servidor
    setTimeout(() => {
        let nombreIngresado = prompt("¿Como se llama? ");
        let rolIngresado = prompt("¿Cual es su profesión? ");

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

// 2. Función para activar (Logica de Proceso)
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


//----------CALLBACK EN PROMESAS----------

// 1. Obtener Usuario (Versión Promesa)
export function obtenerUsuarioPromesa() {
    // Retornamos una nueva instancia de Promise
    return new Promise((resolve, reject) => {
        console.log("Iniciando búsqueda de usuario (Promesa)...");

        setTimeout(() => {
            let nombreIngresado = prompt("¿Cómo se llama? (Promesa): ");
            let rolIngresado = prompt("¿Cuál es su profesión? (Promesa): ");

            // Creamos el objeto exactamente igual
            const usuario = {
                id: Math.floor(Math.random() * 1000),
                nombre: nombreIngresado,
                rol: rolIngresado,
                estaActivo: false
            };

            // En lugar de llamar a un callback, usamos resolve()
            // resolve envía el objeto al siguiente .then()
            if (nombreIngresado) {
                resolve(usuario);
            } else {
                reject("Error: El nombre es obligatorio.");
            }
        }, 1700);
    });
}

// 2. Activar Usuario (Versión Promesa)
export function activarUsuarioPromesa(usuario) {
    return new Promise((resolve) => {
        console.log(`Activando a ${usuario.nombre} (Promesa)...`);

        setTimeout(() => {
            // Modificamos el objeto que nos llegó por parámetro
            usuario.estaActivo = true;
            usuario.fechaActivacion = new Date().toLocaleDateString();

            // Resolvemos con el usuario ya actualizado
            resolve(usuario);
        }, 2000);
    });
}

/* Encadenamiento de Callbacks (Callback Hell controlado) 
Ejercicio: 
Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar 
resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks. 
Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras. */
import libreria from 'prompt-sync';
const prompt = libreria();
// 1. Obtenemos un objeto con la información base
function obtenerUsuario(callback) {
    console.log(`Buscando usuario...`);
    setTimeout(() => {
      // Pedimos el nombre y el rol al usuario
        let nombreIngresado = prompt("¿como se llama?");
        let rolIngresado = prompt("¿cual es su profesion?");
        // Creamos un objeto con los datos
        const usuario = {
            id: Math.floor(Math.random() * 1000),
            nombre: nombreIngresado,
            rol: rolIngresado,
            estaActivo: false
        };
        callback(usuario); // Pasamos todo el objeto al siguiente paso
    }, 1700);
}

// 2. Procesamos el objeto (por ejemplo, activamos al usuario)
function activarUsuario(usuario, callback) {
    console.log(`Activando a ${usuario.nombre}...`);
    setTimeout(() => {
        // Modificamos una propiedad del objeto
        usuario.estaActivo = true;
        usuario.fechaActivacion = new Date().toLocaleDateString(); // Agregamos un dato nuevo
        callback(usuario);
    }, 2000);
}

//mostramos el objeto final
function finalizarRegistro(usuarioFinal) {
    console.log("Registro completado:");
    // Imprimimos el objeto completo para ver todas sus "llaves"
    console.table(usuarioFinal); 
}

//ejecutamos el ejercicio
obtenerUsuario((user) => {
    activarUsuario(user, (userActivado) => {
        finalizarRegistro(userActivado);
    });
});


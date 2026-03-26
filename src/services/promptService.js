// Importamos la librería una sola vez para todo el proyecto
import libreria from 'prompt-sync';

// Configuramos la instancia del prompt
const prompt = libreria();

// Exportamos la herramienta para que cualquier ejercicio la use
export default prompt;
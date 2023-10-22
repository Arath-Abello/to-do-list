import { addTask } from "./funciones.js";

// obtenemos el elemento con id userInput
let userInput = document.getElementById('userInput');
// escuchamos el evento submit(cuando se envia el formulario y como no lo mandamos a ninguna parte pues se mantiene en en index y se reinicia para evitar esto ponemos un parametro event)
userInput.addEventListener('submit', (event)=>{
    // que no haga esta recarga de la pagina cuando mandamos la informacion
    event.preventDefault();
    // console.log('hola');
    // llamamos a la funcion
    addTask();
});
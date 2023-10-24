let idCounter = 0;
let input = document.querySelector('input[type="text"]');

let list = document.getElementById('list');
export let addTask = () => {
    // incrementara cada vez que agreguemos una nueva tarea
    idCounter++;
    // el valor del input lo guardamos en esta otra variable
    let newValue = input.value;

    // hacemos referencia a la variable y a esta misma variable le añadimos un parrafo con este valor (en vez de reemplazar el elemento anterior pues que se añada más parrafos con este valor)
    list.innerHTML += `
    <div class="task-container" id="${idCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="assets/images/trash-can-solid.svg" alt="icono de basurero para eliminar la tarea agregada" class="closeBtn">
    </div>`;

    // cuando se envie la informacion se borrara el contenido del input
    input.value = '';

    updateStats();
};

let updateStats = ()=>{
    // queryselectorAll retorna todos los elementos div dentro del <div id="list"></div>
    // osea seleccioname todos los elementos div que sean descendientes del div con id list
    let element = list.querySelectorAll('div');
    let stats = document.getElementById('stats');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    // length nos devuelve un numero dependiendo de la longitud de divs que hay y le restamos uno para que no cuente el que esta vacio en el html
    stats.innerHTML = `<p>Tareas pendientes: ${element.length-1} - Completadas: ${checkbox.length}</p>`;
};
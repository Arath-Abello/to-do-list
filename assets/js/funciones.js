let list = document.getElementById('list');
export let addTask = () => {
    // hacemos referencia a la variable y a esta misma variable le añadimos un parrafo con este valor (en vez de reemplazar el elemento anterior pues que se añada más parrafos con este valor)
    list = list.innerHTML += `
    <div class="task-container" id="1">
        <label>
            <input type="checkbox">
            Tarea
        </label>
        <img src="assets/images/trash-can-solid.svg" alt="icono de basurero para eliminar la tarea agregada" class="closeBtn">
    </div>`;
}
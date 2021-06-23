/**
 * Pasos para resolver el ejercicio
 * - Obtener los nodos con los que se va a interactuar
 * - Crear una función que agregue a la lista un item
 *  - Crear el nuevo elemento de tipo => ??
 *      - Opcional: agregar handler al evento click para agregar
 *      funcionalidad de tachado
 *         ayuda css text-decoration: line-through
 *                  text-decoration:none
 *      - Agregar a la lista el nuevo elemento
 *      - Borrar contenido del input (listo para ingresar nueva tarea)
 * - Crear los handlers para los eventos
 */
let input = document.getElementById('todo');
let btn = document.getElementById('addTodo');
let todoList = document.getElementById('todoList');

let addTodo = () => {
    let li = document.createElement('li');
    li.textContent = input.value; //guarda el valor

    //line-through
    li.addEventListener('click', () => {
        if (li.style.textDecoration === 'line-through'){
            li.style.textDecoration = 'none';
        } else {
            li.style.textDecoration = 'line-through';
        }
    });

    todoList.appendChild(li);
    input.value = '';   //limpia elinput
}

btn.addEventListener('click', addTodo);
input.addEventListener('keypress', event => {
    if(event.which === 13 || event.keyCode == 13){
        addTodo();
    }
});

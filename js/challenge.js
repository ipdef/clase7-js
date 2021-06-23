/**
 * Escribir un HTML que tenga la siguiente estructura:
 * Nombre : [input de texto] [botón] captura el click en el botón y da 
 * un alert que diga "Hola" + el nombre que escribieron en el input
 * **Challegue Opcional***
 * Si el/la usuario/a presiona el botón y el input está vacío, realiza
 * los siguientes pasos:
 * - Muestra el background del input en rojo
 * - Muestra un alert diciendo que el input está vacío
 * - Cuando el usuario comience a escribir vuelve el background del input a blanco
 */

//Obtenemos los nodos
let btn = document.getElementById('buttonName');
let input = document.getElementById('inputName');

//Crearmos los handlers para los eventos del botón y el text input
let btnClickHandler = () => {
    if(!input.value){
        input.style.backgroundColor = '#ff0000'; //rrggbb -> red -green -blue
        alert('El campo de texto está vacío');
        return;
    }
    alert(`Hola ${input.value}`);
}

let inputTextChangedHandler = () => {
    input.style.backgroundColor = '#ffffff';
}

//Agregamos los handlers a los respectivos eventos de los nodos
// btn.addEventListener('click', btnClickHandler);
// input.addEventListener('input', inputTextChangedHandler);


//otra forma
btn.onclick = btnClickHandler;
input.oninput = inputTextChangedHandler;
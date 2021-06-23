let nav = document.getElementById('nav');

let newItem = document.createElement('a');

newItem.textContent = 'newItem';
nav.appendChild(newItem);

// let paragraph = document.getElementsByName('p')[0];
// let arrayParagraph = paragraph.innerHTML.split(" ");

// arrayParagraph[5] = " " + arrayParagraph[5]

let logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => logo.classList.add('border'));

logo.addEventListener('mouseout', () => logo.classList.remove('border'));

//
let title = document.getElementById('titulo');

let ask = () => {
    let newTitle = prompt('Ingrese un texto: ');
    title.innerText = newTitle;
}

title.addEventListener('click', ask);
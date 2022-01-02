//querySelector
/*
const heading = document.querySelector(".header__texto h2");
console.log(heading + " probando un query selector");
*/

/* 
heading.textContent = "Rosalio";
heading.innerHTML = "Rosalio";
*/

//queriSelectorAll
/*
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
*/

/* enlaces.forEach(function(link){
    link.innerText = "Jodiendo esta onda";
}) */

/*
enlaces[0].innerText = "Ver video de las Twicitas";
enlaces[0].href = "https://www.youtube.com/watch?v=VcOSUOpACq0";
enlaces[0].classList.add("Nueva-clase");
enlaces[0].classList.remove("Nueva-clase");

//getElementById

const headingById = document.getElementById("heading");
console.log(headingById);
*/

//Create element

const enlaceAReady = document.createElement('A');
enlaceAReady.classList.add('navegacion__enlace');
enlaceAReady.href = 'https://www.youtube.com/watch?v=Jd5BdGRMzk8';
enlaceAReady.textContent = 'Enlace a Ready de Canserbero';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlaceAReady);

//Eventos

/*
const btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.addEventListener('click', function (evento) {
    console.log("Validando formulario");
    console.log('/n', evento);
    evento.preventDefault();
})

window.addEventListener('scroll', function (evento) {
    console.log('Escroleando....');
})
*/


let datos = {
    campo__nombre : '',
    campo__email : '',
    campo__mensaje : ''
}

const nombre = document.querySelector("#campo__nombre");
const email = document.querySelector("#campo__email");
const mensaje = document.querySelector("#campo__mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);


/* formulario.addEventListener('submit', validarFormulario); */
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evento){
    evento.preventDefault();

    const {campo__nombre, campo__email, campo__mensaje} = datos;

    if(campo__nombre === '' || campo__email === '' || campo__mensaje === '' ){
        mensajeError("Todos los campos son obligatorios");
        return;
    }

    mensajeCorrecto("Formulario valido")
}

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos)
}

function mensajeError(mensaje){
    const mensajeError = document.createElement("P");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mensaje-error');

    formulario.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 5000);
}

function mensajeCorrecto(mensaje){
    const mensajeCorrecto = document.createElement("P");
    mensajeCorrecto.textContent = mensaje;
    mensajeCorrecto.classList.add('mensaje-correcto');

    formulario.appendChild(mensajeCorrecto);

    setTimeout(() => {
        mensajeCorrecto.remove();
    }, 5000);
}
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
 btnEnviar.addEventListener('click',function(evento){
     console.log("Validando formulario");
     console.log('/n',evento);
     evento.preventDefault();
 })

 window.addEventListener('scroll',function(evento){
     console.log('Escroleando....');
 }) 
 */
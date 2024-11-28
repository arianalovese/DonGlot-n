function restar(actual, nacimiento){
    return actual - nacimiento;
    }

let nombre = prompt ("ingrese su nombre")
let actual = 2024
let nacimiento = prompt ("ingrese su año de nacimiento")
let resultado = restar(actual - nacimiento);

alert("Bienvenida " + nombre + "! sabemos que usted tiene " + resultado + " años, nunca es tarde para aprender una nueva receta!")


const boton = document.getElementById('buscarBtn');
boton.addEventListener('click', function(){
boton.style.backgroundColor = 'green';
boton.style.color = 'white';
});


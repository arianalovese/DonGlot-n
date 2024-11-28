const inputs = document.querySelectorAll('input');


function cambiarColorEscritura(event) {
    if (event.target.value.trim() !== '') {  
        event.target.style.borderColor = '#e4dec6'; 
    } else {
        event.target.style.borderColor = ''; 
    }
}

inputs.forEach(input => {
    input.addEventListener('input', cambiarColorEscritura); 
});
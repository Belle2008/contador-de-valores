let numero = 0;

const btnSoma = document.getElementById("Soma");
btnSoma.addEventListener("click", ()=>{
    numero = numero +1;
    document.getElementById('value').innerHTML = numero;
});



const btnMenos = document.getElementById("Menos");
btnMenos.addEventListener('click', () =>{
    numero = numero -1;
    document.getElementById('value').innerHTML = numero;
});
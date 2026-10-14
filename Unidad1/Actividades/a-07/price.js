let precio = prompt("Cual es el sablazo?");
let IVA = prompt("Cuanto se lleva perro sanxe?");
let precioFinal;

if (isNaN(precio) || isNaN(IVA)) {
    alert("Por favor ingresa un número válido");
}

precioFinal = precio + precio * IVA;
alert(`El precio final es: ${precioFinal}`);
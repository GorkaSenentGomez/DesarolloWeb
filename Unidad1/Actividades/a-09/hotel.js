const nombre = prompt("Ingrese su nombre");
const edad = prompt("Ingrese su edad");
const numeroNoches = prompt("Ingrese el numero de noches que se quedara");
const TipodeHabitacion = prompt("Ingrese el tipo de habitacion que desea (Standard o superior)");
let precioFinal;

if (isNaN(edad) || isNaN(numeroNoches)) {
    alert("Por favor ingresa un número válido");
} else if (edad < 18) {
    alert("A tu casa a ver Pocoyo");
} else if (TipodeHabitacion !== "Standard" && TipodeHabitacion !== "Superior") {
    alert("Tipo de habitación no válido");
} else { if (TipodeHabitacion === "Standard") {
    let precio = 60; }
    else precio = 90;

    if (numeroNoches > 7) {
        precioFinal = precio * numeroNoches * 0.9;
    } else {
        precioFinal = precio * numeroNoches;
    }

    alert(`El precio final es: ${precioFinal}`);
}

let numero = prompt("Ingrese un numero para contar hacia atras");

if (isNaN(numero)) {
    alert("Por favor ingresa un número válido");
} else while (numero >= 0) {
    alert(numero);
    numero--;
}
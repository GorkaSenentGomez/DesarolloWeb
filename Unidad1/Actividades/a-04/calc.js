let numero1 = Number(prompt("Ingrese numero1"));
let numero2 = Number(prompt("Ingrese numero2"));



let suma = Number(numero1) + Number(numero2);
alert(`La suma es: ${suma}`);

let resta = Number(numero1) - Number(numero2);
alert(`La resta es: ${resta}`);

let multiplicacion = Number(numero1) * Number(numero2);
alert(`La multiplicacion es: ${multiplicacion}`);


if (numero2 == 0) {
    alert("No se puede dividir entre 0");
} else {
    let division = Number(numero1) / Number(numero2);
    alert(`La division es: ${division}`);
}

if (numero1 % 2 == 0) {
    alert(`El numero ${numero1} es par`);
} else {
    alert(`El numero ${numero1} es impar`);
}

if (numero2 % 2 == 0) {
    alert(`El numero ${numero2} es par`);
} else {
    alert(`El numero ${numero2} es impar`);
}





let n = prompt("Ingrese su numero");
let suma3 = 0;
let pares = 0;
let impares = 0;

if (isNaN(n)) {
    alert("Por favor ingresa un número válido");
}
else {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            suma3 += i;
        }
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    alert("La suma de los múltiplos de 3 es: " + suma3);
    alert("La cantidad de números pares es: " + pares);
    alert("La cantidad de números impares es: " + impares);
}
const VALID_USER = "admin";
const VALID_PASSWORD = "1234";

let user = prompt("Ingrese su usuario:");
let password = prompt("Ingrese su contraseña:");

if (user === VALID_USER && password === VALID_PASSWORD) {
    alert("Benvenuto");
} else  if (user !== VALID_USER) {
    alert("Usuario incorrecto");
} else if (password !== VALID_PASSWORD) {
    alert("Contraseña incorrecta");
} else {
    alert("Introduce algo válido");
}
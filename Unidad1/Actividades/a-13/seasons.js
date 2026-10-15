let nombreMes = prompt("Elige mes pescao");

function getseason(nombreMes) {
    switch (nombreMes.toLowerCase()) {
        case "diciembre":
        case "enero":
        case "febrero":
            return "Invierno";
        case "marzo":
        case "abril":
        case "mayo":
            return "Primavera";
        case "junio":
        case "julio":
        case "agosto":
            return "Verano";
        case "septiembre":
        case "octubre":
        case "noviembre":
            return "Otoño";
        default:
            return "Mes no válido";
    }
}
alert(getseason(nombreMes));
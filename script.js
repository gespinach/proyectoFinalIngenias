function login() {
    let nombre = prompt("Ingrese su nombre de Usuario")
    let clave = prompt("Ingrese su clave")

    if (nombre == "" || clave == "" ) {
        alert("Por favor, complete los campos requeridos")
    } else {
        alert("Usuario logueado con exito")
    }
}



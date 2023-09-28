function login() {
    let nombre = prompt("Ingrese su nombre de Usuario")
    let clave = prompt("Ingrese su clave")

    if (nombre == "" || clave == "" ) {
        alert("Por favor, complete los campos requeridos")
    } else {
        alert("Usuario logueado con exito")
    }
}




function masDetalle(){

let divDetalle = document.getElementById("divDetalleLibroDelDia");
let boton1 = document.getElementById("botonDetalleLibroDelDia");

    if(divDetalle.style.maxHeight == "0px"){     
       divDetalle.style.maxHeight = "400px";
       boton1.style.rotate = "180deg" ; 
    }else{  
   divDetalle.style.maxHeight = "0px";
   boton1.style.rotate = "0deg" ; 
   
    }
}


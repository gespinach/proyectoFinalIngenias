
let boton = document.querySelector("#botonDetalleLibroDelDia");
var divDetalle = document.getElementById("divDetalleLibroDelDia");
var boton1 = document.getElementById("botonDetalleLibroDelDia");
let alto;



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


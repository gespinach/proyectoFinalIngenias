let boton = document.querySelector("#botonDetalleLibroDelDia");
var divDetalle = document.getElementById("divDetalleLibroDelDia");
var boton1 = document.getElementById("botonDetalleLibroDelDia");
let alto;

boton.onclick = function(){

   if(screen.width<768){

   alto = "250px";
   
   }else if (screen.width <1024){
      alto = "170px"
      
   }else if(screen.width <1440){
      alto = "200px"
   }else{
      alto = "170px"
   }

    if(divDetalle.style.height == "0px"){
       
      
       divDetalle.style.height = alto;
       boton1.style.rotate = "180deg" ;  
   
    }else{  
   divDetalle.style.height = "0px";
   boton1.style.rotate = "0deg" ; 
   
     }
   

}

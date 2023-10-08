


let productos = [];
let carrito = [];
let acumuladoEnCarrito = document.getElementById("cantidadCarrito");



//-----------condiciones iniciales-------------------------------

if (carrito.length ==0){
  acumuladoEnCarrito.style.display = "none"
}
else {
  acumuladoEnCarrito.style.display = "block";
  calcularAcumuladoEnCarrito();
}

  //------------- constructor de producto---------------------------
class Producto {
  constructor(codigo, nombreProducto, imagen, precio) {
    this.codigo = codigo;
    this.nombreProducto = nombreProducto;
    this.imagen = imagen;
    this.precio = precio;
  }
}

  //--------------- constructor de itemCarrito----------------------
class ItemCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}


//----------Leer datos de csv---------------------------------------------
let numlinea = 0;
fetch('/datos/ejemplo.csv')
  .then(respuesta => respuesta.text())
  .then(contenido => {
    let lineas = contenido.split(/\n/);
    lineas.forEach(linea => { 
      linea = linea.trim();
      linea = linea.split(";");
      if (linea.length ==4){
       if(numlinea !=0){
        let nuevoProducto = new Producto(linea[0],linea[1],linea[2],linea[3]);
        productos.push(nuevoProducto);
       }
      }
     numlinea=numlinea+1;
    });

   crearElementos();
  });

//-------------------------------------------------------------------------

function crearElementos(){

  for(let i=0;i<=productos.length;i++){    
    let articulo = document.createElement("article");
    articulo.classList.add("articleProductos");
    let imagenHtml = document.createElement("img");
    imagenHtml.src = productos[i].imagen;
    let nombreProductoHtml = document.createElement("p");
    nombreProductoHtml.innerText = productos[i].nombreProducto;
    let precioHtml = document.createElement("p");
    precioHtml.innerText=productos[i].precio;
    let boton = document.createElement("input");
    boton.type = "button"
    boton.value = "Comprar"
    boton.classList.add("botonComprar");
    boton.id = productos[i].codigo;
    articulo.appendChild(imagenHtml);
    articulo.appendChild(nombreProductoHtml);
    articulo.appendChild(precioHtml);
    articulo.appendChild(boton);
    document.getElementById("ulListaDeProductos").appendChild(articulo);
    activarBoton(boton);
  }
}


//--------------------------------------------------------------------------



function activarBoton(boton){

 boton.addEventListener("click", function(event){
 event.preventDefault();
 let productoElegido = new Producto
 productoElegido = productos.find((producto) => producto.codigo === boton.id)
 let itemElegido = carrito.find((item)=> item.producto === productoElegido)
 let i = carrito.indexOf(itemElegido);
 console.log(i);
 if (i==-1){
 let nuevoItemCarrito = new ItemCarrito(productoElegido, 1);
 carrito.push(nuevoItemCarrito);
 } else{
  itemElegido.cantidad = itemElegido.cantidad +1;

 }
calcularAcumuladoEnCarrito();
 console.log(acumuladoEnCarrito);
 })
}


//----------------------------------------------------------------------



let iconoCarrito = document.getElementById("iconoCarrito");
 
iconoCarrito.addEventListener("click", function (event){
event.preventDefault();
if(acumuladoEnCarrito==0){
  document.getElementById("carritoVacio").showModal();
}else{
crearVentanaCarrito();
}
})

//------------------------------------------------------------------


acumuladoEnCarrito.addEventListener("click", function (event) {
  event.preventDefault

  if(acumuladoEnCarrito==0){
    document.getElementById("carritoVacio").showModal();
  }else{
  crearVentanaCarrito();
  }

})

//-----------------------------------------------------------------------


function crearVentanaCarrito(){

document.getElementById("ulListaDeCarrito").removeChild(document.getElementById("divParaRemover"));


let divParaRemover= document.createElement("div");
    divParaRemover.id = ("divParaRemover");
document.getElementById("ulListaDeCarrito").appendChild(divParaRemover);

let totalAPagar = 0;

for (let i=0; i<carrito.length; i++){
let item = carrito[i];
console.log(carrito[i]);
let articulo = document.createElement("article");
articulo.classList.add("articleCarrito");
let imagen = document.createElement("img");
console.log(item.producto.imagen);
imagen.src = item.producto.imagen ;
let nombreProducto = document.createElement("p");
nombreProducto.innerText = item.producto.nombreProducto;
let precio = document.createElement("p");
precio.innerText = item.producto.precio;
let divCantidadBotones = document.createElement("div");
divCantidadBotones.classList.add("divCantidadBotones");
let mas = document.createElement("input");
mas.type = "button";
mas.id = "mas";
mas.classList.add("botonCantidad");
mas.classList.add("mas");
mas.value = "+";
let cantidad = document.createElement("p");
cantidad.classList.add("classCarritoCantidadItem");
cantidad.innerText = item.cantidad;
let menos = document.createElement("input");
menos.type = "button";
menos.id = "menos";
menos.classList.add("botonCantidad");
menos.classList.add("menos");
menos.value = "-";
let subtotal = document.createElement("p");
subtotal.classList.add("classCarritoSubtotalItem");
let subtotalAPagar = item.cantidad * parseFloat(item.producto.precio.substring(1));
subtotal.innerText = "$" + subtotalAPagar;

divCantidadBotones.appendChild(mas);
divCantidadBotones.appendChild(cantidad);
divCantidadBotones.appendChild(menos);

articulo.appendChild(imagen);
articulo.appendChild(nombreProducto);
articulo.appendChild(precio);
articulo.appendChild(divCantidadBotones);
articulo.appendChild(subtotal);
divParaRemover.appendChild(articulo);

totalAPagar = totalAPagar + subtotalAPagar;

}

document.getElementById("importeTotal").innerText = "$" + totalAPagar;
document.getElementById("carritoModal").showModal();
}


let cerrarModal = document.getElementById("cerrarModal");

cerrarModal.addEventListener("click", function(event){
event.preventDefault();
document.getElementById("carritoModal").close();
})




function calcularAcumuladoEnCarrito(){
  let cantidadCalculada = 0;
  for (let i = 0; i<carrito.length;i++){
    cantidadCalculada = cantidadCalculada + carrito[i].cantidad;
  }
acumuladoEnCarrito.value = cantidadCalculada;
acumuladoEnCarrito.style.display = "block";

}



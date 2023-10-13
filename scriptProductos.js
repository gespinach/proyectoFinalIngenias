


let productos = [];
let carrito = [];
let vaciarCarrito = false;
let acumuladoEnCarrito = document.getElementById("cantidadCarrito");

let miCarritoStorage = localStorage.getItem("elLibroFeliz");
 if(miCarritoStorage.length>1){
let miCarrito= JSON.parse(miCarritoStorage);
carrito = miCarrito;
console.log(carrito);
 }

//-----------condiciones iniciales-------------------------------

if (carrito.length ==0){
  acumuladoEnCarrito.style.visibility = "hidden";
  acumuladoEnCarrito.value = 0;
}
else {
  acumuladoEnCarrito.style.visibility = "visible";
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
let productosCsv = "https://raw.githubusercontent.com/gespinach/proyectoFinalIngenias/master/datos/ejemplo.csv"

fetch(productosCsv)
  .then(respuesta => respuesta.text())
  .then(contenido => {
    let lineas = contenido.split(/\n/);
    lineas.forEach(linea => { 
      linea = linea.trim();
      linea = linea.split(",");
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
agregarACarrito(boton.id);
boton.value="Agregado";
boton.style.backgroundColor = "#0d3d47";
 })
}

 //-------------------------------------------------------------------------------

 function agregarACarrito(codigo){
 let productoElegido = new Producto
 productoElegido = productos.find((producto) => producto.codigo == codigo)
 let itemElegido = carrito.find((item)=> item.producto.codigo == codigo)
 let i = carrito.indexOf(itemElegido);
 console.log(i);
 if (i==-1){
 let nuevoItemCarrito = new ItemCarrito(productoElegido, 1);
 carrito.push(nuevoItemCarrito);
 } else{
  carrito[i].cantidad = itemElegido.cantidad +1;

 }
calcularAcumuladoEnCarrito();

// localStorage.removeItem("elLibriFeliz");
let carritoJSON = JSON.stringify(carrito);
localStorage.setItem('elLibroFeliz', carritoJSON);


 }



//----------------------------------------------------------------------



let iconoCarrito = document.getElementById("iconoCarrito");
 
iconoCarrito.addEventListener("click", function (event){
event.preventDefault();
if(carrito.length==0){
  let mensajeVacio = document.getElementById("mensajeCarritoVacio");
  mensajeVacio.innerText = "Carrito Vacío";
  setTimeout(function(){mensajeVacio.innerText=""}, 1000);

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
articulo.id = item.producto.codigo;
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
mas.name = item.producto.codigo;
let cantidad = document.createElement("p");
cantidad.id = item.producto.codigo;
cantidad.classList.add("classCarritoCantidadItem");
cantidad.innerText = item.cantidad;
let menos = document.createElement("input");
menos.type = "button";
menos.id = "menos";
menos.classList.add("botonCantidad");
menos.classList.add("menos");
menos.value = "-";
menos.name = item.producto.codigo;
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
activarBotonMas(mas);
activarBotonMenos(menos);
}

document.getElementById("importeTotal").innerText = "$" + totalAPagar;
document.getElementById("carritoModal").showModal();
}


let cerrarModal = document.getElementById("cerrarModal");

cerrarModal.addEventListener("click", function(event){
event.preventDefault();
cerrarCarrito();
})



//-----------------------------------------------------------------------

function cerrarCarrito(){
document.getElementById("carritoModal").close();
if(vaciarCarrito =true){
  carrito = [];
  vaciarCarrito = false;
  acumuladoEnCarrito.style.visibility = "hidden";
  acumuladoEnCarrito.value = 0;
  confirmarCompra.value = "Confirmar Compra"
  confirmarCompra.style.backgroundColor = "#368979";
  let botonesComprar = document.querySelector(".botonComprar");
  botonesComprar.style.backgroundColor = "#368979";
  botonesComprar.value = "Comprar";
}
}


//-----------------------------------------------------------------------

function calcularAcumuladoEnCarrito(){
  let cantidadCalculada = 0;
  for (let i = 0; i<carrito.length;i++){
    cantidadCalculada = cantidadCalculada + carrito[i].cantidad;
  }
acumuladoEnCarrito.value = cantidadCalculada;
acumuladoEnCarrito.style.visibility = "visible";
}

//-----------------------------------------------------------------------

let confirmarCompra = document.getElementById("idBotonConfirmarCompra");
confirmarCompra.addEventListener("click", function(event){
event.preventDefault;  
confirmarCompra.value = "Compra Confirmada!";
confirmarCompra.style.backgroundColor = "#0d3d47";
localStorage.setItem("elLibroFeliz","0");
vaciarCarrito = true;

})



//------------------------------------------------------------------------
function activarBotonMas(botonMas){
botonMas.addEventListener("click", function(event){
  agregarACarrito(event.target.name);

let cant = parseInt(botonMas.parentElement.children[1].innerText);
botonMas.parentElement.children[1].innerText = cant +1;
let itemCarrito = carrito.find((item)=> item.producto.codigo == event.target.name)
botonMas.parentElement.parentElement.children[4].innerText= itemCarrito.cantidad * parseFloat(itemCarrito.producto.precio.substring(1));
actualizarTotal();
})
}

//-----------------------------------------------------------------------------
function activarBotonMenos(botonMenos){
  botonMenos.addEventListener("click", function(event){

  let cant = parseInt(botonMenos.parentElement.children[1].innerText);  
    if(cant>1){
    quitarDeCarrito(event.target.name);
  
  
  botonMenos.parentElement.children[1].innerText = cant -1;
  let itemCarrito = carrito.find((item)=> item.producto.codigo == event.target.name)
  botonMenos.parentElement.parentElement.children[4].innerText= itemCarrito.cantidad * parseFloat(itemCarrito.producto.precio.substring(1));
  actualizarTotal();
    }
  })
  }

//----------------------------------------------------------------------------

function quitarDeCarrito(codigo){

  let productoElegido = new Producto
  productoElegido = productos.find((producto) => producto.codigo === codigo)
  let itemElegido = carrito.find((item)=> item.producto === productoElegido)
  let i = carrito.indexOf(itemElegido);
  carrito[i].cantidad = carrito[i].cantidad -1;
   
 calcularAcumuladoEnCarrito();

}



//------------------------------------------------------------------------------

function actualizarTotal(){
let total = 0;
for(let i =0; i<carrito.length;i++){
  total = total + carrito[i].cantidad * parseFloat(carrito[i].producto.precio.substring(1));
}
document.getElementById("importeTotal").innerText = "$" + total;

}




let productos = [];
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
        console.log(productos.length);
       }
      }
     numlinea=numlinea+1;
    });

   crearElementos();

  });


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

    articulo.appendChild(imagenHtml);
    articulo.appendChild(nombreProductoHtml);
    articulo.appendChild(precioHtml);
    articulo.appendChild(boton);
    document.getElementById("ulListaDeProductos").appendChild(articulo);
  }
}


  // constructor de producto
class Producto {
  constructor(codigo, nombreProducto, imagen, precio) {
    this.codigo = codigo;
    this.nombreProducto = nombreProducto;
    this.imagen = imagen;
    this.precio = precio;
  }
}

let catalogo = [];

class Libro {
    constructor(codigo, titulo, autor, genero, tema) {
      this.codigo = codigo;
      this.titulo= titulo;
      this.autor = autor;
      this.genero = genero;
      this.tema = tema;
    }
  }
  

//---------------------Cargar catálogo---------------------------------------------

let numlinea = 0;
let catalogoCsv = "https://raw.githubusercontent.com/gespinach/proyectoFinalIngenias/master/datos/catalogo4.csv"

fetch(catalogoCsv)
  .then(respuesta => respuesta.text())
  .then(contenido => {
    let lineas = contenido.split(/\n/);
    lineas.forEach(linea => { 
      linea = linea.trim();
      linea = linea.split(";");
      if (linea.length ==5){
       if(numlinea !=0){
        let nuevoLibro = new Libro(linea[0],linea[1],linea[2],linea[3],linea[4]);
        catalogo.push(nuevoLibro);
       }
      }
     numlinea=numlinea+1;
    });

  });

//---------------------------Buscar en catálogo----------------------------------------


 let buscar = document.getElementById("idBotonBuscar");
 
 
 buscar.addEventListener("click", function(event){
  event.preventDefault;
  if (buscar.value == "Buscar"){
    let codigoBuscado = document.getElementById("idCodigo").value;
    let tituloBuscado = document.getElementById("idTitulo").value;
    let autorBuscado = document.getElementById("idAutor").value;
    let generoBuscado = document.getElementById("idGenero").value;
    let temaBuscado = document.getElementById("idTema").value;

    if(codigoBuscado =="" && tituloBuscado==""&& autorBuscado=="" && generoBuscado=="" && temaBuscado=="" ){
      document.querySelector("#mensaje").innerText = "Ingrese al menos un criterio de búsqueda";
    }else{
    armarFiltro();
    buscar.value = "Nueva búsqueda"
    document.querySelector("#mensaje").innerText = "";
    }


  }else{
    let seccionCatalogo = document.getElementById("sectionTablaCatalogo");
    seccionCatalogo.removeChild(document.getElementById("paraRemover"));

   let seccionParaRemover = document.createElement("section");
   seccionParaRemover.id = "paraRemover";
   seccionCatalogo.appendChild(seccionParaRemover);

    
   document.getElementById("idCodigo").value=""
   document.getElementById("idTitulo").value=""
   document.getElementById("idAutor").value=""
   document.getElementById("idGenero").value=""
   document.getElementById("idTema").value=""

   buscar.value = "Buscar";
  }

 });

//---------------------------------------------------------------------




function armarFiltro(){
let codigoBuscado = document.getElementById("idCodigo").value;
let tituloBuscado = document.getElementById("idTitulo").value;
let autorBuscado = document.getElementById("idAutor").value;
let generoBuscado = document.getElementById("idGenero").value;
let temaBuscado = document.getElementById("idTema").value;


let listado = catalogo;

if (codigoBuscado.length>0){
  listado = catalogo.filter(libro=>libro.codigo == codigoBuscado);
}
else{
  if(tituloBuscado.length>0){
  listado = catalogo.filter(libro =>libro.titulo.indexOf(tituloBuscado)>-1);
}

if(autorBuscado.length>0){
let nuevoListado = listado.filter(libro =>libro.autor.indexOf(autorBuscado)>-1);
listado = nuevoListado;

}

if(generoBuscado.length>0){
  let nuevoListado2 = listado.filter(libro =>libro.genero.indexOf(generoBuscado)>-1);
  listado = nuevoListado2;
  }

  if(temaBuscado.length>0){
    let nuevoListado3 = listado.filter(libro =>libro.tema.indexOf(temaBuscado)>-1);
    listado = nuevoListado3;
    }
    
}
if (listado.length==0) {

      document.querySelector("#mensaje").innerText = "No se encontraron resultados";
      let seccionCatalogo = document.getElementById("sectionTablaCatalogo");
     seccionCatalogo.removeChild(document.getElementById("paraRemover"));

    let seccionParaRemover = document.createElement("section");
    seccionParaRemover.id = "paraRemover";
    seccionCatalogo.appendChild(seccionParaRemover);
    }else{
      document.querySelector("#mensaje").innerText = "";
     armarListado(listado);
    } 
}
;


//--------------------------------------------------------------------------------


function armarListado(listado){
let seccionCatalogo = document.getElementById("sectionTablaCatalogo");

 seccionCatalogo.removeChild(document.getElementById("paraRemover"));

let seccionParaRemover = document.createElement("section");
seccionParaRemover.id = "paraRemover";



listado.forEach(libro => {

  let articleLibro = document.createElement("article");
  articleLibro.classList.add("tablaCatalogo");
  let codigo = document.createElement("p");
  codigo.innerText = libro.codigo;
  let titulo = document.createElement("p");
  titulo.innerText = libro.titulo;
  let genero = document.createElement("p");
  genero.innerText = libro.genero;
  let vacio1 = document.createElement("p");
  let autor = document.createElement("p");
  autor.innerText = libro.autor;
  let vacio2 = document.createElement("p");
  let vacio3 = document.createElement("p");
  let tema = document.createElement("p");
  tema.innerText = libro.tema;


articleLibro.appendChild(codigo);
articleLibro.appendChild(titulo);
articleLibro.appendChild(genero);
articleLibro.appendChild(vacio1);
articleLibro.appendChild(autor);
articleLibro.appendChild(vacio2);
articleLibro.appendChild(vacio3);
articleLibro.appendChild(tema);

seccionParaRemover.appendChild(articleLibro);
seccionCatalogo.appendChild(seccionParaRemover);

});

}

// }












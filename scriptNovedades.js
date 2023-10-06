//JSON DE NOVEDADES

const jsonNovedades = `[
    {
       "tituloNoticia": "RECESO INVERNAL",
       "noticia": "En el receso invernal la biblioteca permanecerá cerrada del 17 al 28 de julio inclusive. Ya se están realizando los préstamos domiciliarios con fecha posterior al receso. El 31 de julio retomaremos nuestras actividades en sus horarios habituales.",
       "imagen": "../imagenes/recesoInvernal.jpg"
    },
    {
       "tituloNoticia": "ANIVERSARIO 50: ",
       "noticia": "La Biblioteca está de fiesta este mes al celebrar su 50 aniversario.  Durante medio siglo, esta querida institución ha sido un pilar fundamental para la comunidad, ofreciendo conocimiento, cultura y entretenimiento a generaciones de lectores.",
       "imagen": "../imagenes/festejo.jpg"
    },
    {
       "tituloNoticia": "¡VENÍ A CONOCER LA BIBLIOTECA!",
       "noticia": "Estas visitas guiadas libres y gratuitas están pensadas para el público en general que desee conocer los variados espacios y servicios de nuestra biblioteca. Así también instituciones específicas, quiénes deberán realizar una solicitud mediante formulario y hacer la reserva previa. La visita durará unos 45 minutos. Los recorridos se realizan los MARTES y JUEVES",
       "imagen":"../imagenes/visita.jpg"
    },
    {
       "tituloNoticia": "PROMOCIÓN DE LA SALUD Y PREVENCIÓN DE PICADURAS POR ESCORPIÓN",
       "noticia": "Este JUEVES 17 DE AGOSTO a las 10:00 hs. invitamos a toda la comunidad universitaria y vecinos a esta charla abierta a todo público 'Promoción de la salud y prevención de picaduras por escorpión' para que se interioricen de los cuidados que hay que tener ante la presencia de alacranes en nuestra región, tanto en zonas urbanas como rurales.  Estar informados nos aporta herramientas para prevenir y saber accionar a tiempo. ¡Esperamos contar con su presencia!.",
       "imagen": "../imagenes/escorpion.jpg"
    },
    {
       "tituloNoticia": "CONCURSO DE INVESTIGACIÓN",
       "noticia": "Podrán participar de la convocatoria investigadores ya formados o en formación, y también estudiantes del nuvel superior (con más de 60% de las materias de la carrera aprobadas). Las personas que se postulen deberán tener la nacionalidad Argentina o, en caso de ser extranjeras/os, contar con la recidencia del país.",
       "imagen": "../imagenes/concurso.jpg"
    }
      
   ]`
 
 
 let jsonConvertido = JSON.parse(jsonNovedades);
 console.log(jsonConvertido);
 
 for(let i = 0; i< jsonConvertido.length; i++){
    let strong = document.createElement("strong");
    strong.innerText = jsonConvertido[i].tituloNoticia;
    strong.classList.add("tituloNoticia");
    let p = document.createElement("p");

    
    p.classList.add("pNovedades"); // Agregar la clase 'noticia' al párrafo
    let img = document.createElement("img");
    img.src = jsonConvertido[i].imagen;
    img.classList.add("noticia");
    
    p.appendChild(strong);
    p.innerText += jsonConvertido[i].noticia;
    p.appendChild(img);
    
 
    document.getElementById("idNovedades").appendChild(p);
 }
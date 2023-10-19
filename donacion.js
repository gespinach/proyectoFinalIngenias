const donar = document.querySelector('#donar')
donar.addEventListener('submit', (e)=>{
   e.preventDefault()
   const titulo = document.querySelector('#titulo')
   const autor = document.querySelector('#autor')
   const estado = document.querySelector('#estado')
   const nombre = document.querySelector('#nombre')
   const apellido = document.querySelector('#apellido')
   const telefono = document.querySelector('#telefono')

   if(titulo.value === ""){
      alert('Por favor, escribe el titulo del libro');
      titulo.focus();
      return false;
   }

   if(autor.value === ""){
    alert('Por favor, escribe el autor del libro');
    autor.focus();
    return false;
   }

   if(nombre.value  === ""){
    alert('Por favor, escriba su nombre');
    nombre.focus();
    return false;
   }

   if(apellido.value  === ""){
    alert('Por favor, escriba su apellido');
    apellido.focus();
    return false;
   }

   if(telefono.value  === ""){
    alert('Por favor, escriba su numero de telefono');
    telefono.focus();
    return false;
   }

   alert("Su solicitud ha sido enviada con exito!");
   window.location.href = '../index.html'
 })




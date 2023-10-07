/*----------------- VENTANA MODAL -----------------------*/
document.querySelector("#mostrar-login").addEventListener("click",function(){
    document.querySelector(".modal").classList.add("active");
 });
 
 document.querySelector(".modal .btn-cerrar").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active");
 });
 
 /*----------------------- LOGIN -------------------------*/
 const login = document.querySelector('#login')
 login.addEventListener('submit', (e)=>{
   e.preventDefault()
   const email = document.querySelector('#email').value
   const password = document.querySelector('#password').value

   const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
   const validarUsuario = Usuarios.find(user => user.email === email && user.password === password)
   if(!validarUsuario){
      return alert('Usuario y/o contraseña incorrectos!')
   }
   alert(`Bienvenido ${validarUsuario.nombre}`)
   window.location.href = 'index.html'
 })
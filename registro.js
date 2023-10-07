const registro = document.querySelector('#registro')
registro.addEventListener('submit', (e)=>{
   e.preventDefault()
   const nombre = document.querySelector('#nombre').value
   const email = document.querySelector('#email').value
   const password = document.querySelector('#password').value

   const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
   const usuarioRegistrado = Usuarios.find(user => user.email === email)
   if(usuarioRegistrado){
      return alert('El usuario ya esta registrado')
   }

   Usuarios.push({nombre: nombre, email: email, password: password})
   localStorage.setItem('usuarios', JSON.stringify(Usuarios))
   alert('Registro exitoso!')
   window.location.href = '../index.html'
})
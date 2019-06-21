window.addEventListener("load",function functionName(){


  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    var names = document.querySelector("input[name='name']").value
    console.log(names);
    sessionStorage.setItem("nombre",names)
    sessionStorage.getItem("nombre")

   var emails = document.querySelector("input[name='email']").value
   console.log(emails);
   sessionStorage.setItem("email",emails)
   sessionStorage.getItem("email")

   var password = document.querySelector("input[name='contra']").value
   console.log(password);
   sessionStorage.setItem("contraseña",password)
   sessionStorage.getItem("contraseña")

   var generos = document.querySelector("input[name='Genero']").value
   console.log(generos);
   sessionStorage.setItem("genero", generos)
   sessionStorage.getItem("genero")

      location.reload();

})

if (sessionStorage.getItem("nombre")!= null) {
  document.querySelector(".Botonsesion").style.display = "none"
  document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
  document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>"
}





})

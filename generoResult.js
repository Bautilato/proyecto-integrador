window.addEventListener("load",function functionName() {


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

  })




















  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDeGenero');
  console.log(id);
  var nombreDeGenero = urlParams.get('nombreDeGenero');

  var url = "https://api.themoviedb.org/3/discover/movie?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var arrayDePeliculas = data.results

document.querySelector("h1 p").innerHTML = nombreDeGenero

var ul = document.querySelector("main ul")
var titulo;
var imagen;
var li;
var idDePelicula;
for (var i = 0; i < arrayDePeliculas.length; i++) {

      titulo = arrayDePeliculas[i].title;
      imagen = "https://image.tmdb.org/t/p/original/"+arrayDePeliculas[i].poster_path;
      idDePelicula= arrayDePeliculas[i].id;

      li = "<li class='generoprimero'>"
      li +=   "<a href='pelicula.html?idDePelicula="+idDePelicula+"'>"
      li +=     "<div class='nombredepelicula'>"
      li +=       "<h2>" + titulo + "</h2>"
      li +=      "</div>"
      li +=     "<div class='genero'>"
      li +=      "<img src='" + imagen + "' alt=''>"
      li +=    "</div>"
      li +=  "</a>"
      li += "<div class='genero1'>"
      li += " <img  class='estrella' src='imagenes/estrella.jpg' alt=''>"
      li +=  "</div>"
      li += "</li>"

      ul.innerHTML += li
}
if (sessionStorage.getItem("nombre")!= null) {
  document.querySelector(".Botonsesion").style.display = "none"
  document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
  document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>"
}
else {
  document.querySelector(".estrella").style.display = "none"
}




    })
    .catch(function(error){
      console.log("The error was: " + error);
    })

    window.addEventListener("load",function functionName(){



  })








})

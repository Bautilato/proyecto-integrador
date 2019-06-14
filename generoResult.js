window.addEventListener("load",function functionName() {
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

for (var i = 0; i < arrayDePeliculas.length; i++) {
  arrayDePeliculas[i]
      titulo = arrayDePeliculas[i].title;
      imagen = "https://image.tmdb.org/t/p/original/"+arrayDePeliculas[i].poster_path;

      li = "<li class='generoprimero'>"
      li += "<div class='nombredepelicula'>"
      li +="  <h2>" + titulo + "</h2>"
      li += "</div>"
      li += "<div class='genero'>"
      li +="<img src='" + imagen + "' alt=''>"
      li +=  "</div>"
      li += "<div class='genero1'>"
      li += " <img src='imagenes/estrella.jpg' alt=''>"
      li +=  "</div>"
      li += "</li>"

      ul.innerHTML += li
}












    })
    .catch(function(error){
      console.log("The error was: " + error);
    })










})

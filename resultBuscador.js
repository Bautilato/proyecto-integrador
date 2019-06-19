window.addEventListener("load", function(){











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
   sessionStorage.setItem("gener", generos)
   sessionStorage.getItem("gener")

  })























var apiKey = "e8c1145f3cf3e5ccaa8924b23c1db7fd"
var urlSearchParams = new URLSearchParams(window.location.search)
var textoBuscado = urlSearchParams.get("buscador")
console.log(textoBuscado);

var url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + textoBuscado + "&page=1&include_adult=true"

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var arrayBuscador = data.results
    var ul = document.querySelector("main ul")
    var id;
    var titulo;
    var poster;
    var poserUrl;
    var image;

for (var i = 0; i < data.results.length; i++) {
  console.log(data.results[i]);
  idDePelicula = data.results[i].id
  titulo = data.results[i].title
  poster = data.results[i].poster_path
  posterUrl = 'https://image.tmdb.org/t/p/original/'
  image = posterUrl + poster
  console.log(image);


        li = "<li class='generoprimero'>"
        li +=   "<a href='pelicula.html?idDePelicula="+idDePelicula+"'>"
        li +=     "<div class='nombredepelicula'>"
        li +=       "<h2>" + titulo + "</h2>"
        li +=      "</div>"
        li +=     "<div class='genero'>"
        li +=      "<img src='" + image + "' alt=''>"
        li +=    "</div>"
        li +=  "</a>"
        li += "<div class='genero1'>"
        li += " <img src='imagenes/estrella.jpg' alt=''>"
        li +=  "</div>"
        li += "</li>"

        ul.innerHTML += li



        if (textoBuscado === false) {
       document.querySelector("titulofav").innerHTML = "<h3>NO HAY RESULTADOS</h3>"
        }



}

  })
  .catch(function(error){
    console.log("The error was: " + error);
  })


})

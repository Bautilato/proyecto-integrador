window.addEventListener("load",function functionName() {


var url = "https://api.themoviedb.org/3/movie/popular?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"


fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);
    for (var i = 0; i < 5; i++) {
      console.log(data.results[i]);
      var titulo = data.results[i].title
      var descripcion = data.results[i].overview
       var imagen = 'https://image.tmdb.org/t/p/original'
      var poster =imagen +  data.results[i].poster_path
      console.log(poster);
      document.querySelector("#carousel1").innerHTML += '<div id="movie'+i+'"  class="carousel-item "><img class="imagen" src=' + poster + ' alt="First slide"><div class="carousel-caption d-none d-md-block Cartext"><h5>' + titulo + '</h5></div></div>'
    }
document.querySelector("#movie1").classList.add("active")
  })
  .catch(function(error){
    console.log("The error was: " + error);


  })

url2= "https://api.themoviedb.org/3/movie/top_rated?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"
fetch(url2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);
    for (var i = 0; i < 5; i++) {
      console.log(data.results[i]);
      var titulo = data.results[i].title
      var descripcion = data.results[i].overview
       var imagen = 'https://image.tmdb.org/t/p/original'
      var poster =imagen +  data.results[i].poster_path
      console.log(poster);
      document.querySelector("#carousel2").innerHTML += '<div id="movie'+i+'"  class="carousel-item "><img class="imagen" src=' + poster + ' alt="First slide"><div class="carousel-caption d-none d-md-block Cartext"><h5>' + titulo + '</h5></div></div>'
    }
document.querySelector("#movie1").classList.add("active")
  })
  .catch(function(error){
    console.log("The error was: " + error);
})
})

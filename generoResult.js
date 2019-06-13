window.addEventListener("load",function functionName() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDeGenero');
  var nombreDeGenero = urlParams.get('nombreDeGenero');
  var url = "https://api.themoviedb.org/3/discover/movie?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var arrayDePeliculas = data.results



    })
    .catch(function(error){
      console.log("The error was: " + error);
    })










})

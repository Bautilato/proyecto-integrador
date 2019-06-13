window.addEventListener("load",function functionName() {

  var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US"
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var arrayDeGeneros = data.genres
      var genero;
      for (var i = 0; i < arrayDeGeneros.length; i++) {
          console.log(arrayDeGeneros[i]);
          genero = arrayDeGeneros[i].name
          console.log(genero);
          document.querySelector("ul.listadoGeneros").innerHTML += "<div class='ab'><li><a href='generoResult.html?idDeGenero="+arrayDeGeneros[i].id+"nombreDeGenero="+arrayDeGeneros[i].name+"'>" + genero + "</a></li></div><br>"

      }



    })
    .catch(function(error){
      console.log("The error was: " + error);
    })




})

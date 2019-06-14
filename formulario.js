       function capturar () {
         var nom = document.getElementById("nombre").value;
         var apel = document.getElementById("email").value;

         console.log(nombre,email);

         localStorage.setItem( "nom");
         localStorage.setItem( "apel");
       }

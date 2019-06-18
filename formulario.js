
       $(document).ready(function(){
           $('#submit').click(function(){
               /*Captura de datos escrito en los inputs*/
               var nom = document.getElementById("inputEmail4").value;
               var apel = document.getElementById("inputPassword4").value;
               console.log(nom,apel);

               /*Guardando los datos en el LocalStorage*/
               localStorage.setItem("Nombre", nom);
               localStorage.setItem("Apellido", apel);

           });
       });

sessionstrorage.setItem("key",variable)
getitem("key")



var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    $.ajax({
        method: "GET",
        url: "lista.php",
       // data: { name: "John", location: "Boston" }
      })
        .done(function( msg ) {
          //alert( "Data Saved: " + msg );
          var resultado = JSON.parse(data);

          for (var i = 0; i < resultado.length; i++){
              $(".list").append("<li>"+ resultado[i]+"</li>");
          }
        });

    //Shorthand
    // $.get( "lista.php", function( data ) {
    //     $( ".result" ).html( data );
    //     alert( "Data Loaded"+ data);
    // });
    
    //Shorthand - enviando dados
    // $.get( "lista.php", { name: "John", time: "2pm" } )
    // .done(function( data ) {
    //     alert( "Data Loadeds: " + data );
    // });
});





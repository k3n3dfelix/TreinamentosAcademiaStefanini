

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ajax = new XMLHttpRequest();
    //console.log(ajax);

    
    ajax.open("GET", "lista.php");

    //Exemplo via post
    //ajax.open("POST", "lista.php");
    //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    //ajax.responseType = "json";

    ajax.send(null);

    ajax.addEventListener('readystatechange', function(){
        if(ajax.readyState === 4 && ajax.status === 200){
            var resposta = ajax.response;
            var lista = document.querySelector(".list");
            for(var i = 0; i < resposta.length; i++){
                //console.log(resposta[i]);
                lista.innerHTML += "<li>"+resposta[i]+"</li>";
            }
        }
    });
});

// ajax.onreadystatechange = function () { } outra forma de verificar 


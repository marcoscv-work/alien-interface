function quitarVideoSin() {
    $('#maquina').removeClass('hide');
    $('#videoRadar').removeClass('hide');
    //$('#videoSin').addClass('hide');
    $('#videoSin').remove();
}

$('#videoSin').click(function() {
    quitarVideoSin();
    maquina(texto, intervalo);
});

function maquina(texto, intervalo) {
    longitud = texto.length;

    //Adaptamos tamaño de texto según longitud de mensaje
    if (longitud > 110) {
        $('#maquina').removeClass('h1');
        $('#maquina').removeClass('display-4');
        $('#maquina').addClass('h2');
        console.log('fuente h2');
    } else if (longitud < 50) {
        $('#maquina').removeClass('h2');
        $('#maquina').removeClass('h1');
        $('#maquina').addClass('display-4');
        console.log('fuente ENORME');
    } else {
        $('#maquina').removeClass('h2');
        $('#maquina').removeClass('display-4');
        $('#maquina').addClass('h1');
        console.log('fuente h1');
    }

    nodo =  $('#maquina')[0];
    nodo.innerHTML = "";

    var i = 0;
    // Creamos el timer
    timer = setInterval(function(){
        // Vamos añadiendo letra por letra y la _ al final.
        nodo.innerHTML = nodo.innerHTML.substr(0,nodo.innerHTML.length-1) + texto.charAt(i) + " ";

        if (i >= longitud){
            clearInterval(timer);
            // Salimos del Timer y quitamos la barra baja (_)
            //nodo.innerHTML = nodo.innerHTML.substr(0,longitud);
            return true;
        } else {
            i++;
        }
    },intervalo);
};

// TEMP

var texto = "Aquí va la pista TAMAÑO MEDIO que te damos porque eres un paquete, probamos otra línea más y más y más líneas";
var intervalo = 30;

setTimeout(function(){
    quitarVideoSin();
    maquina(texto, intervalo);
}, 10000);

setTimeout(function(){
    maquina('Aquí va la pista LAAARGA en texto pequeño y que te damos porque eres un paquete. Aquí va la pista que te damos porque eres un paquete. Aquí va la pista que te damos porque eres un paquete', 50);
}, 20000);
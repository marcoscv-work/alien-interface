$(document).ready(function () {
    //Ficha cerrada por defecto
    FichaOpen = false;
    FichaTab = 1;

    //Sounds
    audioBip = new Audio("sound/bip.wav");
    audioError = new Audio("sound/error.wav");

    inputNodeNumber = $(".form-control-alien");

    setTimeout(function() {
        inputNodeNumber.focus()
    },10)

    $(inputNodeNumber).on('input', function(){
        if (inputNodeNumber.val().length > 4) {
            if (inputNodeNumber.val() == '99999') {
                audioBip.play();
                inputNodeNumber.prop('disabled', true);
                inputNodeNumber.addClass("text-white");
                inputNodeNumber.animateCss('flash');

                //muestra ficha
                setTimeout(function() {
                    audioBip.play();
                    $(".enter-number").addClass("hide");
                    $(".ficha").removeClass("hide");

                    FichaOpen = true;
                },900)
            } else {
                audioError.play();
                inputNodeNumber.prop('disabled', true);
                inputNodeNumber.addClass("text-white");
                inputNodeNumber.animateCss('flash');

                //Muestra modal con error
                setTimeout(function() {
                    $('#modal').modal('show');
                    inputNodeNumber.val("");
                    inputNodeNumber.removeClass("text-white");
                    $('#modal').on('hidden.bs.modal', function (e) {
                        audioBip.play();
                        inputNodeNumber.prop('disabled', false);
                        setTimeout(function() {
                            inputNodeNumber.focus()
                        },10)
                    })
                },900)
            }
        }
    });
});

//Gestión de teclas
$(document).keydown(function(e){
    if (FichaOpen == true && e.which == 39) { 
        audioBip.play();
        if (FichaTab == 1) {
            $(".nav-link-2").tab('show');
            FichaTab = 2;
        } else if (FichaTab == 2) {
            $(".nav-link-3").tab('show');
            FichaTab = 3;
        }
    } else if (FichaOpen == true && e.which == 37) {
        audioBip.play();
        if (FichaTab == 2) {
            $(".nav-link-1").tab('show');
            FichaTab = 1;
        } else if (FichaTab == 3) {
            $(".nav-link-2").tab('show');
            FichaTab = 2;
        }
    } else if (FichaOpen == true && e.which == 27) {
        //Si la ficha está abierta y se presiona escape, se vuelve y activa todo de nuevo
        audioBip.play();
        $(".enter-number").removeClass("hide");
        $(".ficha").addClass("hide");
        FichaOpen = false;
        inputNodeNumber.prop('disabled', false);
        inputNodeNumber.removeClass("text-white");
        inputNodeNumber.val("");

        setTimeout(function() {
            inputNodeNumber.focus();
        },10)
    } else {
        console.log(e.which);
        //e.preventDefault();
    }
});
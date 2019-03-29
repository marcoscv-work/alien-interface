$(document).ready(function () {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    var inputNode = $(".form-control-alien");
    correcto = 0;

    //Sounds
    audioBip = new Audio("sound/bip.wav");
    audioError = new Audio("sound/accessdenied.wav");
    audioOk = new Audio("sound/completed.wav");

    $(".btn").click(function() {
      if (correcto == 0) {
        $("body").removeClass("incorrecto");
        symbolError = true;

        function animAndHide(uno) {
            uno.prop('disabled', true);
            uno.animateCss("bounceOut", function() {
                if (symbolError) {
                    uno.addClass("opacity-0");
                }
            });
        }

        animAndHide($(this));

        var temporal = (inputNode.val() + $(this).html());
        audioBip.play();

        inputNode.val(temporal);
        inputNode.animateCss('bounceIn');

        if (navigator.vibrate) {
            navigator.vibrate(200);
        } else {
            console.log("no tienes vibración");
        }

        testPassword();
      }
    });

    function testPassword() {
      if (inputNode.val().length < 8) {
        console.log(inputNode.val());
      } else {
        if (inputNode.val() == '8v9r67eP') {
            audioOk.play();
            correcto = 1;
            inputNode.attr("placeholder", "CORRECTO");
            inputNode.val("");
            $(".btn").prop('disabled', true);
            $("body").addClass("correcto");
        } else {
            symbolError = false;
            $("body").addClass("incorrecto");
            $(".btn").removeClass("opacity-0");
            $(".btn").animateCss('bounceIn');
            $(".btn").prop('disabled', false);
            inputNode.attr("placeholder", "ERROR");
            inputNode.val("");
            audioError.play();
        }
      }
    };
  });
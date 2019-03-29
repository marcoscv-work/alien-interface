$(document).ready(function () {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    var inputNode = $(".form-control-alien");
    pulsable = 0;

    //Sounds
    audioBip = new Audio("sound/bip.wav");
    audioError = new Audio("sound/accessdenied.wav");
    audioOk = new Audio("sound/completed.wav");

    $(".btn").click(function() {
      if (pulsable == 0) {
        $("body").removeClass("incorrecto");
        $(this).animateCss('triki');
        audioBip.play();

        var temporal = (inputNode.val() + $(this).html());

        inputNode.val(temporal);
        inputNode.animateCss('triki2');

        if (navigator.vibrate) {
            navigator.vibrate(200);
        } else {
            console.log("no tienes vibración");
        }

        test();
      }
    });

    function test() {
      if (inputNode.val().length < 6) {
        console.log(inputNode.val());
      } else {
        if (inputNode.val() == 999999) {
          audioOk.play();
          pulsable = 1;
          inputNode.attr("placeholder", "CORRECTO");
          inputNode.val("");
          $(".btn").prop('disabled', true);
          $("body").addClass("correcto");
        } else {
          $("body").addClass("incorrecto");
          audioError.play();
          pulsable = 1;
          $(".btn").prop('disabled', true);
          setTimeout(function() {
            inputNode.attr("placeholder", "ERROR");
            inputNode.val("");
            pulsable = 0;
            $(".btn").prop('disabled', false);
          },2000)
        }
      }
    };
});
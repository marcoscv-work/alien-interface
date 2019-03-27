// Sincroniza la preview en tablet y el número de cracteres

function msgRefresh() {
    $(".copyMsg").text($(".msgSend").val());
    $(".caracteres").text($(".msgSend").val().length);
}

$(".msgSend").on('change keyup paste', function() {
    msgRefresh();
});

$(".remove-text").on('click', function() {
    $(".msgSend").val('');
    msgRefresh();
});

// Listado de mensajes guardados

//botón enviar
$(".list-group-alien .btn-primary").on('click', function() {
    var text = $(".list-group-alien .list-group-item:hover span").text();
    $(".msgSend").val(text);
    msgRefresh();
});

//botón editar > abre modal con edición
$(".list-group-alien .btn-warning").on('click', function() {
    var text = $(".list-group-alien .list-group-item:hover span").text();
    $(".msgEdit").val(text);
    $('#editModal').modal('show');
});

//Configuración
$("#configuracion").on('click', function() {
    $('#modalConfiguracion').modal('show');
});

$("#configuracionSave").on('click', function() {
    saveIPs();
});

var saveIPs = async function() {
    var HTTP = $("#HTTP1").val();
    var IP1 = $("#IP1").val();
    var port1 = $("#port1").val();
    console.log('IP DEL SERVER: '+HTTP+IP1+':'+port1);
    const Client = await ClueClient.connect(HTTP+IP1+':'+port1);
}
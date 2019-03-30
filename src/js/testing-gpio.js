$(".container").delegate(".btn-add", "click", function(){
    var node = $(this).parent();
    node.clone().appendTo(node.parent()).animateCss('zoomIn faster');
});

$(".container").delegate(".btn-remove", "click", function(){
    var node = $(this).parent();
    node.animateCss('zoomOut faster', function() {
        node.remove();
    });
});

$('.btn-generate').click(function() {
    // objects
    var allFormsVal = [];
    var allLabels = [];

    $(".container .form-control").each(function(){
        allFormsVal.push($(this).val());
    });

    $(".container label").each(function(){
        allLabels.push($(this).text());
    });

    // print object
    jQuery.each((allFormsVal), function(i, val) {
        $('.modal-body').append(i + " : " + val + "<br/>");
        console.log(val);
    });

    jQuery.each((allLabels), function(i, val) {
        $('.modal-body').append(i + " : " + val + "<br/>");
        console.log(val);
    });

    // show modal
    $('#modal').modal('show');
});
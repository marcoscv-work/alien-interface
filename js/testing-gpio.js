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
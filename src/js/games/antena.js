formsNode = $(".form-control-alien");
indexTotal = formsNode.length;

formsNode.keyup(function(e) {
    var code = e.which;
    var $this = $(this);
    var indexThis = formsNode.index(this);

    if ($this.val().length >= $this.data("maxlength") && code != 8) {
        if ($this.val().length > $this.data("maxlength")) {
            $this.val($this.val().substring(0,4));
        }

        if ((indexTotal-1) != indexThis) {
            formsNode[(indexThis+1)].focus();
            console.log("next");
        } else {
                formsNode[0].focus();
        }
    }

    if ($this.val().length == 0 && code == 8) {
        if (indexThis != 0) {
            formsNode[(indexThis-1)].focus();
            console.log("next");
        } else {
            formsNode[(indexTotal-1)].focus();
        }
        console.log("prev");
    }
});
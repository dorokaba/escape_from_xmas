$(function(){
    $(document).keydown(function(event){
        var keyCode = event.keyCode;
        var ctrlClick = event.ctrlKey;
        var altClick = event.altKey;
        var obj = event.target;

    // Alt Ctrl Space in order to close.
        if (ctrlClick && altClick && keyCode == 32) {
            open(location, '_self').close();
        }

        // function key disabled
        if(keyCode == 112
            || keyCode == 113
            || keyCode == 114
            || keyCode == 115
            || keyCode == 116
            || keyCode == 117
            || keyCode == 118
            || keyCode == 119
            || keyCode == 120
            || keyCode == 121
            || keyCode == 122
            || keyCode == 123) {
            return falseMessage();
        }

        if(keyCode == 8){//bs key disabled without input-text
            if((obj.tagName == "INPUT" && obj.type == "TEXT")
                || obj.tagName == "TEXTAREA"){
                if(!obj.readOnly && !obj.disabled){
                    return trueMessage();
                }
            }
            return falseMessage();
        }

        return trueMessage();
    });

    function falseMessage() {
        $("#err").innerText = "一部のキーは無効になっています。";
        return false;
    }

    function trueMessage() {
        $("#err").innerText = "";
        return true;
    }
});
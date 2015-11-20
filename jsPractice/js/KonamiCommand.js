$(function() {
    $(document).keydown(function (event) {
        var keyCode = event.keyCode;
        var command = $("#command")[0].value;
        if(keyCode == 38 && (command == "t" || command == "")) {
            command += "t";
        } else if(keyCode == 40 && (command == "tt" || command == "ttb")) {
            command += "b";
        } else if(keyCode == 37 && (command == "ttbb" || command == "ttbblr")) {
            command += "l";
        } else if(keyCode == 39 && (command == "ttbbl" || command == "ttbblrl")) {
            command += "r";
        } else if(keyCode == 66 && command == "ttbblrlr") {
            command += "b";
        } else if(keyCode == 65 && command == "ttbblrlrb") {
            command += "a";
        } else {
            command = "";
        }

        if(command == "ttbblrlrba") {
            $("#command")[0].value = "";
                alert("");
            return true;
        }
        $("#command")[0].value = command;
    });
});
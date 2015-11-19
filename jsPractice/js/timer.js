var timer;

function cntStart() {
    timer1 = setInterval("cntDown()", 1000);
}

function cntStop() {
}

function cntDown() {
    var hou = document.getElementById("hou").innerText;
    var min = document.getElementById("min").innerText;
    var sec = document.getElementById("sec").innerText;
    if (min == "") {
        min = 0;
    } else {
        min = parseInt(min);
    }
    if (sec == "") {
        min = 0;
    } else {
        sec = parseInt(sec);
    }

    if (hou == "") {
        hou = 0;
    } else {
        hou = parseInt(hou);
    }

    writeTime(hou*3600+min*60+sec-1);
}

function writeTime(int) {
    int = parseInt(int);
    if (int <= 0) {
        window.location.href = "http://yahoo.co.jp";
    } else {
        document.getElementById("hou").innerText = addZero(Math.floor(int / 60 / 60));
        document.getElementById("min").innerText = addZero(Math.floor(int /60 % 60));
        document.getElementById("sec").innerText = addZero(int % 60 % 60  );
    }
}
function addZero(int) {
    if(int < 10) return "0" + int;
    return int;
}
// onload
$(function(){
    cntStart();
});

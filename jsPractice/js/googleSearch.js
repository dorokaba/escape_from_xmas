
function search() {
    var query = $("#box")[0].value;

    if(query == 'answer') {
        window.open('http://yahoo.co.jp');
        return;
    }

    if(query == '') {
        return false;
    }
    //
    //window.open('https://www.google.co.jp/search?ie=UTF-8&q=' + query, "sWindow");
    window.open('https://www.google.co.jp/search?ie=UTF-8&q=' + query,'_blank','left=50,top=50,width=550,height=550,scrollbars=1,location=0,menubar=0,toolbar=0,status=0,directories=0,resizable=0');
}
$(function() {
    var clickable = $('#clickable')[0];
    //var clickable = document.getElementById("clickable");
    clickable.addEventListener('click', clickPosition) ;

    function clickPosition(e) {
        // イベントオブジェクトの判定
        var e = ( e || window.event.e ) ;

        // 一般的なブラウザ
        if( e.pageX || e.pageX ) {
            //それぞれの座標
            var x = e.pageX ;
            var y = e.pageY ;

            if(x < 830 && x > 807 && y < 304 && y > 284) {
                alert('正解')
            }
        }
    }
});

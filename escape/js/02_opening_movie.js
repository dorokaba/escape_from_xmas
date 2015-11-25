$(function() {
    var video = $('#video')[0];
    video.addEventListener('ended', function() {
        location.href = '../html/03_rule_introduction.html';
    });
});

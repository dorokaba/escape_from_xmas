$(function() {
    var video = $('#video')[0];
    video.addEventListener('ended', function() {
        location.href = '../html/pre_test.html';
    });
});

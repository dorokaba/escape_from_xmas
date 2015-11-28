$(function() {

    startSerif();


});

function startSerif() {
    i = 0;
    setTimeout("putSerif()",5000);// 1
    setTimeout("putSerif()",8000);// 2
    setTimeout("putSerif()",11000);// 3
    setTimeout("putSerif()",14000);// 4
    setTimeout("putSerif()",17000);// 5
    setTimeout("putSerif()",20000);// 6
    setTimeout("putSerif()",23000);// 7
    setTimeout("putSerif()",26000);// 8
    setTimeout("putSerif()",28000);// 9
    setTimeout("putSerif()",30000);// 10
    setTimeout("putSerif()",33000);// 11
    setTimeout("putSerif()",35000);// 12
    setTimeout("putSerif()",38000);// 13
    setTimeout("putSerif()",41000);// 14
    setTimeout("putSerif()",44000);// 15
    setTimeout("putSerif()",47000);// 16
    setTimeout("putSerif()",50000);// 17
    setTimeout("putSerif()",53000);// 18
    setTimeout("putSerif()",55000);// 19



}

function putSerif() {
    i++;
    serif = $('#text1')[0];
    visible = $('.serif_box');
    switch (i) {
        case 1:
            serif.innerText = '今日は2015年12月24日・・・';

            visible.css('display','inline');
            break;
        case 2:
            serif.innerText += '\n' + '街はクリスマス一色で';
            break;
        case 3:
            serif.innerText += '\n' + 'キラキラ輝いています。';
            break;
        case 4:
            serif.innerText += '\n' + 'そして今年も';
            break;
        case 5:
            serif.innerText += '\n' + '赤い服に身を包んだ';
            break;
        case 6:
            serif.innerText += '\n' + '白い髭の';
            break;
        case 7:
            serif.innerText += '\n' + 'あの男が街に・・・';
            break;
        case 8:
            serif.innerText += '\n' + '街に・・・・';
            break;
        case 9:
            serif.innerText += '\n' + 'こない・・・・';
            break;
        case 10:
            serif.innerText = '';
            break;
        case 11:
            serif.innerText = '？？？：ふははははは';
            break;
        case 12:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 13:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 14:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 15:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 16:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 17:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 18:
            serif.innerText += '\n' +  '？？？：ふははははは';
            break;
        case 19:
            serif.innerText = '';
            visible.css('display','none');
            break;

    }
}
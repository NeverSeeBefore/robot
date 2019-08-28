function init() {
    bindEvent();
}
function bindEvent() {

    $('#inp').keyup(function (e) {
        if(e.keyCode == '13') {
            $('#submit').trigger('click');
        }
    });
    $('#submit').click(function (e) {
        var val = $('#inp').val();
        if (val) {
            addDom('mine', val);
            getData(val);
            $('#inp').val('');
        }
    })
}
function addDom(who, val) {
    $('<div class="'+ who +'">\
        <div class="avator"></div>\
        <div class="text">'+ val+'</div>\
    </div>').appendTo($('.content-box'));
    var scrollHeight = $('.content-box')[0].scrollHeight;
    var innerHeight = $('.content-box').innerHeight();
    $('.content-box').scrollTop(scrollHeight - innerHeight);
}


function getData (val) {
    $.ajax({
        url: 'http://api.duyiedu.com/api/chat/sendMsg',
        methods: 'GET',
        dataType: 'json',
        data:{
            appkey: '18743119027_1551866612751',
            msg: val
        },
        success: function (res) {
            if(res.status == 'success'){
                addDom('robot', res.data.text);
            }
        }
    })
}








init ();







// function init () {
//     bindEvent();
// }
// function bindEvent() {
//     $('#inp').keyup(function (e) {
//         if (e.keyCode == 13) {
//             $('#submit').trigger('click');
//         }
//     });
//     $('#submit').click(function (e) {
//         var val = $('#inp').val();
//         if (val) {
//             addDom('mine', val);
//             getData(val);
//             $('#inp').val('');
//         }
//     })
// }

// // 文字添加到页面中去
// function addDom(who, val) {
//     $(' <div class="' + who + '">\
//     <div class="avitor"></div>\
//     <div class="text">' + val + '</div>\
// </div>').appendTo($('.content-box'));
//     var scrollHeight = $('.content-box')[0].scrollHeight ;
//     var innerHeight = $('.content-box').innerHeight();
//     $('.content-box').scrollTop(scrollHeight - innerHeight);
// }


// function getData(val) {
//     $.ajax({
//         url: 'http://api.duyiedu.com/api/chat/sendMsg',
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             appkey: 'dongmeiqi_1547441744650',
//             msg: val
//         },
//         success: function (res) {
//             console.log(res);
//             if (res.status == 'success') {
//                 addDom('robot', res.data.text);
//             }
//         }
//     })
// }
// init()
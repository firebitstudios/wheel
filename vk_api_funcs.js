var check_result_id = "0";
var send = function (params, func){
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://bsmxtestopencart.000webhostapp.com/vk-game/vk.php?'+params, true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                func(ajax.responseText);
            }
        }
    };
    ajax.send(null);
};
function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}
var check_id = function (id){
    send('id='+id, function (text){
        console.log(text);
        if (text == "yes"){
            console.log("ALREADY SPIN");
        };
    });
};
var append_server = function (params, func){
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://bsmxtestopencart.000webhostapp.com/vk-game/vk2.php?'+params, true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                func(ajax.responseText);
            }
        }
    };
    ajax.send(null);
};

var write_id = function (id){
    append_server('id='+id, function (text){
        console.log(text);
    });
};
function GET_ID(){
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        check_id(data.response[0].id);
        console.log(check_result_id);
        if (check_result_id == "1"){
            c2_callFunction("show_prize_screen");
        }
    });
}
function APPEND_ID(){
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        write_id(data.response[0].id);
        c2_callFunction("open_user_link");
    });
}

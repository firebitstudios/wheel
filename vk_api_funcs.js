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

var check_id = function (id){
    send('id='+id, function (text){
        console.log(text);
    });
};
function GET_ID(){
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        console.log(data.response[0].id);
        check_id('137272295');
    });
}

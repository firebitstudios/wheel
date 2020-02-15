function GET_ID(){
    let ID = 0;
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        console.log(data.response[0].id);
        ID = data.response[0].id}); 
    return ID;}

function GET_ID(){
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        window.ID = data.response[0].id});
        console.log("Your id is: "+ID);
}

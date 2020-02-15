var ID;
function GET_ID(){
    VK.api('users.get', {'fields': 'photo_50,first_name,last_name', 'v':'5.73'}, function(data){
        console.log("Your VK id is: "+data.response[0].id);
        ID = data.response[0].id}); 
    return ID;}

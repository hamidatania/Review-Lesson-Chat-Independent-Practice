var yourName = "Me";
var friendsName = "Sally";

$(".sent").show();
$(".right .send-button").click(function() {
    var messageText = $(".your-input").val();
    if (messageText.trim() !== "") {
        var message = '<p>' + messageText + '</p>';
        $(".sent").append(message);
        $(".your-input").val(""); 
        
    }
});

$(".left .send-button").click(function() {
    var messageText = $(".friend-input").val();
    if (messageText.trim() !== "") {
        var message = '<p>' + messageText + '</p>';
        $(".received").append(message);
        $(".friend-input").val(""); 
        updateMessageCount();
    }
});
var messageCount = 1; 
function updateMessageCount() {
    messageCount++;
    $("h4").text("Number of messages received: " + messageCount);
    
}















//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}
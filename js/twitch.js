var streamers = ["freecodecamp","ESL_SC2","ninja"]

function streamsCall() {
    streamers.forEach(function(element) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + element +"?callback=?", function(data) {
//            do stuff with the data here
            var icon = "#" + element + "Img";
            var status = "#" + element + "Status";
            var stream = data.stream;
            if (stream === null || stream === undefined) {
                $(icon).attr('src', "/img/offline.png")
                $(status).html("Offline");
            } else {
                $(icon).attr('src', "/img/online.png")
                $(status).html("Online");
            }
        });
        
    });
};

function channelsCall() {
    streamers.forEach(function(element) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + element +"?callback=?", function(data) {
//            do stuff with the data here
            var logo = "#" + element + "Logo";
            var info = "#" + element + "Info";
            var aTag = "#" + element;
            $(logo).attr('src', data.logo);
            $(info).html("<h3>"+data.game+"</h3><p>"+data.status+"</p>");
            $(aTag).attr("href", data.url);
        });
        
    });
};


$(document).ready(function() {
    streamsCall();
    channelsCall();
    
    setTimeout(function() {
        $(".streamers").removeClass("hidden").addClass("fadeInUp");
        
    },700);
    
});
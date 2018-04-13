$(document).ready(function() {
    
//    Global variables (we really only care about temperature because thats the only thing we may want to change)
    var tempF = 0;
    var tempC = 0;
    var conversion = true;
    var errorMessage = true;
    var dataSuccess = false;
    
//This executes as long as geolocation is available
   var showWeather = function(lat,lon) {
       $.getJSON("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b78fa81cd141d63bcc6f13f0cbd22e44/" + lat +"," + lon + "?exclude=minutely,hourly,daily,alerts,flags", function(weather) {
           
//           This is the magic stuff here. weather is the JSON object..........................................
           tempF = Math.floor(weather.currently.temperature);
           errorMessage = false;
           dataSuccess = true;

           switch (weather.currently.icon) {
                   
               case "clear-day":
                   $("#icon").attr("src", "/img/weather/clearday.png");
                   break;
               case "clear-night":
                   $("#icon").attr("src", "/img/weather/clearnight.png");
                   break;
               case "rain":
                   $("#icon").attr("src", "/img/weather/rain.png");
                   break;
               case "snow":
                   $("#icon").attr("src", "/img/weather/snow.png");
                   break;
               case "sleet":
                   $("#icon").attr("src", "/img/weather/sleet.png");
                   break;
               case "wind":
                   $("#icon").attr("src", "/img/weather/wind.png");
                   break;
               case "fog":
                   $("#icon").attr("src", "/img/weather/fog.png");
                   break;
               case "cloudy":
                   $("#icon").attr("src", "/img/weather/cloudy.png");
                   break;
               case "partly-cloudy-day":
                   $("#icon").attr("src", "/img/weather/partlycloudyday.png");
                   break;
               case "partly-cloudy-night":
                   $("#icon").attr("src", "/img/weather/partlycloudynight.png");
                   break;
               default:
                   break;
                   
            }
     
          
           $("#location").html("Your Location");
           $("#location").removeClass("flash");

           
           setTimeout(function(){
               $("#icon").addClass("fadeInUp");
               $("#icon").removeClass("hidden");
               $("#temp").removeClass("hidden");
               $("#temp").html(tempF + " &#8457");
               $("#temp").addClass("fadeInUp");
               $("#summary").removeClass("hidden");
               $("#summary").html(weather.currently.summary);
               $("#summary").addClass("fadeInUp");
              
               
           }, 300)
           
         
//           End of magic stuff................................................................................ 
       });
   };
    
//    Check to see if geolocation is even availabe in the browser, if so execute function defined above..........
if ("geolocation" in navigator) {
  /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
  showWeather(position.coords.latitude, position.coords.longitude);
});
    
} else {
  /* geolocation IS NOT available */
    $("#warning").removeClass("hidden");
    $("#warning").addClass("fadeInUp");
}
    
    
//    Click function for the temperature conversion here..................................
    $("#temp").on("click", function(temp) {
       
        if (conversion) {
           var tempC = Math.floor((tempF-32)/1.8);
            $("#temp").html(tempC + " &#8451");
            conversion = false;
        } else {
            $("#temp").html(tempF + " &#8457");
            conversion = true;
        }
        
    });
    
// add error after 5 seconds if data hasn't been grabbed successfully 
setTimeout(function(){
    if(errorMessage) {
        $("#warning").removeClass("hidden");
        $("#warning").addClass("fadeInUp");
    }
},5000);
    
//    remove error if request was succcessful
setInterval(function(){
    if(dataSuccess) {
        $("#warning").addClass("hidden");
    }
},500);
      
    
    
});
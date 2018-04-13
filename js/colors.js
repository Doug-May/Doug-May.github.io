$(document).ready(function() {
    
//    define color variables
    
    var red = $("#red");
    var blue = $("#blue");
    var orange = $("#orange");
    var green = $("#green");
    var yellow = $("#yellow");
    var purple = $("#purple");
    var black = $("#black");
    var brown = $("#brown");
    var white = $("#white");
    var gray = $("#gray");
    
//    watch for clicks and play audio
    
   red.click(function() {
       document.getElementById("redAudio").play();
   });
    
    blue.click(function() {
       document.getElementById("blueAudio").play();
   });
    
    orange.click(function() {
       document.getElementById("orangeAudio").play();
   });
    
    green.click(function() {
       document.getElementById("greenAudio").play();
   });
    
    yellow.click(function() {
       document.getElementById("yellowAudio").play();
   });
    
    purple.click(function() {
       document.getElementById("purpleAudio").play();
   });
    
    black.click(function() {
       document.getElementById("blackAudio").play();
   });
    
    brown.click(function() {
       document.getElementById("brownAudio").play();
   });
    
    white.click(function() {
       document.getElementById("whiteAudio").play();
   });
    
    gray.click(function() {
       document.getElementById("grayAudio").play();
   });
    
    
    
});
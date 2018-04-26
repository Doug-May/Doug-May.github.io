//set up the dice object and its values
var diceObject = {};
diceObject.number = function(){
   return parseInt(document.getElementById('number').value) || 1;
};
diceObject.type = 20;
diceObject.modifier = function(){
   return parseInt(document.getElementById('modifier').value) || 0;
};
diceObject.roll = function() {
   var counter = 0;
   for(i=0;i<diceObject.number();i++){
      counter += Math.ceil(Math.random()*diceObject.type);
   }
   return counter;
};


//onchange function when user selects a different dice type
function typeUpdate(option){
   diceObject.type = parseInt(option);
   document.getElementById('dice').src = "../img/dice/d" + option + ".png";
};

//onclick function when user clicks the dice img to make a roll
document.getElementById('dice').onclick = makeRoll;

//onpress enter make the roll
document.addEventListener("keydown", function(e){
   if (e.keyCode === 13 && !$("body").hasClass("swal2-shown")){
      makeRoll();
   }
});

//This is the rolling function
function makeRoll(){
   $("#dice").addClass("roll");
   setTimeout(function(){
      $("#dice").removeClass("roll");
      var rollResult = diceObject.roll();
      sweetAlert({title:"You rolled " + (rollResult + diceObject.modifier()), confirmButtonColor:"#4e5b6d", confirmButtonText:"OK"});
   },400);
};

//for testing the dice rolling. just want to see if the average is what is expected
// var testCounter = 0;
// total = 0;
// setInterval(function(){
//    var thisRound = diceObject.roll();
//    total += thisRound;
//    testCounter += 1;
//    if (testCounter == 1000){
//       alert(total/testCounter);
//    }
// },5);

//set up the dice object and its values
var diceObject = {};
diceObject.number = function(){
   return parseInt(document.getElementById('number').value) || 1;
};
diceObject.type = 20;
diceObject.modifier = function(){
   return parseInt(document.getElementById('modifier').value) || 0;
};

//onchange function when user selects a different dice type
function typeUpdate(option){
   diceObject.type = parseInt(option);
   document.getElementById('dice').src = "../img/dice/d" + option + ".png";
};

//onclick function when user clicks the dice img to make a roll
document.getElementById('dice').onclick = function(){
   $("#dice").addClass("roll");

   setTimeout(function(){
      $("#dice").removeClass("roll");
      var rollResult = Math.ceil(Math.random()*diceObject.type);
      var total = rollResult*diceObject.number() + diceObject.modifier();

      if(diceObject.modifier() > 0 && diceObject.number() > 1){
         sweetAlert({title:"You rolled " + "(" + diceObject.number() + ")" + rollResult + " + " + diceObject.modifier() + " = " + total, confirmButtonColor:"#4e5b6d", confirmButtonText:"OK"});
      } else if(diceObject.modifier() > 0){
         sweetAlert({title:"You rolled " + rollResult + " + " + diceObject.modifier() + " = " + total, confirmButtonColor:"#4e5b6d", confirmButtonText:"OK"});
      } else if(diceObject.number() > 1){
         sweetAlert({title:"You rolled " + "(" + diceObject.number() + ")" + rollResult + " = " + total, confirmButtonColor:"#4e5b6d", confirmButtonText:"OK"});
      } else {
         sweetAlert({title:"You rolled " + rollResult, confirmButtonColor:"#4e5b6d", confirmButtonText:"OK"});
      }
   },400);



};

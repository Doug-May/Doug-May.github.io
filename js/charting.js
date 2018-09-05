var finalString = "";

//function to generate the text when user clicks button
function generateText() {

   //Orientation
   if(document.getElementById('1').checked) {
      finalString += " Patient is alert & oriented.";
   } else if (document.getElementById('2').checked) {
      finalString += " Patient is alert & oriented with some forgetfulness noted.";
   } else if (document.getElementById('3').checked) {
      finalString += " Patient is alert & oriented to self only.";
   }
   if (document.getElementById('4').value) {
      finalString += " " + document.getElementById('4').value.trim();
   }

   //Lungs
   if (document.getElementById('5').checked) {
      finalString += " Lung sounds clear.";
   }
   if (document.getElementById('6').value) {
      finalString += " " + document.getElementById('6').value.trim();
   }

   //Cardiac
   if (document.getElementById('7').checked) {
      finalString += " HRRR.";
   }
   if (document.getElementById('8').value) {
      finalString += " " + document.getElementById('8').value.trim();
   }

   //Edema
   if (document.getElementById('9').checked) {
      finalString += " No edema to BLEs or other s/s fluid retention.";
   }
   if (document.getElementById('10').value) {
      finalString += " " + document.getElementById('10').value.trim();
   }

   //Bowel sounds
   if(document.getElementById('11').checked) {
      finalString += " Normoactive bowel sounds in all quadrants.";
   } else if (document.getElementById('12').checked) {
      finalString += " Decreased bowel sounds.";
   }
   if (document.getElementById('13').value) {
      finalString += " Last bowel movement on " + document.getElementById('13').value.trim() + ".";
   }

   //Education
   if (document.getElementById('14').value) {
      finalString += " " + document.getElementById('14').value.trim();
   };

   //MD Notified
   if (document.getElementById('15').value) {
      finalString += " " + document.getElementById('15').value.trim();
   };

   //New Orders
   if (document.getElementById('16').value) {
      finalString += " " + document.getElementById('16').value.trim();
   };

   //Visit Summary
   if (document.getElementById('17').value) {
      finalString += " " + document.getElementById('17').value.trim();
   };


   //return message if finalString is empty, otherwise copy it to the clipboard
   if(finalString === ""){
      sweetAlert({title:"Nothing to generate!", confirmButtonColor:"#0070ff", confirmButtonText:"OK"});
   } else {
      //copy the finalString to the clipboard and alert the user. finally reset the string
      const el = document.createElement('textarea');
      el.value = finalString.trim();
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      sweetAlert({title:"Your text was copied to the clipboard!", confirmButtonColor:"#0070ff", confirmButtonText:"OK"});
      finalString = "";
   }






};


// //onkeypress functions to clear radio buttons when custom text is entered
// document.getElementById('4').onkeypress = function(){
//    if (document.getElementById('4').value !== "") {
//       document.getElementById('1').checked = false;
//       document.getElementById('2').checked = false;
//       document.getElementById('3').checked = false;
//
//    }
// };
// document.getElementById('6').onkeypress = function(){
//    if (document.getElementById('6').value !== "") {
//       document.getElementById('5').checked = false;
//    }
// };
// document.getElementById('8').onkeypress = function(){
//    if (document.getElementById('8').value !== "") {
//       document.getElementById('7').checked = false;
//    }
// };
// document.getElementById('10').onkeypress = function(){
//    if (document.getElementById('10').value !== "") {
//       document.getElementById('9').checked = false;
//    }
// };

//this allows for unchecking any checked radio buttons
var allRadios = document.getElementsByTagName('input');
        var booRadio;
        var x = 0;
        for(x = 0; x < allRadios.length; x++){

            allRadios[x].onclick = function() {
                if(booRadio == this){
                    this.checked = false;
                    booRadio = null;
                }else{
                    booRadio = this;
                }
            };
        }

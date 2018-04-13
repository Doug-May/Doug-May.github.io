$(document).ready(function() {
    



// Set some global variables and functions here
var randomize = document.getElementById("randomize");
var pulsar = document.getElementById("pulsar");
var gun = document.getElementById("gun");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");


var tdNodelist = document.getElementsByTagName("td");
var allCells = tdNodelist.length;
    
var randomizeFunc = function() {
    for (i=180; i < allCells -180; i++ ) {
            var random = 100*Math.random();
                if (random >= 75) {
                    tdNodelist[i].className = "alive";
                } else {
                    tdNodelist[i].className = "dead";
                }     
        } 
}
randomizeFunc();
    
var hideEdges = function() {
    for (i=0;i<180;i++){
        tdNodelist[i].className = "unseen";
        tdNodelist[7920 + i].className = "unseen";
    }
}
hideEdges();



function sleep(ms) {
        return new Promise(resolve =>setTimeout(resolve, ms));
    }



// PATTERNS! These functions watch for clicks..................................................

randomize.onclick = function () {
    randomizeFunc();
}

pulsar.onclick = function () {
    //set all cells to class "dead"
    for (i=180; i< allCells-180; i++) {
        tdNodelist[i].className = "dead";
    }
    
    //create pattern
    tdNodelist[4005-544].className = "alive";
    tdNodelist[4005-543].className = "alive";
    tdNodelist[4005-542].className = "alive";
    tdNodelist[4005-538].className = "alive";
    tdNodelist[4005-537].className = "alive";
    tdNodelist[4005-536].className = "alive";
    tdNodelist[4005-366].className = "alive";
    tdNodelist[4005-354].className = "alive";
    tdNodelist[4005-359].className = "alive";
    tdNodelist[4005-361].className = "alive";
    tdNodelist[4005-276].className = "alive";
    tdNodelist[4005-264].className = "alive";
    tdNodelist[4005-271].className = "alive";
    tdNodelist[4005-269].className = "alive";
    tdNodelist[4005-186].className = "alive";
    tdNodelist[4005-174].className = "alive";
    tdNodelist[4005-181].className = "alive";
    tdNodelist[4005-179].className = "alive";
    tdNodelist[4005-94].className = "alive";
    tdNodelist[4005-86].className = "alive";
    tdNodelist[4005-93].className = "alive";
    tdNodelist[4005-87].className = "alive";
    tdNodelist[4005-92].className = "alive";
    tdNodelist[4005-88].className = "alive";
    tdNodelist[4005+544].className = "alive";
    tdNodelist[4005+543].className = "alive";
    tdNodelist[4005+542].className = "alive";
    tdNodelist[4005+538].className = "alive";
    tdNodelist[4005+537].className = "alive";
    tdNodelist[4005+536].className = "alive";
    tdNodelist[4005+366].className = "alive";
    tdNodelist[4005+354].className = "alive";
    tdNodelist[4005+359].className = "alive";
    tdNodelist[4005+361].className = "alive";
    tdNodelist[4005+276].className = "alive";
    tdNodelist[4005+264].className = "alive";
    tdNodelist[4005+271].className = "alive";
    tdNodelist[4005+269].className = "alive";
    tdNodelist[4005+186].className = "alive";
    tdNodelist[4005+174].className = "alive";
    tdNodelist[4005+181].className = "alive";
    tdNodelist[4005+179].className = "alive";
    tdNodelist[4005+94].className = "alive";
    tdNodelist[4005+86].className = "alive";
    tdNodelist[4005+93].className = "alive";
    tdNodelist[4005+87].className = "alive";
    tdNodelist[4005+92].className = "alive";
    tdNodelist[4005+88].className = "alive";
}

gun.onclick = function () {
    //set all cells to class "dead"
    for (i=180; i< allCells-180; i++) {
        tdNodelist[i].className = "dead";
    } 
    
    tdNodelist[2012].className = "alive";
    tdNodelist[2012+90].className = "alive";
    tdNodelist[2012+88].className = "alive";
    tdNodelist[2012+177].className = "alive";
    tdNodelist[2012+176].className = "alive";
    tdNodelist[2012+169].className = "alive";
    tdNodelist[2012+168].className = "alive";
    tdNodelist[2012+190].className = "alive";
    tdNodelist[2012+191].className = "alive";
    tdNodelist[2012+280].className = "alive";
    tdNodelist[2012+281].className = "alive";
    tdNodelist[2012+267].className = "alive";
    tdNodelist[2012+266].className = "alive";
    tdNodelist[2012+261].className = "alive";
    tdNodelist[2012+257].className = "alive";
    tdNodelist[2012+357].className = "alive";
    tdNodelist[2012+356].className = "alive";
    tdNodelist[2012+352].className = "alive";
    tdNodelist[2012+346].className = "alive";
    tdNodelist[2012+337].className = "alive";
    tdNodelist[2012+336].className = "alive";
    tdNodelist[2012+450].className = "alive";
    tdNodelist[2012+448].className = "alive";
    tdNodelist[2012+443].className = "alive";
    tdNodelist[2012+442].className = "alive";
    tdNodelist[2012+440].className = "alive";
    tdNodelist[2012+436].className = "alive";
    tdNodelist[2012+427].className = "alive";
    tdNodelist[2012+426].className = "alive";
    tdNodelist[2012+540].className = "alive";
    tdNodelist[2012+532].className = "alive";
    tdNodelist[2012+526].className = "alive";
    tdNodelist[2012+621].className = "alive";
    tdNodelist[2012+617].className = "alive";
    tdNodelist[2012+709].className = "alive";
    tdNodelist[2012+708].className = "alive";

}


// This is the "life" code...........................................................
start.onclick = async function () {
    //toggle buttons
    this.style.visibility = "hidden";
    stop.style.visibility = "visible";
    pause = false;

    do {
    //first count up the neighbors for each cell and store them in an array
        var neighborArray = new Array(8099);  
    for (i=91; i<8008; i++) {
        var neighbor = 0;
        if (tdNodelist[i-91].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i-90].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i-89].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i-1].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i+1].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i+89].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i+90].className === "alive"){
            neighbor ++;
        }
        if (tdNodelist[i+91].className === "alive"){
            neighbor ++;
        }
        neighborArray[i-91] = neighbor;
    }
        
        //determine next state of cell. THE FOUR RULES OF THE GAME OF LIFE!!
     for (i=91; i<=8008; i++) {  
        if (tdNodelist[i].className === "alive" && neighborArray[i-91]<2) {
            tdNodelist[i].className = "dead";
        }
        if (tdNodelist[i].className === "alive" && neighborArray[i-91] === 2) {
            tdNodelist[i].className = "alive";
          
            
        }
        if (tdNodelist[i].className === "alive" && neighborArray[i-91]===3) {
            tdNodelist[i].className = "alive";
          
        }
        if (tdNodelist[i].className === "alive" && neighborArray[i-91]>3) {
            tdNodelist[i].className = "dead";
           
        }
        if (tdNodelist[i].className === "dead" && neighborArray[i-91]===3) {
            tdNodelist[i].className = "alive";
           
        }
      } 
    hideEdges();
    await sleep(25);
        
    } while (pause === false);
}


// Stop the life code.................................................................
stop.onclick = function () {
    //toggle button
    this.style.visibility = "hidden";
    start.style.visibility = "visible";
    
    // break out of loop
    pause = true;
    run = true;
}


// clear everything...........................................................................
clear.onclick = function () {
    //set all cells to class "dead"
    for (i=180; i< allCells-180; i++) {
        tdNodelist[i].className = "dead";
    }
}
//....................................................................................
   


})
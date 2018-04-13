$(document).ready(function() {
    
    

    
//    set up some global variables
    var display = "";
    var chain = [0];
    var currentNum = "";
    var result = 0;
    var showResult = false;
    
    //    reset function
    var reset = function() {
        display = "";
        chain = [0];
        currentNum = "";
        result = 0;
        showResult = false;
    }
    
//    number button click events
    $("#decimal").on('click', function(){
        
        if (showResult) {
            reset();
            display += ".";
        } else {
            display += ".";
        }
        currentNum += ".";
    });
    
    $("#zero").on('click', function(){
        
        if (showResult) {
            reset();
            display += 0;
        } else {
            display += 0;
        }
        currentNum += 0;
    });
    
    $("#one").on('click', function(){
        
        if (showResult) {
            reset();
            display += 1;
        } else {
            display += 1;
        }
        currentNum += 1;
    });
    
    $("#two").on('click', function(){
        
        if (showResult) {
            reset();
            display += 2;
        } else {
            display += 2;
        }       
        currentNum += 2;
    });
    
    $("#three").on('click', function(){
        
        if (showResult) {
            reset();
            display += 3;
        } else {
            display += 3;
        }
        currentNum += 3;
    });
    
    $("#four").on('click', function(){
        
        if (showResult) {
            reset();
            display += 4;
        } else {
            display += 4;
        }
        currentNum += 4;
    });
    
    $("#five").on('click', function(){
        
        if (showResult) {
            reset();
            display += 5;
        } else {
            display += 5;
        } 
        currentNum += 5;
    });
    
    $("#six").on('click', function(){
        
        if (showResult) {
            reset();
            display += 6;
        } else {
            display += 6;
        }
        currentNum += 6;
    });
    
    $("#seven").on('click', function(){
        
        if (showResult) {
            reset();
            display += 7;
        } else {
            display += 7;
        }
        currentNum += 7;
    });
    
    $("#eight").on('click', function(){
        
        if (showResult) {
            reset();
            display += 8;
        } else {
            display += 8;
        }
        currentNum += 8;
    });
    
    $("#nine").on('click', function(){
        
        if (showResult) {
            reset();
            display += 9;
        } else {
            display += 9;
        }
        currentNum += 9;
    });
    
    
//    Operator click events
    $("#divide").on('click', function(){
        showResult = false;
        display += "/";
        chain.push([Number(currentNum), "divide"]);
        currentNum = "";
    });
    
    $("#multiply").on('click', function(){
        showResult = false;
        display += "*";
        chain.push([Number(currentNum), "multiply"]);
        currentNum = "";
    });
    
    $("#subtract").on('click', function(){
        showResult = false;
        display += "-";
        chain.push([Number(currentNum), "subtract"]);
        currentNum = "";
    });
    
    $("#add").on('click', function(){
        showResult = false;
        display += "+";
        chain.push([Number(currentNum), "add"]);
        currentNum = "";
    });
    
    $("#equals").on('click', function(){
        chain.push([Number(currentNum), "equals"]);
        var result = chain[1][0];
        var chainLength = chain.length;
        
        for (i=2;i<chainLength;i++) {
            switch(chain[i-1][1]) {
                case "add":
                    result = result + chain[i][0];
                    break;
                case "subtract":
                    result = result - chain[i][0];
                    break;
                case "multiply":
                    result = result * chain[i][0];
                    break;
                case "divide":
                    result = result / chain[i][0];
                    break;         
            }   
        }
        showResult = true;
        display = result;
        currentNum = "";
    });
    
//    clear click event
    $("#AC").on('click', function(){
        display = "";
        chain = [0];
        currentNum = "";
        result = 0;  
    });
    

//    this is our step function that runs a few times a second to set the display
    setInterval(function() { 
        if (display == "") {
            $("#display").html("0");  
        } else {
            $("#display").html(display); 
        }
        
        if(showResult) {
           if ($("#display").width() > 250) {
            $("#display").html("EXCEEDED LIMIT"); 
           } 
        }
        
    }, 100)
    
});
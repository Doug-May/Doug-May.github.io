$(document).ready(function() {
    var currentQuote = "";
    var currentAuthor = "";
    
    //grab first quote
    $.getJSON("https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/", function(a) {
            $("#quote").html('"' + a.quote + '"').fadeIn();
            $("#author").html("- " + a.author);
         //remove hidden css
            $("#center,#quote,#author,#getQuote,#tweet").removeClass("hidden");
        currentQuote = a.quote;
        currentAuthor = a.author;
        });   
    
    //get new quote when button is clicked and change colors.........
    $("#getQuote").click(function() {
        
        $.getJSON("https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/", function(a) {
            $("#quote").html('"' + a.quote + '"').fadeIn();
            $("#author").html("- " + a.author);
            
            currentQuote = a.quote;
            currentAuthor = a.author;
        
        });
        
        //this is the random color switch
        var allQuestions = 100*Math.random();
        if (allQuestions >= 0 && allQuestions<= 10) {
            $("#quote,#author").css("color","#3e4c63");
            $("#getQuote,body").css("background-color", "#3e4c63");
        } else if (allQuestions > 10 && allQuestions <= 20) {
            $("#quote,#author").css("color","#4c4968");
            $("#getQuote,body").css("background-color", "#4c4968");
        } else if (allQuestions > 20 && allQuestions <= 30) {
            $("#quote,#author").css("color","#69546b");
            $("#getQuote,body").css("background-color", "#69546b");
        } else if (allQuestions > 30 && allQuestions <= 40) {
            $("#quote,#author").css("color","#6d595d");
            $("#getQuote,body").css("background-color", "#6d595d");
        } else if (allQuestions > 40 && allQuestions <= 50) {
            $("#quote,#author").css("color","#656654");
            $("#getQuote,body").css("background-color", "#656654");
        } else if (allQuestions > 50 && allQuestions <= 60) {
            $("#quote,#author").css("color","#72635a");
            $("#getQuote,body").css("background-color", "#72635a");
        } else if (allQuestions > 60 && allQuestions <= 70) {
            $("#quote,#author").css("color","#756d5a");
            $("#getQuote,body").css("background-color", "#756d5a");
        } else if (allQuestions > 70 && allQuestions <= 80) {
            $("#quote,#author").css("color","#58706e");
            $("#getQuote,body").css("background-color", "#58706e");
        } else if (allQuestions > 80 && allQuestions <= 90) {
            $("#quote,#author").css("color","#586a70");
            $("#getQuote,body").css("background-color", "#586a70");
        } else if (allQuestions > 90 && allQuestions <= 100) {
            $("#quote,#author").css("color","#605870");
            $("#getQuote,body").css("background-color", "#605870");
        };
        
    });
    
    $("#tweet").on('click', function() {
        window.open('https://twitter.com/intent/tweet?text=' + currentQuote + ' -' + currentAuthor);
        
    })
    //end click functions.............................................
    
});
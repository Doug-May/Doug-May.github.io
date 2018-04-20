$(document).ready(function() {
    var currentQuote = "";
    var currentAuthor = "";

    //grab first quote
    $.getJSON("https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/", function(a) {
            $("#quote").html('"' + a.quote + '"');
            $("#author").html("- " + a.author);
            $("#tweet").removeClass("hidden");
            $("#quoteBlock").addClass("fadeInLeft");
         //remove hidden css
        currentQuote = a.quote;
        currentAuthor = a.author;
        });

    //get new quote when button is clicked and change colors.........
    $("#getQuote").click(function() {
      $("#quoteBlock").addClass("fadeOutRight");
      $("#quoteBlock").removeClass("fadeInLeft");

        $.getJSON("https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/", function(a) {
            $("#quote").html('"' + a.quote + '"');
            $("#author").html("- " + a.author);
            $("#quoteBlock").removeClass("fadeOutRight");
            $("#quoteBlock").addClass("fadeInLeft");
            currentQuote = a.quote;
            currentAuthor = a.author;
        });
    });

    $("#tweet").on('click', function() {
        window.open('https://twitter.com/intent/tweet?text=' + currentQuote + ' -' + currentAuthor);

    })
    //end click functions.............................................

});

$(document).ready(function(){
    
//Define global variables..............................................................................
    var clickSearch = $("#search");
    var typeSearch = $("#userSearch");
    var api = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=';
    
    
//This function makes the call and gets the data..................................................................
    var getData = function() {
        
//        first clear previous results
        $("#results").html("");
        
//        grab input and make request
        var query = typeSearch.val();
        var url = api + query
        $.getJSON(url, function(results) {
//           do stuff with the results here
            $("#spinner").removeClass("spinner");
            var resultsLength = results[1].length;
            for (var i=0; i < resultsLength; i++) {
                $("#results").prepend("<div class='resultBlock animated bounceInUp'> <a target='_blank' href=" + results[3][i] + "> <h2>" + results[1][i] + "</h2></a><p>" + results[2][i] + "</p></div>");
            }
        });
    }
    
    
//    run function on click
    clickSearch.on('click', function() {
        $("#results").html("");
        if($("#userSearch").val() == "") {
                $("#error").html("That's an awfully boring search");
            } else {
                $("#error").html("");
                $("#spinner").addClass("spinner");
                getData();  
            }
    });
    
//    run function on enter press
    typeSearch.keypress(function(e) {
        if (e.keyCode === 13) {
            $("#results").html("");
            if($("#userSearch").val() == "") {
                $("#error").html("That's an awfully boring search");
            } else {
                $("#error").html("");
                $("#spinner").addClass("spinner");
                getData();  
            }
            
           
        }
    });
    
    
    
});
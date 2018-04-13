 $(document).ready(function() {
     
     $("#ball").on('click', function() {
        $("#ball").addClass("shake");
         
         setTimeout(function(){
           $("#ball").removeClass("shake");   
             
        var allQuestions = 100*Math.random();
        if (allQuestions >= 0 && allQuestions<= 4) {
            sweetAlert({title:"It is decidedly so.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 4 && allQuestions <= 9) {
            sweetAlert({title:"Without a doubt.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 9 && allQuestions <= 14) {
            sweetAlert({title:"Yes, definitely.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 14 && allQuestions <= 19) {
            sweetAlert({title:"You may rely on it.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 19 && allQuestions <= 24) {
            sweetAlert({title:"As I see it, yes.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 24 && allQuestions <= 29) {
            sweetAlert({title:"Most likely.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 29 && allQuestions <= 34) {
            sweetAlert({title:"Outlook is good.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 34 && allQuestions <= 39) {
            sweetAlert({title:"Yes.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 39 && allQuestions <= 44) {
            sweetAlert({title:"Signs point to yes.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 44 && allQuestions <= 49) {
            sweetAlert({title:"Reply hazy, try again.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 49 && allQuestions <= 54) {
            sweetAlert({title:"Ask again later.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 54 && allQuestions <= 59) {
            sweetAlert({title:"Better not tell you now.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 59 && allQuestions < 64) {
            sweetAlert({title:"Cannot predict now.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 64 && allQuestions < 69) {
            sweetAlert({title:"Concentrate and ask again.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 69 && allQuestions < 74) {
            sweetAlert({title:"Don't count on it.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 74 && allQuestions < 79) {
            sweetAlert({title:"My reply is no.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 79 && allQuestions < 84) {
            sweetAlert({title:"My sources say no.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 84 && allQuestions < 89) {
            sweetAlert({title:"Outlook isn't so good.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else if (allQuestions > 89 && allQuestions < 94) {
            sweetAlert({title:"Very doubtful.", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } else {
            sweetAlert({title:"It is certain!", confirmButtonColor:"#242d2d", confirmButtonText:"OK"});
        } 
             
         }, 400);  
     });
  });
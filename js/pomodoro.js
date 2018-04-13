$(document).ready(function() {
    
//    global variables and functions
    var sessionTime = 25; //In minutes
    var breakTime = 5; //In minutes
    var alarmAudio = false;
    var playAudio = true;  
    var running = false;
    var sessionTimeSeconds = 0;
    var breakTimeSeconds = 0;
    var intervalID = null;
    var currentState = "";
    function intervalManager(flag, clock, time) {
        if(flag) {
            intervalID = setInterval(clock, time);
        } else {
            clearInterval(intervalID);
        }
    }
    var clearError = function() {
        $("#error").html("");
    }
    var playAlarmSound = function() {
        var alarm = $("#alarm")[0];
        alarm.play();
    }
    
//    arrow click functions...............................................................
    $("#sessionIncrease").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        if(sessionTime >= 1440) {
            $("#error").html("Exceeded Limit");
            return;
        }
        sessionTime +=1;
        $("#sessionNum").html(sessionTime);
        $("#minutes").html(sessionTime); 
        $("#seconds").html("00"); 
    });
    $("#sessionDecrease").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        if(sessionTime == 1) {
            return;
        }
        sessionTime -=1;
        $("#sessionNum").html(sessionTime);
        $("#minutes").html(sessionTime);
        $("#seconds").html("00"); 
    });
    $("#breakIncrease").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        if(breakTime >= 1440) {
            $("#error").html("Exceeded Limit");
            return;
        }
        breakTime +=1;
        $("#breakNum").html(breakTime);
    });
    $("#breakDecrease").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        if(breakTime == 1) {
            return;
        }
        breakTime -=1;
        $("#breakNum").html(breakTime);
    });
//    END arrow click functions............................................................
    
//    Update click and enter functions....................................................
    $("#sessionUpdate").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        clearError();
        var value = Number($("#sessionField").val());
        $("#sessionField").val("");
        if(Number.isInteger(value)) {
            if(value >=1 && value <= 1440) {
                sessionTime = value;
                $("#sessionNum").html(sessionTime);
                $("#minutes").html(sessionTime);
                $("#seconds").html("00"); 
            } else {
                $("#error").html("Enter A Value Between 1 and 1440");
            }
        } else {
            $("#error").html("Please Enter A Whole Number");
        }
    });
    $("#breakUpdate").on('click', function() {
        if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
        }
        clearError();
        var value = Number($("#breakField").val());
        $("#breakField").val("");
        if(Number.isInteger(value)) {
            if(value >=1 && value <= 1440) {
                breakTime = value;
                $("#breakNum").html(breakTime);
            } else {
                $("#error").html("Enter A Value Between 1 and 1440");
            }
        } else {
            $("#error").html("Please Enter A Whole Number");
        }
    });
    $("#sessionField").keypress(function(e) {
        if(e.which == 13) {
            if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
            }
            clearError();
            var value = Number($("#sessionField").val());
            $("#sessionField").val("");
            if(Number.isInteger(value)) {
                if(value >=1 && value <= 1440) {
                    sessionTime = value;
                    $("#sessionNum").html(sessionTime);
                    $("#minutes").html(sessionTime);
                    $("#seconds").html("00"); 
                } else {
                    $("#error").html("Enter A Value Between 1 and 1440");
                }
            } else {
                $("#error").html("Please Enter A Whole Number");
            }
        }
        
    });
    $("#breakField").keypress(function(e) {
        if(e.which == 13) {
            if(running) {
            $("#error").html("Stop The Timer To Make Changes");
            return;
            }
            clearError();
            var value = Number($("#breakField").val());
            $("#breakField").val("");
            if(Number.isInteger(value)) {
                if(value >=1 && value <= 1440) {
                    breakTime = value;
                    $("#breakNum").html(breakTime);
                } else {
                    $("#error").html("Enter A Value Between 1 and 1440");
                }
            } else {
                $("#error").html("Please Enter A Whole Number");
            }
        }
    });
//    END field and button update functions..................................................
    
//    Toggle audio...........................................................................
    $("#audio").on('click', function() {
        var selector = $("#audio");
        if(alarmAudio) {
            selector.removeClass("on");
            selector.addClass("off");
            selector.html("OFF");
            alarmAudio = false;
        } else {
            selector.removeClass("off");
            selector.addClass("on");
            selector.html("ON&nbsp");
            alarmAudio = true;
        }  
    });
//    END toggle audio.......................................................................
    
//    Start and stop click functions.........................................................
    $("#startStop").on('click', function() {
        clearError();
        if(running) {
            $("#startStop").html("Start");
            intervalManager(false);
            running = false; 
            $(".box").removeClass("breakRed");
            $(".box").removeClass("sessionGreen");
            document.title = "Pomodoro Clock";
            $("link[rel*='icon']").attr("href", "/img/pomo.ico?");
            
        } else {
            $("#minutes").html(sessionTime);
            $("#seconds").html("00"); 
            $("#startStop").html("Stop");
            sessionTimeSeconds = sessionTime * 60 - 1;
            breakTimeSeconds = breakTime * 60 - 1;
            intervalManager(true, clock, 1000);
            running = true;
            $(".box").removeClass("breakRed");
            $(".box").addClass("sessionGreen");
        }
    });
//    END start and stop click functions.....................................................
    
//    Clock function definition.............................................................
        var clock = function() { 
        if(sessionTimeSeconds > 0) {
            currentState = "Session";
            $("link[rel*='icon']").attr("href", "/img/session.ico?");
            var seconds = sessionTimeSeconds % 60;
            var minutes = Math.floor(sessionTimeSeconds/60);
            if (seconds < 10) {
                $(".secFix").html(0);
            } else {
                $(".secFix").html("");
            }
            $("#seconds").html(seconds);
            $("#minutes").html(minutes);
            sessionTimeSeconds -= 1; 
        } else if (sessionTimeSeconds == 0) {
            var seconds = sessionTimeSeconds % 60;
            var minutes = Math.floor(sessionTimeSeconds/60);
            if (seconds < 10) {
                $(".secFix").html(0);
            } else {
                $(".secFix").html("");
            }
            $("#seconds").html(seconds);
            $("#minutes").html(minutes);
            sessionTimeSeconds -= 1; 
            if (playAudio && alarmAudio) {
                playAudio = false;
                playAlarmSound();
            }
            $(".box").removeClass("sessionGreen");
            $(".box").addClass("breakRed");
        } else if(breakTimeSeconds > 0) {
            currentState = "Break";
            $("link[rel*='icon']").attr("href", "/img/break.ico?");
            var seconds = breakTimeSeconds % 60;
            var minutes = Math.floor(breakTimeSeconds/60);
            if (seconds < 10) {
                $(".secFix").html(0);
            } else {
                $(".secFix").html("");
            }
            $("#seconds").html(seconds);
            $("#minutes").html(minutes);
            breakTimeSeconds -= 1;
        } else {
            playAudio = true;
            var seconds = breakTimeSeconds % 60;
            var minutes = Math.floor(breakTimeSeconds/60);
            if (seconds < 10) {
                $(".secFix").html(0);
            } else {
                $(".secFix").html("");
            }
            $("#seconds").html(seconds);
            $("#minutes").html(minutes);
            sessionTimeSeconds = sessionTime * 60 - 1;
            breakTimeSeconds = breakTime * 60 - 1;
            if (alarmAudio) {
                playAlarmSound();
            }
            $(".box").removeClass("breakRed");
            $(".box").addClass("sessionGreen");  
        }
            document.title = currentState + " - " + $("#minutes").html() + ":" + $(".secFix").html() +  $("#seconds").html();
    }
//    END clock function....................................................................
        
        
        
        
});
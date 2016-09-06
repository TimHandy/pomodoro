// App Title

// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

// User Story: I can reset the clock for my next pomodoro.

// User Story: I can customize the length of each pomodoro.

//'use strict';  // Recommended as best practice.


// TODO: when time === 0 BEEP!
// TODO: when timeRemaining <= 5 sec.... beep beep beep beep beep
// TODO: Enable a rest period of x min


$('#pause').hide();


$(document).ready(function(){

    var startCount = parseInt( $("#time").html() );
    var count = parseInt( $("#time").html() );
    //var timerSeconds = 2000;
    //var timerRunning = false;
    var timeoutID;
    var isPaused = false;

    //console.log(count);
    //console.log("count");

    function startTimer(){
        console.log("startTimer started " + "count: " + count);
        //count = parseInt( $("#time").html() );
        count *= 60;
        timeoutId = setInterval(timer, 1000);
        //console.log('timer running: ' + timerRunning);


        function timer() {
            count -= 1;
            if (count === 0) {
                clearInterval(timeoutId);
                $("#time").html("Take a break!");
            } else {
                if (count % 60 >= 10) {
                    $("#time").html( Math.floor(count/60) + ":" + count % 60 );
                } else {
                    $("#time").html( Math.floor(count/60) + ":0" + count % 60 );
                }
            }
        }
    }

    //plus1min
    $('#plus1min').click(function() {
        time = parseInt( $("#time").html() );
        $("#time").html(time + 1);
        count = time + 1;
    });

    //minus1min
    $('#minus1min').click(function() {
        time = parseInt( $("#time").html() );
        $("#time").html(time - 1);
        count = time - 1;
    });

    //Play button
    $('#start').click(function() {
        startTimer();
        $("#start, #minus1min, #plus1min").hide();
        $('#pause').show();
    });

    // Pause button
    $('#pause').click(function() {
        if (!isPaused) {
            isPaused = true;
            $("#pause").html('<i class="fa fa-play"></i>');
            clearInterval(timeoutId);
        } else if (isPaused) {
            isPaused = false;
            $("#pause").html('<i class="fa fa-pause"></i>');
            count /= 60;
            startTimer();
        }
    });


    // Reset button
    $('#reset').click(function(){
        isPaused = false;
        clearInterval(timeoutId);
        count = startCount;
        $("#time").html(startCount);
        $("#start, #minus1min, #plus1min").show();
        $("#pause").html('<i class="fa fa-pause"></i>').hide();
    });



}); // end document.ready

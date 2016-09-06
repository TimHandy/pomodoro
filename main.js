// App Title

// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

// User Story: I can reset the clock for my next pomodoro.

// User Story: I can customize the length of each pomodoro.

//'use strict';  // Recommended as best practice.



$(document).ready(function(){

    var startCount = parseInt( $("#time").html() );
    var count = parseInt( $("#time").html() );
    //var timerSeconds = 2000;
    //var timerRunning = false;
    var timeoutID;

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

    //Start button
    $('#start').click(function() {
        startTimer();
        $("#start, #minus1min, #plus1min").hide();
    });

    // Pause button
    $('#pause').click(function() {
        if ( $("#pause").html() === "Pause") {
            clearInterval(timeoutId);
            $("#pause").html("Continue");
        } else {
            $("#pause").html("Pause");
            count /= 60;
            startTimer();
        }
    });


    // Reset button
    $('#reset').click(function(){
        clearInterval(timeoutId);
        count = startCount;
        $("#time").html(startCount);
        $("#start, #minus1min, #plus1min").show();
        $("#pause").html("Pause");
    });



}); // end document.ready







// function reset() {
//     clearInterval(timeoutID);
//     timerRunning = false;
//     $("#time").html("25");
// }

// function pause() {
//     clearTimeout(timeoutID);
//     timerRunning = false;
//     console.log('timer running: ' + timerRunning);
// }
//
// function timeOver() {
//     $("#timer").html("<p>25</p>");
//     alert("Time's up!");
//     timerRunning = false;
//     console.log('timer running: ' + timerRunning);
// }




// Start and pause timer
// $('#start').on('click', function(){
//     // Start timer
//     if (!timerRunning) {
//         start();
//     }
//         //$("#timer").html("<p>Timer running</p>");
//     // Resets timer - TODO: need this to pause, not reset the time. Can have another button to reset
//     // } else if (timerRunning)  {
//     //     pause();
//     //     $("#timer").html("<p>Paused</p>");
//     // }
// });










// TODO: when time === 0 beep!
// TODO: reset button
// TODO: Use setInterval instead of setTimeout so that it repeats?
// TODO: Enable a rest period of x min
// TODO: when timeRemaining == 5 sec.... beep beep beep beep beep

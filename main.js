// App Title

// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.

// User Story: I can reset the clock for my next pomodoro.

// User Story: I can customize the length of each pomodoro.

'use strict';  // Recommended as best practice.

function timeOver() {
    $("#timer").html("<p>00:25:00 - Click to start</p>");
    alert("Time's up!");
    timerRunning = false;
    console.log('timer running: ' + timerRunning);
}

timerRunning = false;

// Start and stop timer
$('#timer').on('click', function(){
    // Start timer
    if (!timerRunning) {
        timeoutID = setTimeout(timeOver, 2000);  // use the timeoutID to stop execution http://www.w3schools.com/js/js_timing.asp
        $("#timer").html("<p>Timer running</p>");
        timerRunning = true;
        console.log('timer running: ' + timerRunning);
    // Resets timer - TODO: need this to pause, not reset the time. Can have another button to reset
    } else if (timerRunning)  {
        $("#timer").html("<p>00:25:00 - Click to start</p>");
        clearTimeout(timeoutID);
        timerRunning = false;
        console.log('timer running: ' + timerRunning);
    }



    // on click the timer, start/stop the timer (use a toggle, I have notes on this)
    // display the timer box start min/sec
    // update display with timeRemaining time every second

});






// TODO: when time === 0 beep!
// TODO: reset button
// TODO: Use setInterval instead of setTimeout so that it repeats?
// TODO: Enable a rest period of x min
// TODO: when timeRemaining == 5 sec.... beep beep beep beep beep

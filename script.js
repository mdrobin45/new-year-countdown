const newYears = "1 jan 2024";
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minuetsEl = document.getElementById('minuets');
const secondsEl = document.getElementById('seconds');

// Countdown function
function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minuets = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);
    
    // Update HTML number
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minuetsEl.innerHTML = minuets;
    secondsEl.innerHTML = seconds
        ;
}

setInterval(countdown, 1000);
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const birthday = '4 Jan 2023';

const birthdayDate = new Date(birthday);
const currentDate = new Date();


function countdown()
{
    const totalSeconds = (birthdayDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

countdown();

setInterval(countdown, 1000);

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
    // If Time < 10 then return 0 with Time Else return Time
}


function checkYear()
{
    const year = birthdayDate.getFullYear();
    const newYear = currentDate.getFullYear();

    if(newYear>=year)
    {
        updatedYear = year + 1;
        year = updatedYear;
    }
    else
    {
        console.log("No Update Needed!!!");
    }
}

checkYear();

setInterval(checkYear, 100000);
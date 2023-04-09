const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const birthday = '4 Jan 2024'; // Place your DOB here

function countdown()
{
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    // Check if the birthday has already passed this year
    if (currentDate.getMonth() > birthdayDate.getMonth() || 
        (currentDate.getMonth() === birthdayDate.getMonth() && currentDate.getDate() >= birthdayDate.getDate())) {
        birthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }
    else {
        console.log("No Change Needed!!!");
    }

    const totalSeconds = (birthdayDate.getTime() - currentDate.getTime())/1000;
    const daysValue = Math.floor(totalSeconds / 3600 / 24);
    const hoursValue = Math.floor(totalSeconds / 3600) % 24;
    const minsValue = Math.floor(totalSeconds / 60) % 60;
    const secondsValue = Math.floor(totalSeconds) % 60;
    
    daysElement.innerText = daysValue;
    hoursElement.innerText = formatTime(hoursValue);
    minsElement.innerText = formatTime(minsValue);
    secondsElement.innerText = formatTime(secondsValue);
    
}

//Format Time:
function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
    // If Time < 10 then return 0 with Time Else return Time (String Interpolation)
}
setInterval(countdown, 1000);

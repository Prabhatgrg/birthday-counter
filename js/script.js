const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const birthday = '4 Jan 2024'; // Place your DOB here

const birthdayDate = new Date(birthday);
const currentDate = new Date();


function dateUpdater(){
    const now = new Date();
    if (now.getMonth() > birthdayDate.getMonth() || 
        (now.getMonth() === birthdayDate.getMonth() && now.getDate() >= birthdayDate.getDate())) {
      birthdayDate.setFullYear(now.getFullYear() + 1);
    }
    else {
        console.log("No Change Needed!!!");
    }
}
dateUpdater();

function countdown()
{
    const totalSeconds = (birthdayDate.getTime() - currentDate.getTime())/1000;

    const daysValue = Math.floor(totalSeconds / 3600 / 24);
    const hoursValue = Math.floor(totalSeconds / 3600) % 24;
    const minsValue = Math.floor(totalSeconds / 60) % 60;
    const secondsValue = Math.floor(totalSeconds) % 60;
    
    // const daysValue = Math.floor(totalSeconds / 3600 / 24);
    // const hoursValue = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minsValue = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
    // const secondsValue = Math.floor((totalSeconds % (1000 * 60)) / 1000);

    daysElement.innerHTML = daysValue;
    hoursElement.innerHTML = formatTime(hoursValue);
    minsElement.innerHTML = formatTime(minsValue);
    secondsElement.innerHTML = formatTime(secondsValue);

}

setInterval(countdown, 1000);
//Format Time:

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
    // If Time < 10 then return 0 with Time Else return Time
}

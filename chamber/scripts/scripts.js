const menubutton = document.querySelector('.menu')
const navi = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {navi.classList.toggle('responsive')}, false);

let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
document.querySelector("#copyright").innerHTML = "&copy; " + currentYear + " - College Station Chamber";

let lastModifiedFull = new Date(currentDateAndTime);
let lastModified = `${lastModifiedFull.getMonth() + 1}/${lastModifiedFull.getDate()}/${currentYear} ${lastModifiedFull.getHours()}:${lastModifiedFull.getMinutes()}:${lastModifiedFull.getSeconds()}`;  
document.getElementById("last-modified").innerHTML = "Last Modified: " + lastModified;

const displayEventBanner = function () {
    document.getElementById('event-banner').style.display = "block";
}

const dateElement = document.getElementById("current-date");
const currentDayDigit = currentDateAndTime.getDay();
let currentDay = ""
switch (currentDayDigit) {
    case 0:
        currentDay = "Sunday";
        break
    case 1:
        currentDay = "Monday";
        displayEventBanner();
        break
    case 2:
        currentDay = "Tuesday";
        displayEventBanner();
        break
    case 3:
        currentDay = "Wednesday";
        break
    case 4:
        currentDay = "Thursday";
        break
    case 5:
        currentDay = "Friday";
        break
    case 6: 
        currentDay = "Saturday";
        break
}

const currentMonthDigit = currentDateAndTime.getMonth();
let currentMonth = "";
switch(currentMonthDigit) {
    case 0:
        currentMonth = "January";
        break
    case 1:
        currentMonth = "February";
        break
    case 2:
        currentMonth = "March";
        break
    case 3:
        currentMonth = "April";
        break
    case 4:
        currentMonth = "May";
        break
    case 5:
        currentMonth = "June";
        break
    case 6:
        currentMonth = "July";
        break
    case 7:
        currentMonth = "August";
        break
    case 8:
        currentMonth = "September";
        break
    case 9:
        currentMonth = "October";
        break
    case 10:
        currentMonth = "November";
        break
    case 11:
        currentMonth = "December";
        break
}

const currentFullDate = `${currentDay}, ${currentDateAndTime.getDate()} ${currentMonth} ${currentYear}`;
dateElement.innerHTML = currentFullDate;
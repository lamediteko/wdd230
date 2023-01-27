storage = window.localStorage;

const currentDate = new Date();
const currentMS = currentDate.getTime();

// You can use this to test this script!
// const testDate = new Date("31 Jan 2022");
// let ms = testDate.getTime();
// storage.setItem('lastVisitTime', ms);

let days = 0;

let lastMS = parseInt(storage.getItem('lastVisitTime'));
if (lastMS) {
    let diffMS = currentMS - lastMS;
    days = Math.round(diffMS / 86400000);
    storage.setItem("lastVisitTime", currentMS);
}
else {
    storage.setItem("lastVisitTime", currentMS);
    days = 0
}

let daysAgo = document.getElementById("days-since-visit");
daysAgo.innerHTML = `Last visited ${days} days ago`
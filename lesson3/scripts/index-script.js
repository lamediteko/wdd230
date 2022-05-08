let currentDateAndTime = new Date();
let currentYear = currentDateAndTime.getFullYear();
document.querySelector("#copyright").innerHTML = "&copy; " + currentYear;

let lastModifiedFull = new Date(currentDateAndTime);
let lastModified = `${lastModifiedFull.getMonth() + 1}/${lastModifiedFull.getDate()}/${currentYear} ${lastModifiedFull.getHours()}:${lastModifiedFull.getMinutes()}:${lastModifiedFull.getSeconds()}`;  
document.getElementById("last-modified").innerHTML = "Last Modified: " + lastModified;
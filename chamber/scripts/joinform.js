const dateVisitField = document.getElementById("form-visit-date");
let visitedFull = new Date(currentDateAndTime);
let visited = `${visitedFull.getMonth() + 1}/${visitedFull.getDate()}/${currentYear} ${visitedFull.getHours()}:${visitedFull.getMinutes()}:${visitedFull.getSeconds()}`;

dateVisitField.setAttribute("value", visited);

const submitButton = document.getElementById("submit-button");
const reqField = document.querySelectorAll("input[required]");
let validForm = true;
submitButton.addEventListener("click", () => {
    validForm = true;
    const isInputFilled = [];
    reqField.forEach((field) => {
        if (field.value === "") isInputFilled.push(false)
        else isInputFilled.push(true)
    })
    for (let i = 0; i < isInputFilled.length; i++){
        if (!isInputFilled[i]) {
            validForm = false;
            break
        }
    }
    if (validForm) window.location.href = "thankyou.html";
    else {
        alert("Please fill all required fields.");
        reqField.forEach((field) => field.classList.add("required-highlight"));
    }
})
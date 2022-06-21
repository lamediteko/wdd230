const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    })



const displayProphets = function (prophet) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let dob = document.createElement("p")
    let pob = document.createElement("p")
    let orderNum = "";
    switch (prophet.order) {
        case 1:
            orderNum = "1st";
            break;
        case 2:
            orderNum = "2nd";
            break;
        case 3:
            orderNum = "3rd";
            break;
        default:
            orderNum = prophet.order + "th";
    }
    const prophetName = prophet.name + ' ' + prophet.lastname;
    h2.textContent = prophetName;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', "Portrait of " + prophetName + ", " + orderNum + " Latter-day President");
    portrait.setAttribute('loading', 'lazy')
    dob.textContent = "Birth Date: " + prophet.birthdate;
    pob.textContent = "Birthplace: " + prophet.birthplace;

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);

    cards.appendChild(card);
}
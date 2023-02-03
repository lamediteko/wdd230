const directory = document.querySelector(".cards");
const cardDisplay = document.createElement("div")
cardDisplay.setAttribute('class', "card-display")
const listDisplay = document.createElement("div")
listDisplay.setAttribute('class', "list-display")
directory.appendChild(cardDisplay)
directory.appendChild(listDisplay)
const requestURL = "https://lamediteko.github.io/wdd230/chamber/data/data.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject["businesses"];
        businesses.forEach(displayBusinessCards);
        businesses.forEach(displayBusinessList);
    })

const displayBusinessCards = function (business) {
    let card = document.createElement("section");
    card.setAttribute('class', 'cardview')
    let logo = document.createElement("img");
    let busName = document.createElement("h2");
    let address = document.createElement("p");
    let phonenum = document.createElement("p");
    let website = document.createElement("a");

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', business.name + " Logo");
    logo.setAttribute('loading', 'lazy');

    busName.textContent = business.name;
    address.textContent = business.address;
    phonenum.textContent = business.phonenum;
    website.textContent = business.website;
    website.setAttribute('href', business.website);
    website.setAttribute('target', '_blank');

    card.appendChild(logo);
    card.appendChild(busName);
    card.appendChild(address);
    card.appendChild(phonenum);
    card.appendChild(website);

    cardDisplay.appendChild(card);    
}

const displayBusinessList = function (business) {
    card = document.createElement("section");
    card.setAttribute('class', 'listview');
    busName = document.createElement("p");
    address = document.createElement("p");
    phonenum = document.createElement("p");
    website = document.createElement("a");
    busName.textContent = business.name;
    address.textContent = business.address;
    phonenum.textContent = business.phonenum;
    website.textContent = business.website;
    website.setAttribute('href', business.website);
    website.setAttribute('target', '_blank');

    card.appendChild(busName);
    card.appendChild(address);
    card.appendChild(phonenum);
    card.appendChild(website);

    listDisplay.appendChild(card);
}

let cardViewActive = true;
let intViewportWidth = window.innerWidth;
if (intViewportWidth < 750) {
    listDisplay.classList.add("inactive");
} else if (intViewportWidth < 1000) {
    cardDisplay.classList.add("inactive");
    cardViewActive = false;
} else {
    listDisplay.classList.add("inactive");
}

const viewButton = document.querySelector(".view-button");
if (cardViewActive) viewButton.textContent = "Enable List View"
else viewButton.textContent = "Enable Card View"
viewButton.addEventListener("click", () => {
    if (cardViewActive) {
        cardViewActive = false;
        cardDisplay.classList.toggle("inactive");
        listDisplay.classList.toggle("inactive");
        viewButton.textContent = "Enable Card View";
    }
    else {
        cardViewActive = true;
        cardDisplay.classList.toggle("inactive");
        listDisplay.classList.toggle("inactive");
        viewButton.textContent = "Enable List View";
    }
})
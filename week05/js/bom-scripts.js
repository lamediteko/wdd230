const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', function () {
    if (input.value) {
        let newListItem = document.createElement('li');
        let newDeleteButton = document.createElement('button');
        newListItem.innerHTML = input.value;
        newDeleteButton.textContent = "❌";
        newListItem.appendChild(newDeleteButton);
        list.appendChild(newListItem);
        newDeleteButton.addEventListener('click', function() {
            newListItem.remove();
        });
        input.value = "";
        input.focus();
        }
    })
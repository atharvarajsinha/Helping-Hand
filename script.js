function includeHTML(callback) {
    let elements = document.querySelectorAll("[include-html]");
    let totalElements = elements.length;
    let processedElements = 0;
    elements.forEach((elmnt) => {
        let file = elmnt.getAttribute("include-html");
        if (file) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        elmnt.innerHTML = this.responseText;
                    } else if (this.status === 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("include-html");
                    processedElements++;
                    if (processedElements === totalElements && callback) {
                        callback();
                    }
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
        } else {
            processedElements++;
            if (processedElements === totalElements && callback) {
                callback();
            }
        }
    });
}

function toggleMenu() {
    const menu = document.querySelector(".toggle-menu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML(() => {
        const toggleButton = document.querySelector(".toggle-btn");
        if (toggleButton) {
            toggleButton.addEventListener("click", toggleMenu);
        }
    });
});

function createCards(data) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const title = document.createElement("div");
        title.classList.add("card-title");
        title.style.overflowWrap = "break-word";
        title.textContent = item.title;

        const person = document.createElement("div");
        person.classList.add("card-person");
        person.style.overflowWrap = "break-word";
        person.textContent = `By: ${item.person}`;

        const stats = document.createElement("div");
        stats.classList.add("card-stats");
        stats.innerHTML = `Amount to be Raised: <span>${item.amountToBeRaised}</span>
                           <br>
                           Amount Raised: <span>${item.amountRaised}</span>`;

        const button = document.createElement("button");
        button.textContent = "Donate Now";
        button.addEventListener("click", () => {
            window.location.href = `donation.html?id=${item.id}`;
        });
        

        cardContent.appendChild(title);
        cardContent.appendChild(person);
        cardContent.appendChild(stats);
        cardContent.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardContent);

        cardContainer.appendChild(card);
    });
}

function loadActiveFundraisers() {
    const localData = JSON.parse(localStorage.getItem('fundraiserData')) || [];
    const activeFundraisers = localData.filter((item) => item.status === "active").slice(0, 3);
    createCards(activeFundraisers);
}
loadActiveFundraisers();

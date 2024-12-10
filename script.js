function toggleMenu() {
    const menu = document.querySelector(".toggle-menu");
    if(menu) {
        menu.classList.toggle("show");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-btn");
    if(toggleButton) {
        toggleButton.addEventListener("click", toggleMenu);
    }
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

emailjs.init("oSFe6ULRDPyDSo-sx");
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("loader").style.display = "flex";
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_2cw9fxd", "template_86hcxtl", formData)
        .then(function (response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function (error) {
            alert("Failed to send message. Please try again.");
            console.error("Error:", error);
        })
        .finally(function () {
            document.getElementById("loader").style.display = "none";
        });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    toggleScrollButton();
};
function toggleScrollButton() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("show");
    }
    else {
        scrollToTopBtn.classList.remove("show");
    }
}
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
    });
});
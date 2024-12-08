const fundraisers = JSON.parse(localStorage.getItem('fundraiserData')) || [];

function renderFundraisers(filteredFundraisers) {
    const activeContainer = document.getElementById("card-container");
    const completedContainer = document.getElementById("completed-section");
    activeContainer.innerHTML = "";
    completedContainer.innerHTML = "";
    const activeFundraisers = filteredFundraisers.filter(f => f.status === "active");
    const completedFundraisers = filteredFundraisers.filter(f => f.status === "completed");
    // Render active fundraisers
    if(activeFundraisers.length > 0) {
        activeFundraisers.forEach(fundraiser => activeContainer.appendChild(createCard(fundraiser)));
    }
    else {
        activeContainer.innerHTML = "<p class='no-fundraisers'>No active fundraisers found.</p>";
    }
    // Render completed fundraisers
    if(completedFundraisers.length > 0) {
        completedFundraisers.forEach(fundraiser => completedContainer.appendChild(createCard(fundraiser)));
    }
    else {
        completedContainer.innerHTML = "<p class='no-fundraisers'>No completed fundraisers available.</p>";
    }
}

function filterCards() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const categoryDropdown = document.getElementById("categoryDropdown");
    const category = categoryDropdown.value;
    const dynamicHeading = document.getElementById("dynamicHeading");
    // Update the dynamic heading based on the selected category
    if(category === "all") {
        dynamicHeading.textContent = "All Categories";
    }
    else if (category === "completed") {
        dynamicHeading.textContent = "Completed Fundraisers";
    }
    else {
        const selectedOption = categoryDropdown.options[categoryDropdown.selectedIndex].text;
        dynamicHeading.textContent = selectedOption;
    }
    // Filter fundraisers
    const filteredFundraisers = fundraisers.filter(fundraiser => {
        const matchesCategory =
            category === "all" ||
            fundraiser.category.toLowerCase() === category.toLowerCase() ||
            (category === "completed" && fundraiser.status === "completed");
        const matchesSearch = fundraiser.title.toLowerCase().includes(searchInput);
        return matchesCategory && matchesSearch;
    });
    renderFundraisers(filteredFundraisers);
}

// Create a single card
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = data.title;

    const person = document.createElement("div");
    person.classList.add("card-person");
    person.textContent = `By: ${data.person}`;

    const stats = document.createElement("div");
    stats.classList.add("card-stats");
    stats.innerHTML = `
        Amount to be Raised: <span>${data.amountToBeRaised}</span>
        <br>
        Amount Raised: <span>${data.amountRaised}</span>
    `;

    cardContent.appendChild(title);
    cardContent.appendChild(person);
    cardContent.appendChild(stats);
    // Add "Donate Now" button for active fundraisers
    if (data.status.toLowerCase() !== "completed") {
        const button = document.createElement("button");
        button.textContent = "Donate Now";
        button.addEventListener("click", () => {
            window.location.href = `donation.html?id=${data.id}`;
        });
        cardContent.appendChild(button);
    }
    card.appendChild(img);
    card.appendChild(cardContent);
    return card;
}

// Initial rendering on page load
document.addEventListener("DOMContentLoaded", () => {
    filterCards();
});
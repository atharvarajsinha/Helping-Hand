const urlParams = new URLSearchParams(window.location.search);
const fundraiserId = parseInt(urlParams.get("id"), 10);
const fundraisers = JSON.parse(localStorage.getItem("fundraiserData")) || [];
const fundraiser = fundraisers.find((item) => item.id === fundraiserId);

if (!fundraiser) {
    alert("Invalid fundraiser ID.");
    window.location.href = "home.html";
}

document.getElementById("fundraiser-title").textContent = fundraiser.title;
document.getElementById("fundraiser-image").src = fundraiser.image;
document.getElementById("fundraiser-person").textContent = "By: " + fundraiser.person;
document.getElementById("fundraiser-description").textContent = "Description: " + fundraiser.description;
document.getElementById("fundraiser-total").textContent = fundraiser.amountToBeRaised;
document.getElementById("fundraiser-raised").textContent = fundraiser.amountRaised;

document.getElementById("donation-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const donorName = document.getElementById("donor-name").value.trim();
    const donationAmount = parseInt(document.getElementById("donation-amount").value, 10);

    const amountRaised = parseInt(fundraiser.amountRaised.replace("Rs. ", ""), 10);
    const amountToBeRaised = parseInt(fundraiser.amountToBeRaised.replace("Rs. ", ""), 10);
    const remainingAmount = amountToBeRaised - amountRaised;

    if (!donorName || isNaN(donationAmount)) {
        alert("Please fill in all the fields correctly.");
        return;
    }

    if (remainingAmount === 0) {
        alert(`Fundraiser is already completed.`);
        document.getElementById("donation-form").reset();
        return;
    }

    if (donationAmount < 50 && remainingAmount >= 50) {
        alert("Minimum donation amount is Rs. 50.");
        return;
    }

    if (donationAmount > remainingAmount) {
        alert(`You can only donate up to Rs. ${remainingAmount}.`);
        return;
    }

    payment(donorName, donationAmount);
});

function payment(donorName, donationAmount) {
    /*const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: donationAmount * 100,
        currency: "INR",
        name: fundraiser.person,
        description: `Donation to ${fundraiser.person} of Rs. ${donationAmount}`,
        image: "assets/images/logo.png",
        handler: function (response) {

        },
        prefill: {
            name: donorName,
        },
        theme: {
            color: "#3399cc",
        },
    };

    const rzp = new Razorpay(options);
    rzp.open();*/
    const updatedAmountRaised = parseInt(fundraiser.amountRaised.replace("Rs. ", ""), 10) + donationAmount;
    fundraiser.amountRaised = `Rs. ${updatedAmountRaised}`;
    if (updatedAmountRaised >= parseInt(fundraiser.amountToBeRaised.replace("Rs. ", ""), 10)) {
        fundraiser.status = "completed";
    }
    const updatedFundraisers = fundraisers.map((item) =>
        item.id === fundraiserId ? fundraiser : item
    );

    localStorage.setItem("fundraiserData", JSON.stringify(updatedFundraisers));
    alert(`Thank you, ${donorName}, for your donation of Rs. ${donationAmount} to ${fundraiser.person}!`);
    document.getElementById("fundraiser-raised").textContent = fundraiser.amountRaised;
    document.getElementById("donation-form").reset();
}

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
        title.textContent = item.title;

        const person = document.createElement("div");
        person.classList.add("card-person");
        person.textContent = `By: ${item.person}`;

        const stats = document.createElement("div");
        stats.classList.add("card-stats");
        stats.innerHTML = `Amount to be Raised: <span>${item.amountToBeRaised}</span><br>Amount Raised: <span>${item.amountRaised}</span>`;

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
    const localData = JSON.parse(localStorage.getItem("fundraiserData")) || [];
    const activeFundraisers = localData
        .filter((item) => item.status === "active" && item.category === fundraiser.category && item.id !== fundraiserId)
        .slice(0, 3);

    if (activeFundraisers.length === 0) {
        document.getElementById("noCard").style.display = "block";
    } else {
        document.getElementById("noCard").style.display = "none";
        createCards(activeFundraisers);
    }
}

loadActiveFundraisers();
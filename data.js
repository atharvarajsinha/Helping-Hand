const fundraiserData = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngsGpZFUEnTqL11VPRw-eO1Vq8UI2nE1ScAwkPURVutBHJ1d100bI8b4tfHlGdmIo3Sk&usqp=CAU",
        title: "Medical Emergency for Ramesh",
        person: "Ramesh Kumar",
        category: "Medical",
        status: "active",
        amountToBeRaised: "Rs. 1,00,000",
        amountRaised: "Rs. 75,000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq0rvB3FVy7GA09isjqckUTneW1BWUGnNbT65SE57hBfcxLju7vhJOhkETeAe_wDXQ4M&usqp=CAU",
        title: "Education Support for Jyoti Mishra",
        person: "Jyoti Mishra",
        category: "Education",
        status: "active",
        amountToBeRaised: "Rs. 50,000",
        amountRaised: "Rs. 23,300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl4SEZfjHtGJvK93V6AVzmjPL99K6jP1x6Q&s",
        title: "Support Animal Shelter",
        person: "Atharva Raj Sinha",
        category: "Animals",
        status: "active",
        amountToBeRaised: "Rs. 15,000",
        amountRaised: "Rs. 9,000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
];

let prev = JSON.parse(localStorage.getItem('fundraiserData')) || [];
function doesFundraiserExist(fundraiser) {
    return prev.some(existingFundraiser => existingFundraiser.title === fundraiser.title);
}
fundraiserData.forEach(fundraiser => {
    if (!doesFundraiserExist(fundraiser)) {
        prev.push(fundraiser);
    }
});
localStorage.setItem('fundraiserData', JSON.stringify(prev));
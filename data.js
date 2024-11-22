const fundraisers = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngsGpZFUEnTqL11VPRw-eO1Vq8UI2nE1ScAwkPURVutBHJ1d100bI8b4tfHlGdmIo3Sk&usqp=CAU",
        title: "Medical Emergency for Ramesh",
        person: "Ramesh Kumar",
        category: "Medical",
        status: "active",
        amountToBeRaised: "Rs. 100000",
        amountRaised: "Rs. 75000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. Consequatur fugiat odio eveniet illo, rem ratione quis quaerat magni nobis! Doloribus fugit atque voluptatem sequi nobis aliquam! Odio quia pariatur magnam.",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzq0rvB3FVy7GA09isjqckUTneW1BWUGnNbT65SE57hBfcxLju7vhJOhkETeAe_wDXQ4M&usqp=CAU",
        title: "Education Support for Jyoti Mishra",
        person: "Jyoti Mishra",
        category: "Education",
        status: "active",
        amountToBeRaised: "Rs. 50000",
        amountRaised: "Rs. 2300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. Consequatur fugiat odio eveniet illo, rem ratione quis quaerat magni nobis! Doloribus fugit atque voluptatem sequi nobis aliquam! Odio quia pariatur magnam.",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl4SEZfjHtGJvK93V6AVzmjPL99K6jP1x6Q&s",
        title: "Support Animal Shelter",
        person: "Atharva Raj Sinha",
        category: "Animals",
        status: "active",
        amountToBeRaised: "Rs. 15000",
        amountRaised: "Rs. 9000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni. Consequatur fugiat odio eveniet illo, rem ratione quis quaerat magni nobis! Doloribus fugit atque voluptatem sequi nobis aliquam! Odio quia pariatur magnam.",
    },
];

let prev = JSON.parse(localStorage.getItem('fundraiserData')) || [];

fundraisers.forEach(fundraiser => {
    const exists = prev.some(existingFundraiser => existingFundraiser.id === fundraiser.id);
    
    if(!exists) {
        prev.push(fundraiser);
    }
});

localStorage.setItem('fundraiserData', JSON.stringify(prev));
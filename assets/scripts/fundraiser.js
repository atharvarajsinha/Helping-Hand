function submitForm() {
    const amount = document.getElementById('amount').value;
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files[0] ? document.getElementById('image').files[0] : '';
    const person = document.getElementById('person').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!amount || !title || !image || !person || !category || !description) {
        alert('Please fill in all fields.');
        return;
    }

    const newFundraiser = {
        image: image,
        title: title,
        person: person,
        category: category,
        status: 'active', // Default status
        amountToBeRaised: `Rs. ${amount}`,
        amountRaised: "Rs. 0", // Default value for amount raised
        description: description,
    };

    let fundraiserData = JSON.parse(localStorage.getItem('fundraiserData')) || [];
    fundraiserData.unshift(newFundraiser);
    localStorage.setItem('fundraiserData', JSON.stringify(fundraiserData));
    document.getElementById('fundraiserform').reset();
    alert('Fundraiser added successfully!');
}
function submitForm() {
    const amount = document.getElementById('amount').value;
    const title = document.getElementById('title').value;
    const imageInput = document.getElementById('image');
    const person = document.getElementById('person').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    
    if(!amount || !title || !imageInput.files.length || !person || !category || !description) {
        alert('Please fill in all fields.');
        return;
    }

    const fundraiserData = JSON.parse(localStorage.getItem('fundraiserData')) || [];
    const newId = fundraiserData.length ? Math.max(fundraiserData[0].id+1,fundraiserData[fundraiserData.length - 1].id+1) : 1;
    const reader = new FileReader();
    reader.onload = function(event) {
        const image = event.target.result;
        const newFundraiser = {
            id: newId,
            image: image,
            title: title,
            person: person,
            category: category,
            status: 'active',
            amountToBeRaised: `Rs. ${amount}`,
            amountRaised: "Rs. 0",
            description: description,
        };

        fundraiserData.unshift(newFundraiser);
        localStorage.setItem('fundraiserData', JSON.stringify(fundraiserData));
        document.getElementById('fundraiserform').reset();
        alert('Fundraiser added successfully!');
        window.location.href = `donation.html?id=${newId}`;
    };
    reader.readAsDataURL(imageInput.files[0]);
}
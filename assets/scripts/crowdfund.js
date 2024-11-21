function donate() {
    const element = document.getElementById("donation-input");
    const name = document.getElementById("donation-name");
    const amt = parseFloat(element.value);
    if (amt >= 50) {
        alert(`Thank You ${name.value} for donating ₹${amt}!`);
        name.value = "";
        element.value = "";
    } else {
        alert("Please enter an amount of ₹50 or more.");
    }
}
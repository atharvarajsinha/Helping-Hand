function donate() {
    const element = document.getElementById("donation-input");
    const name = document.getElementById("donation-name");
    const amt = parseFloat(element.value);
    if(name.value==="" || name.value===undefined) {
        alert("Please Enter the Name!");
        return ;
    }
    else if(amt<50 || isNaN(amt)) {
        alert("Please enter an amount of ₹50 or more.");
        return ;
    }
    else {
        alert(`Thank You ${name.value} for donating ₹${amt}!`);
        name.value = "";
        element.value = "";
    }
}
document.getElementById("sub").addEventListener("click", execute);

function execute(event) {
    event.preventDefault();

    let b = parseInt(document.getElementById("bhk").value);
    let s = parseInt(document.getElementById("sq").value);

    if (isNaN(b) || isNaN(s) || b <= 0 || s <= 0) {
        document.getElementById("ou").innerHTML = "Please enter valid data";
    } else {
        
        const basePricePerSqFt = 15000;
        const priceMultiplierPerBHK = 50000; 

        // Calculate the total price
        let totalPrice = basePricePerSqFt * s + priceMultiplierPerBHK * b;

        document.getElementById("dis").innerHTML = totalPrice ;
    }
}

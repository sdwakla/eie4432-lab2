const PRICE = {
    "BubbleMilktea": {
        "small": 10,
        "medium": 15,
        "large": 20
    },
    "IcedLatte": {
        "small": 12,
        "medium": 17,
        "large": 22
    }
}

function calculatePrice() {
    var selectDrink = document.getElementById("selectDrink").value;

    var price = 0;
    if (selectDrink == "default") {
        alert("Please select one Drink!");
        document.getElementById("price").innerHTML = price;
        return;
    }

    if (!document.querySelector('input[name="size"]:checked')) {
        alert("Please select a size.");
        document.getElementById("price").innerHTML = price;
        return;
    }

    var selectSize = document.querySelector('input[name="size"]:checked').value;

    for (const [k, v] of Object.entries(PRICE)) {
        if (k == selectDrink) {
            for (const [sk, sv] of Object.entries(v)) {
                if (sk == selectSize) {
                    price = sv;
                }
            }
        }
    }
    document.getElementById("price").innerHTML = price;
}

function validateForm() {
    var name = document.getElementById("nameInput").value.trim();
    var selectDrink = document.getElementById("selectDrink").value;

    if (!name) {
        alert(" Please enter your name.");
        return false;
    }
    if (selectDrink == "default") {
        alert("Please select a drink first.");
        return false;
    }
    if (!document.querySelector('input[name="size"]:checked')) {
        alert("Please select a size.");
        return false;
    }
    if(!document.querySelector('input[name="ice"]:checked')) {
        alert("Please select an ice preference.");
        return false;
    }
    if (!document.querySelector('input[name="sweetness"]:checked')) {
        alert("Please select a sweetness level.");
        return false;
    }

    return true;
}

function placeOrder(event) {
    event.preventDefault();
    if (!validateForm()) {
        return;
    }

    var name = document.getElementById("nameInput").value.trim();
    var selectDrink = document.getElementById("selectDrink").value;
    var selectSize = document.querySelector('input[name="size"]:checked').value;
    var selectIce = document.querySelector('input[name="ice"]:checked').value;
    var selectSweetness = document.querySelector('input[name="sweetness"]:checked').value;

    var orderData = [name, selectDrink, selectSize, selectIce, selectSweetness];
    localStorage.setItem("orders", orderData);
    confirm("Order placed successfully! Thank you for your order.");
}

function resetOrder() {
    document.getElementById("orderForm").reset();
    document.getElementById("price").innerHTML = 0;
}
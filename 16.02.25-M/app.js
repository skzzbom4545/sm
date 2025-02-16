function submitPhoneInfo() {
    var brand = document.getElementById("brand").value;
    var price = document.getElementById("price").value;
    var power = document.getElementById("power").value;
    var phone = {
        brand: brand,
        price: price,
        power: power
    };
    console.log("About phone:");
    console.log(`Brand: ${phone.brand}`);
    console.log(`Price: ${phone.price}`);
    console.log(`Power: ${phone.power}`);
}
// Step 1: Store the items in an array of objects
var items = [
    { name: "Pliers", price: "$12.50", inStock: true },
    { name: "Hammer", price: "$25.00", inStock: false },
    { name: "Screwdriver", price: "$8.20", inStock: true }
];

// Step 2: A small helper function that converts "$12.50" into the number 12.5
function convertPriceToNumber(priceText) {
    var cleanText = priceText.replace("$", "");
    var number = parseFloat(cleanText);
    return number;
}

// Step 3: The main function (async because the task asks for a delay)
async function calculateAvailableTotal(items) {
    // Wait for half a second to simulate a delay
    await new Promise(function (resolve) {
        setTimeout(resolve, 500);
    });

    var total = 0;

    // Go through every item, one by one
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        // Only use items that are in stock
        if (item.inStock === true) {
            var price = convertPriceToNumber(item.price);

            console.log("Item: " + item.name + " | Price: " + price);

            total = total + price;
        }
    }

    // Print the total with 2 decimal places
    console.log("Total Cost: " + total.toFixed(2));

    // Return the total as a number
    return Number(total.toFixed(2));
}

// Step 4: Run the function
calculateAvailableTotal(items).then(function (result) {
    console.log("Returned value: " + result);
});
const items = [
    { name: "Pliers", price: "$12.50", inStock: true },
    { name: "Hammer", price: "$25.00", inStock: false },
    { name: "Screwdriver", price: "$8.20", inStock: true }
];

async function calculateAvailableTotal(items) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    let total = 0;

    for (const item of items) {
        if (item.inStock === true) {
            const numericPrice = parseFloat(item.price.replace("$", ""));
            console.log(`Item: ${item.name} | Price: ${numericPrice}`);
            total += numericPrice;
        }
    }

    console.log(`Total Cost: ${total.toFixed(2)}`);
    return Number(total.toFixed(2));
}

calculateAvailableTotal(items).then((result) => {
    console.log("Returned value:", result);
});
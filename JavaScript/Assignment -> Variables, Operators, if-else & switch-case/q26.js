let quantity = 100;
let choice = 4;
let price;

switch (choice) {
    case 1:
        console.log("Burger Selected");
        price = 50
        break;
    case 2:
        console.log("Pizza Selected");
        price = 250
        break;
    case 3:
        console.log("Pasta Selected");
        price = 180
    case 4:
        console.log("Sandwich Selected");
        price = 120
        break;
    case 5:
        console.log("Momos Selected");
        price = 40;
        break;
}

if (choice >= 1 && choice <= 4 && quantity > 0) {
    let total = price * quantity;
    console.log("Total", total);
} else {
    console.log("Invalid choice or quantity");
}

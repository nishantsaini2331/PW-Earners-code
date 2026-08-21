let units = 201;

let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Bill" , bill);
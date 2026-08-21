let balance = 235;
let withdrawAmmount = 200;
let deposit = 300;
let choice = 3;

switch (choice) {
    case 1:
        console.log("Current Balance :", balance);
        break;
    case 2:
        if (deposit > 0) {
            balance += deposit;
            console.log("Money deposited successfully");
            console.log("New Balance", balance);
        } else {
            console.log("Invalid deposit ammount");
        }
        break;
    case 3:
        if (withdrawAmmount <= 0) {
            console.log("Invalid withdraw ammount");
        } else if (withdrawAmmount > balance) {
            console.log("Insufficient Balance");
        } else {
            let remaining = balance - withdrawAmmount;
            console.log("Withdraw Successfull");
            console.log("Remaining Amount", remaining);
        }
        break;
    case 4:
        console.log("Thanks for using the ATM");
        break;
    default:
        console.log("Invalid choice");
}



let balance = 235;
let withdrawAmmount = 235;

if(withdrawAmmount <= 0){
    console.log("Invalid withdrawAmmount");
}else if (withdrawAmmount > balance){
    console.log("Insufficient Balance");
} else {
    let remaining = balance - withdrawAmmount;
    console.log("Withdraw Successfull");
    console.log("Remaining Amount" , remaining);
}
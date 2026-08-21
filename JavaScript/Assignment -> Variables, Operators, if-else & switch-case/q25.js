let age = 12;
let numberOfTickets = 4;

let totalTicketprice ;

if(age < 0){
    console.log("Invalid age");
}else if( age <= 12){
     totalTicketprice = 100 * numberOfTickets
} else if( age <= 59){
     totalTicketprice = 200 * numberOfTickets
} else {
     totalTicketprice = 120 * numberOfTickets
} 

console.log("Total" , totalTicketprice);
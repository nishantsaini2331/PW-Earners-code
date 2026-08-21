
let alokMarks = 46 + 56 + 23;
let addiMarks = 24 + 24 + 42;
let karan = 54 + 23 + 65;
let anu = 54 + 52 + 23;

// let productPrice = 3000;
// let discountAmount = 3000 * 50 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge

// function totalMarks(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     console.log(`${studentName } total marks : ` ,mathMarks + scienceMarks + sanskritMarks);
// }

// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Karan", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)



// function greetingMsg(userName = "Guest", greetings = "Hii"){
//     // console.log(`${greetings}, ${userName}`);
//     console.log(`${greetings}, ${userName}`);
//     // console.log(greetings + " " +userName );
// }

// greetingMsg("Priyanshu")
// greetingMsg("Anshika" )
// greetingMsg("Satyam" , "Ki hal hai" )
// greetingMsg("Saif")



// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//     }
// }

// calculator(4 , 5 , "-")



// function totalMarks( mathMarks, scienceMarks, sanskritMarks) {
//     return mathMarks + scienceMarks + sanskritMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks){
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage : ${percentage}` );
//     return percentage
// }

// let percentage = calPercentage("Alok", 46, 56, 23)
// console.log(percentage);


// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Karan", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)


// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log(add(5, 7));
let add = function (num1, num2) {
    return num1 + num2
}


// arrow function

// syntax 1
let add = num1 =>  num1 + 4;

// syntax 2
let add = (num1 , num2) => num1 + num2;

// synatax 3
let add = (num1 , num2) => {
    // something
    // something
    return num1 + num2
};



console.log(add(5, 7));
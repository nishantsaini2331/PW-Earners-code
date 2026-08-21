let salary = 50000;
let experience = 4;

let bonus;

if(experience >= 10) {
    bonus = salary * 20 / 100;
} else if (experience >= 5) {
    bonus = salary * 10 / 100;
}else if (experience >= 2) {
    bonus = salary * 5 / 100;
} else {
    bonus = 0
}

let finalSalary = salary + bonus;

console.log("Original salary" , salary);
console.log("Bonus", bonus);
console.log("Final Salary" , finalSalary);
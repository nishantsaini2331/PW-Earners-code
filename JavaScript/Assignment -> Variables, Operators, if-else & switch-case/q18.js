let age = 60;

if(age < 0){
    console.log("Invalid age");
}else if(age <= 12) {
    console.log("Child");
}else if( age <= 19) {
    console.log("Teenager");
} else if ( age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}
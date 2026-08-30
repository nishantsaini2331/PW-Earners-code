

// function outter(){
//     let a = 5;
//     function inner(){
//         console.log(a);
//     }
//     a = 10;
//     return inner;
// }
// const response = outter();
// response();



function outter() {
    let count = 0;
    function counter() {
        count = count + 1;
        console.log(count);
    }

    return counter
}

const counter1 = outter();
const counter2 = outter();
counter1();
counter2();
counter2();
counter2();

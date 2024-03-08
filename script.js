let input = document.getElementById("inputBox");
let numbers = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");

let string = "";

console.log(input);
console.log(numbers);
console.log(operator);

numbers.forEach(button => {

    button.addEventListener("click",()=>{
        string += button.innerHTML;
        input.value = string;
    })
})

operator.forEach(button => {

    button.addEventListener("click",()=>{
        string += button.innerHTML;
        input.value = string;
    })
})

ac.addEventListener("click",()=>{
    string = "";
    input.value = string;
})

del.addEventListener("click",()=>{
    string = string.substring(0,string.length-1);
    input.value = string;
})

let Evaluate = () =>{
    string = eval(string);
    string = string.toFixed(2);
    string = string.toString();
    input.value = string;
};

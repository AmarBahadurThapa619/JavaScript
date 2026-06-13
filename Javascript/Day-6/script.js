//--------------------Function & Methods------------------------//

//-------Function------//

/*
Block of code that perform a specific task, can be invoked/call whenever needed.
Function Definition:
function functionName(){
    //do some work
}

Function Call/Invoke:

functionName();

*/

// function myFunction(){
//     console.log("Hello world");
//     console.log("JavaScript Practice");
// }

// myFunction();
// myFunction();


// Sum of two numbers

// function sum(a, b){ // Parameters-->Input
//     console.log(a + b); //30
// }

// sum(10, 20); //arguments

// function sum(a, b){ // function params-> like local variable which under this block of code or scope, dose not run outside this block 
//     total = a + b;
//     return total; // return only one value or variable
//     // After function is return then code after that return will not be executed.  
// }

// let val = sum(20, 20);
// console.log(val);


//------------Arrow Function--------------//

/*
Compact way of writing a function
syntax:
const functionName = (param1, param2...)=>{
    do some work    
}
*/

// sum function

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }
// arrowSum(10, 20);\

// const arrowSum = (a, b) => {
//     return a + b;
// }

// console.log(arrowSum(10, 10));

// Multiplication function

// const arrowmMulti = (a, b) => {
//     console.log(a * b);
// }

// arrowmMulti(5, 10);



// function vowels(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
//             char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//                 count++;
//             }
//     }
//     return count;
// }

// let totalCount = vowels("Hello World");
// console.log("Count =", totalCount);



//---------------------------ForEach loop in Array-----------------------//

/*
Only used for array

arr.forEach(callBackFunction)

CallBackFunction: Here, it is a function to execute for each element in the array.

A callback is a function passed as an argument to another function.

In callback function there is 3 parameter, which is optional: (value, index, array)

Higher order function/method:

*forEach

A Higher Order Function is a function that:

Takes another function as an argument, or
Returns a function as its result.

In JavaScript, functions are treated like values, so they can be passed around just like variables.
*/

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val)=>{
//     console.log(val);
// });

// let arr = ["Butwal", "Palpa", "Chitwan", "Pokhara", "Kathmandu"];

// arr.forEach((city, idx, arr)=>{
//     console.log(city, idx, arr);
// });


/*
For a given array of numbers, print the square of each value using the forEach loop
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach((val) =>{
//     console.log(val * val);
// });


//--------------------------Map Method-------------------------//

//Creates a new arrray with results of some oeration. The value its callback returns are used to form new array

//arr.map(callbackFnx(value, idx, arr))

// let arr = [10, 20, 30];

// let newArr = arr.map((val)=>{
//     return val * 2;
// });

// console.log(newArr);


//-------------------------Filter Method-------------------------//

//Creates a new array of elements that give for a cidition/filter
// To find even element
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenArr = num.filter((val)=>{
//     return val % 2 === 0;
// });

// console.log(evenArr);


// To find elemnt > 4

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let greaterNum = num.filter((val) =>{
//     return val > 4;
// });

// console.log(greaterNum);

//-------------------------Reduce Method----------------------------//

//Perform some operation & reduces the array to a single value. It returns that single value.


//To calculate sum of array
// let arr = [10, 20, 30, 40];

// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(output);

// To find largest number 
// let arr = [14, 18, 1, 2, 10];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

// const arr = [14, 18, 1, 2, 10];

// const initialValue = 0;

// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 
// initialValue
// );

// console.log(sum);

//Practice Question

// We are given array of marks of students. Filter out of the marks of students that scored 90+.

// const marks = [90, 91, 85, 95, 98, 100, 70, 75];

// const output = marks.filter((val) => {
//     return val > 90;
// });

// console.log(output);


// Take a number n as input from user. Create an array of number fro 1 to n
// use the reduce method to claculate sum of all numbers in the array.
// use the reduce method to calculate product(factorial of n(eg., factorial of 3 = 1*2*3))of all number in the array
// let n = prompt("Enter a Number: ");

// let arr = [];

// for(let i = 1; i <= n; i++){
//     arr.push(i);
// }

// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log("Sum =", sum);

// let factorial = arr.reduce((prev, curr) => {
//     return prev * curr;
// });

// console.log("Factorial =", factorial);
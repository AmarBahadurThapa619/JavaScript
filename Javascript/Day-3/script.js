//-----------Conditional Statement(To implement some condition in the code)-----------//

//--------------------------if statement---------------------------//

// let age = 18;

// if(age >= 18){
//     console.log("You can vote.");
// };

// if(age < 18){
//     console.log("You cannot vote.");
// };

// let mode = "white-mode";
// let color;

// if(mode === "dark-mode"){
//     color = "Black";
// };

// if(mode === "white-mode"){
//     color = "White";
// };

// console.log(color);

//-----------------------------if-else statement----------------------------//

// let age = 24;

// if(age >= 18){
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// };


// let mode = "dark-mode";

// if(mode === "dark-mode"){
//     console.log("Dark");
// } else {
//     console.log("White");
// };

//odd or even

// let num = 14;

// if(num % 2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// };

//-------------------------else-if statement(To check multiple conditions)---------------------------//

// let mode = "blue";
// let color;

// if(mode === "dark"){
//     color = "dark";    
// } else if (mode === "blue"){
//     color = "Blue";
// } else if (mode === "red"){
//     color = "Red";
// } else if (mode === "green"){
//     color = "Green";
// } else {
//     color = "White";
// };

// console.log(color);


//------------------------Ternary Operators--------------------------//
//works on three operand one is condition and two are output (T/F)
// condition?trueoutput:false output;

// let age = 24;

// console.log(`${age >= 18? "Adult" : "Not Adult"}`);

// alert("Hello")-->show pop up message in the browser one time
// promt("Hello")-->show pop up message in the browser and take user input

//-------Q1. Get user to input a number using prompt("Enter a number:")check if the number is a multiple of 5 or not.------//

// let userInput = prompt("Enter a number:");

// if(userInput % 5 === 0){
//     console.log(userInput, "is  a multiple of 5");
// } else {
//     console.log(userInput, "is Not a multiple of 5");
// };

/*-------Q2. Write a code which can gives grades to students according to their acores:
    1. 80-100, A
    2. 70-89, B
    3. 60-69, C
    4. 50-59, D
    5. 0-49, F
*/

// let score = prompt("Enter your score");
// let grade;

// if(score >= 80 && score <= 100){
//     grade = "A";    
// } else if (score >= 70 && score <= 79){
//     grade = "B";
// } else if (score >= 60 && score <= 69){
//     grade = "C";
// } else if (score >= 50 && score <= 59){
//     grade = "D";
// } else if (score >= 0 && score <=49){
//     grade = "F";
// };

// console.log("According to you score, your grade is: ", grade);
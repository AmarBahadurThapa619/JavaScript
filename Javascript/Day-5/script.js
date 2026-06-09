//-----------------Arrays---------------//
//An Array is a special object used to store multiple values in a single variable.

// let marks = [90, 85, 80, 70, 75, 65];
// console.log(marks);
// console.log(marks.length); //6

// let student = ["Ram", "Hari", "Shyam", "John"];
// console.log(student);
// console.log(typeof student); // object

//In JavaScript, an array is a type of object because arrays store data as key-value pairs internally.
// key:value in object like in array index:value

//-----------------Array indices-------------------//

//An array index is the position number of an element inside an array.
// Accessing Elements Using Index

// let marks = [90, 85, 80, 70, 75, 65];
// marks[2] = 95;
// console.log(marks)//90, 85, 95, 70, 75, 65
// console.log(marks[1]); //85
// console.log(marks[5]); //65
// console.log(marks[50]); //undefined

//----------------Looping over an array-------------------//

// let students = ["Ram", "Hari", "Shyam", "Gita", "Sita", "Spiderman", "Sanket", "Jasmine"];

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//for-of loop

// for(student of students){
//     console.log(student);
// }


// let countries = ["Nepal", "India", "China", "USA", "UAE", "Austrilia"];

// for(country of countries){
//     console.log(country);
// }


//Practice questions

/*Q1. For a given array with marks of students -> [90, 85, 80, 70, 75, 65]
Find the average marks of the entire class.
*/

// let marks = [90, 85, 80, 70, 75, 65];
// let sum = 0;

// for(let i = 0; i < marks.length; i++){
//     sum = sum + marks[i];  //sum += marks[i];
// }
// console.log(sum);

// for(let val of marks){
//     sum += val; //sum =  sum + val
// }
// console.log(sum);

// let average = sum / marks.length;
// console.log(`Average marks of the class is ${average}`);

/*
Q2. For a given array with prices of 5 items ->[330, 450, 660, 550, 950]
All items have an offer of 10% OFF on them. Change the array to store the final price
after applying offer
*/

// let items = [330, 450, 660, 550, 950];

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

// for-of loop

let items = [330, 450, 660, 550, 950];
let i = 0; // to track index, tracking index indirectly not a part of loop

for(let val of items){
    console.log(`value at indes ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++; // to track index
}
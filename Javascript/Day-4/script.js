//---------------loops and strings-----------------//
//----------------for loop----------------//

// for(let i = 1; i <= 5; i++){
//     console.log("Hello World");
// }

// Calculate sum of 10 to n numbers

// let num = 100;
// let sum = 0;

// for(let i = 1; i <= num; i++){
//     sum = sum + i;
// }
// console.log("Sum =", sum);

// for(var i = 1; i <= 5; i++){
//     console.log("i =", i);
// }
// console.log(i);


//---------------------While loop-------------------//

// let i = 1;

// while(i<=10){
//     console.log("i =", i);
//     i++;
// }

//-----------------do-while loop------------------//

// let i = 20;

// do{
//     console.log("Hello");
//     i++;
// } while(i <= 10); // loop will run one time

// let i = 1;

// do{
//     console.log("i =", i);
//     i++;
// } while(i<=5);

//-----------------for-of loop-----------------//

/*The for-of loop in JavaScript is used to iterate over
the values of iterable objects such as arrays, strings, maps, sets, etc.*/

// let name = "Spiderman";
// let size = 0;
// for(let val of name){
//     //iterator -> characters
//     console.log("val =", val);
//     size++;
// }
// console.log("String size =", size);

//-----------------for-in loop----------------//

/*The for...in loop in JavaScript is used to iterate
over the properties (keys) of an object*/

// let student = {
//     name: "Spiderman",
//     age: 20,
//     cgpa: 7.2,
//     isPass: true,
// };

// for(let key in student){
// console.log("key =", key, "Value =", student[key]);
// }

//Practice(Q1)-Print all even numbers from 0 to 100.

for(let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log(num, "is a even number");
    }
}
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

// for(let num = 0; num <= 100; num++){
//     if(num % 2 === 0){
//         console.log(num, "is a even number");
//     }
// }

/*Practice(Q2)-Create a game where you start with any random game number. Ask the user
 to keep guessing the game number until the user enters correct value */

// let gameNum = 66;
// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum){
//     userNum = prompt("You enetred the wrong number. Guess again : ");
// }

// console.log("Congratluations, you entered the right number");

//-----------String in Js-----------//

//String is a sequenceof characters used to represent text

// To create string

// let str = "Hello";
// let str = 'Hello';

// To access string length (str.length)
// string inbulit properties

// let str = "Spiderman"; 
// console.log(str.length); //9

// To access string with indices or index (str[0], str[1])

// index-->Singular form
// indices--> Plural form

// let str = "Spiderman";
// console.log(str[5]); //r

//--------------Template literals in JS-----------------//
//special string
/* A way to have embedded expressions in strings
    `this is a template literals`
    written inside back tig ``

String Interpolation

To create strings by doing substitution of placeholders
    `string text ${epressions} string text`
*/
 
// let str = `This is a template literals`;
// console.log(str);
// console.log(typeof str);

// let obj = {
//     item: "Dell laptop",
//     price: 45000,
// }

// console.log("The cost of", obj.item, "is Rs.", obj.price); //normal way 

// let output = `The cost of ${obj.item} is Rs. ${obj.price}`; //Templete literals 
// console.log(output);

//String Interpolation

// let str = `This is a template ${5+10+20} literals`;
// console.log(str);

/*
Escape character(\n)
used in big output
/n-->for new line
/t-->for tab space
*/

//Escape character(/n)

// console.log("Lorem ipsum dolor sit amet\nconsectetur adipisicing elit");
// console.log("Lorem ipsum dolor sit amet\tconsectetur adipisicing elit");

// let str = "Spider\tman";  // \t is count as single character  not double character(like \->1, t->2)
// console.log(str.length); //10

//---------------String Method in JS (also called string function)---------------//

/*
These are built-in functions to manipulate a string
1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim() //removes whitespaces
4. str.slice(start, end?)--> returns part of string
5. str1.concat(str2)//joins str2 with str1
6. str.replace(searchVal, newVal)
7. str.charAt(idx)
*/

//----------------------str.toUpperCase()-------------------------//

// let str = "spiderman";
// str.toUpperCase(); // MEthod doesnot change the original string. Method always retrun new value
// console.log(str);


// let str = "spiderman";
// let newStr = str.toUpperCase();
// console.log(str); //spiderman
// console.log(newStr); //SPIDERMAN

// let str = "spiderman";
// str = str.toUpperCase();
// console.log(str);

//Strings are immutable in JS

//---------------------str.toLowerCase()-------------------//

// let str = "SPIDERMAN";
// str = str.toLowerCase();
// console.log(str);

//------------------------str.trim() //removes whitespaces(starting and ending)-------------------//

// let str = "    spiderman   ";
// console.log(str.trim());

//--------------------str.slice(start, end?)--> returns part of string------------------//

// let str = "012345678";
// console.log(str.slice(1,5)); //1234

// let str = "Hello";
// console.log(str.slice(1)); //ello
// console.log(str.slice()); //Hello // we must neet provide at least start index

//------------------str1.concat(str2)//joins str2 with str1----------------//

// let str1 = "spider";
// let str2 = "man";

// let result = str2.concat(str1);
// let result = str1.concat(str2);
// let result = str1 + str1; // generally used fro concat
// console.log(result);


//------------------str.replace(searchVal, newVal)-------------------//

//replace to saerch some values

// let str = "hello";

// console.log(str.replace("h", "m")); //replace one time when our search value is match
// console.log(str.replace("lo", "p"));

// let str = "hellololo";

// console.log(str.replaceAll("lo", "p")); //replaceAll replace all matching values


//---------------------str.charAt(idx)------------------------//

// let str = "hello";
// str = str.replace("lo", "p"); 
// // console.log(str.charAt(1)); //e
// console.log(str); //hmllo

/*Prompt the user to enter their full name. Generate a username for them
based on the input. Start username with @, followed by their full name and ending with
fullname length

eg: user name = "spiderman", username should be "@spiderman9
*/

// let fullName = prompt("Enter your full name without space");
// let userName = "@".concat(fullName) + fullName.length;
// let userName = "@"+ fullName + fullName.length;
// console.log(userName);
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

// let items = [330, 450, 660, 550, 950];
// let i = 0; // to track index, tracking index indirectly not a part of loop

// for(let val of items){
//     console.log(`value at indes ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++; // to track index
// }


//----------------Array Methods--------------//

//---------push(): add to end----------//

// let students = ["Ram", "Hari", "Shyam", "John"];
// console.log(students);
// students.push("Roman","Gita", "Sita");
// console.log(students);

// let marks = [90, 85, 80, 70, 75, 65];
// console.log(marks);
// marks.push(88, 89, 90);
// console.log(marks);

//--------pop(): delete from end & return--------//

// let students = ["Ram", "Hari", "Shyam", "John"];
// console.log(students);

// let deleted = students.pop();
// console.log(students)

// console.log("Deleted student is:", deleted);

// let marks = [90, 85, 80, 70, 75, 65];
// console.log(marks);

// let poppedValue = marks.pop();
// console.log(marks);

// console.log("Deleted mark is:", poppedValue);

// let marks = [90, 85, 80, 70, 75, 65];
// console.log(marks);

// let poppedValue = marks.splice(1, 1);
// console.log(poppedValue);

//-----------toString(): converts array to string--------------//

//deos not change original array, return on new string.

// let students = ["Ram", "Hari", "Shyam", "John"];
// console.log(students.toString());

// let marks = [90, 85, 80, 70, 75, 65];
// console.log(marks.toString());


//------------concat(): joins multiple arrays and return result-----------//

// does not change original array return a new array

// let students = ["Ram", "Hari", "Shyam", "John"];
// let marks = [80, 85, 75, 68];
// let course = ["BCA", "BBA", "BBS", "BCA"]
// let studentMarks = students.concat(marks, course);

// console.log(studentMarks);


// let fruits = ["Orange", "Papaya", "kiwi", "Mango"];
// let price = [150, 100, 140, 180];
// let vitamin = ["Vitamin C", "Vitamin A", "Vitamin C", "Vitamin A"];

// let fruitsDetail = fruits.concat(vitamin, price);

// console.log(fruitsDetail);


//---------------unshift(): add to start------------------//

// It changes the original array
// work like a push or equivalent to push
// let fruits = ["Orange", "Papaya", "kiwi", "Mango"];

// let result = fruits.unshift("Apple");
// console.log(result);

//---------------shift(): delete from start & return----------------//

// It changes the original array
// work like a pop or equivalent to pop

// let fruits = ["Orange", "Papaya", "kiwi", "Mango"];
// console.log(fruits);

// let shiftedFruit = fruits.shift();
// console.log("shifted fruit is:", shiftedFruit);


//------------slice(): returns a piece of the array-----//

// does not change the original array, return new array
// we can used to make a copy of array

// slice(startidx, endidx)
// let fruits = ["Orange", "Papaya", "kiwi", "Mango", "Apple"];
// console.log(fruits);

// console.log(fruits.slice(1,3)); //Papaya, kiwi
// console.log(fruits.slice(2,4)); //Kiwi, Mango

// console.log(fruits.slice()); //to make a copy of array


//------------splice(): change original array(add, remove, replace)--------------//

//splice(startidx, delcount, newEl1,...) //delcount-delete item count

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let deletedItem = array.splice(1, 3, 101, 102, 103);

// console.log("New Array:", array); //[1, 101, 102, 103, 5, 6, 7, 8]
// console.log("Deleted Item:", deletedItem); // 2, 3, 4

/*
startIndex = 1 → start from element 2
deleteCount = 3 → remove 2, 3, 4
101, 102, 103 → insert these elements at index 1
*/


// To add element

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let addedItem = array.splice(2, 0, 103);

// console.log("New Array:", array);


/*
Start at index 2 (before 3)
Delete 0 elements
Insert 103

Important: splice() always returns the removed elements, 
not the inserted elements. If nothing is removed, it returns [].
*/

// To replace element

// let array = [1, 2, 3, 4, 5];

// let removed = array.splice(2, 1, 103);

// console.log(array);   // [1, 2, 103, 4, 5]
// console.log(removed); // [3]

/*
2 → index of 3
1 → remove 1 element
103 → insert 103 at the same position

Original array is modified to [1, 2, 103, 4, 5]
splice() returns the removed element(s): [3]
*/


// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// array.splice(4);
// console.log(array);

/*
4 is the starting index.
Since deleteCount is not provided,
splice() removes all elements from index 4 to the end. 5, 6, 7, 8
*/

// Practice Questions

/*Q1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google",
"IBM", "Netflix"

a. Remove the first company from the array 

b. Remove Uber & Add Ola in its place

c. Add Amazon at the end

*/

//--------------Remove the first company from the array--------------------//

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let removed = companies.shift();
// console.log("Removed Company:", removed); //Bloomberg
// console.log(companies); //['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

//---------------Remove Uber & Add Ola in its place-----------------//

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let removed = companies.splice(2,1,"Ola");

// console.log("Removed Company:", removed); //Uber
// console.log("Added Company:", companies); //Ola

//------------------Add Amazon at the end------------------//

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.push("Amazon");

// console.log("Updated Array:", companies);
// console.log("Updated Array:", companies.toString());
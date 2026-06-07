// console.log("Hello World!");
// console.log("Amar Thapa");
// console.log("Javascript");

//-----------------Variables in JS--------------------//

// let, const and var

// let a = 10;
// a = 20;
// a = 30;
// console.log(a);

// const a = 20;
// a = 25;
// console.log(a); 

// var a = 10;
// var a = 25;
// var a = 30;
// console.log(a);

//-----------------Data types in JS------------------//
//Primitive Data Type (Number, String, Boolean, Undefined, Null, BigInt, Symbol)
// Non-Primitive Data Type (Objects(Array, Function))

//------------Primitive------------// 

// const age = 25;
// console.log(typeof age); //number

// const fullName = "Ram";
// console.log(typeof fullName); // string

// const isPass = true;
// console.log(typeof isPass); // boolean

// let a;
// console.log(typeof a); // undefined

// let x = null;
// console.log(typeof null); // object but it is null

// const num = BigInt("789");
// console.log(num); // 789n
// console.log(typeof num); //bigint

// const mysymbol = Symbol("Hello!");
// console.log(mysymbol); // Symbol(Hello!)
// console.log(typeof mysymbol); // symbol

//---------------Non-Primitive--------------//

// const student = {
//     name:"Ram",
//     age: 25,
//     marks: 2.87,
// };

// console.log(student["name"]);
// console.log(student.name);

// student["name"] = student["name"] + " Thapa";
// console.log(student.name);

// const product = {
//     title: "Parker Jotter Standard CT Ball Pen (Black)",
//     rating: 4.5,
//     isDeal: true,
//     price: 270,
//     offer: 5,
// };

// console.log(product);
// console.log(typeof product.isDeal);

// const profile = {
//     username: "ram678",
//     isFollow: true,
//     posts: 15,
//     followers: 1256,
//     following: 125,
//     details: "I am Ram",
// };

// console.log(profile);
// console.log(typeof profile["username"]);
// console.log(typeof profile.posts);
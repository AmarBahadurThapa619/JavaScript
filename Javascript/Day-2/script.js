// Comment is a part of code wich is not executed.
// This code prints a Hello World! (Single line comment).

/* This code prints a Hello World!
in our console (Multi-line comment) */

// console.log("Hello World!");

//---------Arithmetic Operators (+, -, *. /)---------//

// let a = 10;
// let b = 5;

// console.log("a =", a, " & b =", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);     // Modulus(%)
// console.log("a ** b = ", a ** b);   // a ** b = a^b (Exponentiation)


//------Unary Operator(Increment and Decrement)-------//

// let a = 10;
// let b = 5;

// console.log("a =", a, " & b =", b);
// a = a + 1;
// a++;
// console.log("a = ", a); // 11

// a = a - 1;
// a--;
// console.log("a = ", a); // 9

// console.log("a++ = ", a++); // 10    (Post Increment)
// console.log("a = ", a); // 11

// console.log("a-- = ", a--); // 10    (Post Decrement)
// console.log("a = ", a); // 9

// console.log("++a = ", ++a); // 11   (Pre Incerment)
// console.log("a = ", a); // 11

// console.log("--a = ", --a); // 9 (Pre Decrement)
// console.log("a = ", a); // 9


//------Assignment Operators(=, +=, -=, *=, /=, **=, %=)------//

// let a = 10;
// let b = 5;

// a += 6; // a = a + 6 
// console.log("a = ", a); //16

// a -= 6; // a = a - 6
// console.log("a = ", a);

// a *= 6; // a = a * 6
// console.log("a = ", a); //60

// a /= 6; // a = a / 6
// console.log("a = ", a); //1.67

// a **= 6; // a = a ** 6
// console.log("a = ", a); //1000000

// a %= 6; // a = a % 6
// console.log("a = ", a); //4


//------Comparison Operators--------//

// let a = 10;
// let b = "10";

// console.log("a == b", a == b); //true (Equal to ==)
// console.log("a != b", a != b); //false (Not Equal to ==)

// console.log("a == b", a == b); //true (If there is number in string Js implicitly change string into numbers and then compare)


// let a = 10;
// let b = "10";

// console.log("a === b", a === b); //false (Equal to & type ===) Strict version
// console.log("a !== b", a !== b); //true (Not Equal to & type ===) Strict version

//--------(>, >=, <, <=)-------//

// let a = 10;
// let b = 5;

// console.log("a > b = ", a > b); //true
// console.log("a >= b = ", a >= b); //true
// console.log("a < b = ", a < b); //false 
// console.log("a <= b = ", a <= b); //false

//-----Logical Operator()----//

// let a = 10;
// let b = 5;

// let cond1 = a < b; //false 
// let cond2 = a === 10; //true

//---logical AND(&&)---//
// Two given condition must be true ge true result otherwise gives false result.

// console.log("cond1 && cond2 = ", cond1 && cond2);

//---logical OR(||)---(||)<----Pipe//
// If one condition is true it give true result otherwise gives false.

// console.log("cond1 || cond2 = ", cond1 || cond2);

//---Logical NOT (!)---//
/* It gives result opposite if the condition is true it gives false result and 
if the condition is false it gives true result */

// console.log("!(a > b) = ", !(a > b)); //result is true but it give false.
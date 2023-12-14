/* EXERCISE 1.
 List and describe the main datatypes in JavaScript. Try to explain them as if you wanted a child to understand them.

 1. Numbers:Imagine you have some apples. Numbers in JavaScript are like counting how many apples you have. 
 2. Strings: Strings are like a string of colorful beads with letters on them. Each bead is a letter, and when you put them together, you can create words or sentences.
 3. Booleans: Booleans are like little decision-makers. They can be either true or false.
 4. Arrays:Arrays are like a special box where you can keep many things. Each thing in the box has a number, and you can ask for a specific thing using its number.
 5. Objects :Objects are like magical bags that can hold different things. Each thing in the bag has a name, and you can ask for it by its name.
 6. Undefined:is like having an empty box. If you ask, "What's inside this box?" and there's nothing there, that's undefined. It means there's no value assigned yet.
 7. Null: is like having a box, but this time, it's intentionally empty. It's not undefined; it's a box, and you know it's supposed to be empty.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2.
 Create a variable called "name" and assign your name to it, in the form of a string.
*/

/* let name = "Aqeel"; */

/* EXERCISE 3.
 Write the code needed to perform an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE 

let num1 = 12;
let num2 = 20;
let totalNumber= num1+num2;
console.log(totalNumber);

Or
let result = 12+20;
console.log("The sum of 12 and 20 is :" +  result);
*/

/* EXERCISE 4.
 Create a variable named "x" and assign the number 12 to it.
*/

/* WRITE YOUR ANSWER HERE 

let x = 12;
console.log(x);
*/

/* EXERCISE 5
  Reassign a new value to the existing variable "name": your last name.
  Demonstrate the impossibility of reassigning a value to a variable declared with the const construct.
*/

/* WRITE YOUR ANSWER HERE 
const name ="Zakir";

*/

/* EXERCISE 6.
 Perform a subtraction between the numbers 4 and the variable "x" you just declared (which contains the number 12).
*/

/* WRITE YOUR ANSWER HERE 
let result = 4-x;
console.log("Result is :" + result);

*/

/* EXERCISE 7.
 Create two variables, "name1" and "name2". Assign to name1 the string "john," and assign to name2 the string "John" (with a capital J!).
 Verify that name1 is different from name2 (hint: this is the same as verifying that their equality is false).
 EXTRA: check that their equality becomes true if both are transformed to lowercase (without changing the value of name2!).
*/

/* WRITE YOUR ANSWER HERE 
let  name1 = "john";
let name2 = "John";
 
let areDifferent = name1 !== name2;
console.log("Are name1 and name2 different?" + areDifferent);

let areEqualAfterLowercase = name1.toLowerCase()== name2.toLowerCase();
console.log("Are name1 and name2 equal after transforming to lowercase?" + areEqualAfterLowercase);  
}

*/


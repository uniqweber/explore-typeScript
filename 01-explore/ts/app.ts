// 01 this is string type
let playerName: string = "hello";

// 02 this is number type
let age: number = 32;

// 03 this is boolean
let isWorking: boolean = true;

// 04 this is array of some type
let skills: string[] = ["html", "css", "js"];

// 05 this is object type
let person: { name: string; age: number } = { name: "hello", age: 32 };

/* 06 if we need multiple type then we can use union type
this is union type in variable of string and number that we can only assign this two type of data in this variable */
let ageOrName: string | number = 32;
ageOrName = "hello";

/* 07 if wee need multiple data type of arr then we declare like this
here we can add any type of data in this array first we have to give parenthesis then we can add multiple type of data in this array then we have to add union symbol then we can add multiple type of data in this array then we have to close parenthesis after that we declare a empty array like this let arr: (string | number | {})[] = [] */
let arr: (string | number | {})[] = ["hello", "world", 32, 45, 23, 12, {}];

/* 08 Dynamic type in typescript: 
if we need any type of data then we can use any keyword like shown below. but we must must don't approach this way. if we do this way there is no type checking here. so ultimately no use of typescript. so we have ensure checking type in every variable. */
let data: any = "hello";
data = 32;
data = true;
data = {};
data = [];

/* 09 Function type
 * to declare function type a not defined variable we have to declare like this: let myFunction:Function;
 * after this declaration we can assign any function in this variable. but without function we can't assign any type of data type of something. this is the beaut of typescript.
 */

let myFunction: Function;
myFunction = () => {
   //    console.log("hello");
};

// 10 parameter type in function
let myFunction2 = (name: string, age: number, boolean?: boolean): void => {
   //    console.log(name, age);
};

// 11 Type Alias : we have to declare a type alias like this
type myType = string | number | boolean;
type myArr = (string | number | boolean)[];
let myVariable: myType = "hello";
let myVariable2: myType = 32;
let myVariable3: myType = true;
let arr4: myArr = ["hello", 12, true];


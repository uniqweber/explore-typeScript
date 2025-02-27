"use strict";
// 01 this is string type
let playerName = "hello";
// 02 this is number type
let age = 32;
// 03 this is boolean
let isWorking = true;
// 04 this is array of some type
let skills = ["html", "css", "js"];
// 05 this is object type
let person = { name: "hello", age: 32 };
/* 06 if we need multiple type then we can use union type
this is union type in variable of string and number that we can only assign this two type of data in this variable */
let ageOrName = 32;
ageOrName = "hello";
/* 07 if wee need multiple data type of arr then we declare like this
here we can add any type of data in this array first we have to give parenthesis then we can add multiple type of data in this array then we have to add union symbol then we can add multiple type of data in this array then we have to close parenthesis after that we declare a empty array like this let arr: (string | number | {})[] = [] */
let arr = ["hello", "world", 32, 45, 23, 12, {}];
/* 08 Dynamic type in typescript:
if we need any type of data then we can use any keyword like shown below. but we must must don't approach this way. if we do this way there is no type checking here. so ultimately no use of typescript. so we have ensure checking type in every variable. */
let data = "hello";
data = 32;
data = true;
data = {};
data = [];
/* 09 Function type
 * to declare function type a not defined variable we have to declare like this: let myFunction:Function;
 * after this declaration we can assign any function in this variable. but without function we can't assign any type of data type of something. this is the beaut of typescript.
 */
let myFunction;
myFunction = () => {
    //    console.log("hello");
};
// 10 parameter type in function
let myFunction2 = (name, age, boolean) => {
    //    console.log(name, age);
};
let myVariable = "hello";
let myVariable2 = 32;
let myVariable3 = true;
let arr4 = ["hello", 12, true];
let myFunction3 = (name, age) => {
    //    console.log(name, age);
};
// 13 Optional parameter: we have to declare a optional parameter like this
let myFunction4 = (name, age) => {
    //    console.log(name, age);
};
// 14 Rest parameter: we have to declare a rest parameter like this
let myFunction5 = (...name) => {
    //    console.log(name);
};
let myVariable5 = { name: "hello", age: 32 };
// 16 class: we have to declare a class like this
class myClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let myVariable6 = new myClass("hello", 32);
// 17 generics: we have to declare a generics like this
function myFunction6(name) {
    return name;
}
myFunction6("hello");
// 18 enum: we have to declare a enum like this
var myEnum;
(function (myEnum) {
    myEnum[myEnum["one"] = 1] = "one";
    myEnum[myEnum["two"] = 2] = "two";
    myEnum[myEnum["three"] = 3] = "three";
    myEnum[myEnum["four"] = 4] = "four";
    myEnum[myEnum["five"] = 5] = "five";
    myEnum[myEnum["six"] = 6] = "six";
    myEnum[myEnum["seven"] = 7] = "seven";
    myEnum[myEnum["eight"] = 8] = "eight";
    myEnum[myEnum["nine"] = 9] = "nine";
    myEnum[myEnum["ten"] = 10] = "ten";
})(myEnum || (myEnum = {}));
console.log(myEnum.one);
console.log(myEnum.two);
console.log(myEnum.three);
console.log(myEnum.four);
console.log(myEnum.five);
console.log(myEnum.six);
console.log(myEnum.seven);
console.log(myEnum.eight);
console.log(myEnum.nine);
console.log(myEnum.ten);

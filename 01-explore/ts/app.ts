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

// 12 function signature: we have to declare a function signature like this
type myFunctionSignature = (name: string, age: number) => void; // if we this not return something then is void type or if we return any type then it will be any data type. like number string
let myFunction3: myFunctionSignature = (name, age) => {
   //    console.log(name, age);
};

// 13 Optional parameter: we have to declare a optional parameter like this
let myFunction4 = (name: string, age?: number) => {
   //    console.log(name, age);
};

// 14 Rest parameter: we have to declare a rest parameter like this
let myFunction5 = (...name: string[]) => {
   //    console.log(name);
};

// 15 interface: we have to declare a interface like this
interface myInterface {
   name: string;
   age: number;
}
let myVariable5: myInterface = { name: "hello", age: 32 };

// 16 class: we have to declare a class like this
class myClass {
   name: string;
   age: number;
   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
}
let myVariable6 = new myClass("hello", 32);

// 17 generics: we have to declare a generics like this
function myFunction6<T>(name: T): T {
   return name;
}

myFunction6<string>("hello");

// 18 enum: we have to declare a enum like this
enum myEnum {
   one = 1,
   two = 2,
   three = 3,
   four = 4,
   five = 5,
   six = 6,
   seven = 7,
   eight = 8,
   nine = 9,
   ten = 10,
}

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

// 19 tuple: we have to declare a tuple like this
let myTuple: [string, number, boolean] = ["hello", 32, true];

// 20 never: we have to declare a never like this
let myFunction7 = (): never => {
   throw new Error("hello");
};

// 21 unknown: we have to declare a unknown like this 
let myVariable7: unknown = "hello";
myVariable7 = 32;
myVariable7 = true;
myVariable7 = {};

// 22 any: we have to declare a any like this
let myVariable8: any = "hello";
myVariable8 = 32;
myVariable8 = true;
myVariable8 = {};
myVariable8 = [];

// 23 void: we have to declare a void like this
let myFunction8 = (): void => {
   //    console.log("hello");
};

// 24 null: we have to declare a null like this
let myVariable9: null = null;

// 25 undefined: we have to declare a undefined like this
let myVariable10: undefined = undefined;        

//  type assertion: we have to declare a type assertion like this 
let myVariable11: any = "hello";
let myVariable12 = myVariable11 as string;
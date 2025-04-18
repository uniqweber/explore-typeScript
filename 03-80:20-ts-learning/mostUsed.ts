// type define
const names: string = "hello";
const age: number = 12;
const isActive: boolean = false;

// type interface - typescript will it's own what is the type
let message = "hello";

// function params and return params types
const greet = (name: string): string => {
  return `Hello ${name}`;
};

// define object type

type User = {
  id: number;
  username: string;
  isAdmin?: boolean;
};

const user: User = {
  id: 1,
  username: "john",
};

// define array and types
const numbers: number[] = [1, 2, 3, 4];
const users: User[] = [user];

// union types - means the value type can be multiple datatypes with define types
const currentStatus: "loading" | "error" | "success" = "loading";
const idOrNumber: number | string = 123;

// type guards - type narrowing
function printId(id: number | string) {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id.toFixed(2));
}

// interface
interface Product {
  id: number;
  name: string;
  price: number;
}

const phone: Product = {
  id: 1,
  name: "IPhone",
  price: 1200,
};

// generic types
function identity<T>(value: T): T {
  return value;
}
identity<string>("hello");
identity<number>(122);

// Enums
/* enum Role {
  // x TypeScript enum is not supported in strip-only mode
  Admin,
  User,
  Guest,
}
const myRole: Role = Role.Admin; */

//  type assertion 

let value:any = "hello";
let ByLength: number = (value as string).length
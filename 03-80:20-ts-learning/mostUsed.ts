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


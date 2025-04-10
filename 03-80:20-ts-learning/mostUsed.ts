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
};

const user: User = {
  id: 1,
  username: "john",
};

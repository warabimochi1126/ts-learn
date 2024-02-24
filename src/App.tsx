import React, { memo } from "react";
import logo from "./logo.svg";
import "./App.css";

const name = "hello";

let username = "Hello";
let dummyNum = 2;
let bool = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

let array3: (number | string)[] = [0, 1, 2];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

let userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy"
}

// Union Types
let value: boolean | number;
value = true;
value =  10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

// Literal Type
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 512;

// typeof
let msg: string = "Hi";  
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
}

let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 0,
  OSType: OS.Windows
}

const PC2: PC = {
  id: 1,
  OSType: OS.Mac
}




function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;

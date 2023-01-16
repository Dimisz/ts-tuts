const apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothing: null = null;

let colors: string[] = ['red', 'green', 'blue'];

// classes
class Car{}
let car: Car = new Car();

// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// when to use annotations
// 1) function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number}= JSON.parse(json);
console.log(coordinates);
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;

//build ins
let now: Date = new Date();

//Array
// let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

//classes
class Car {}
let car: Car = new Car();

//object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1 Function that returns the 'any' type

const json = '{"x": 10, "y": 2}';
const coor: { x: number; y: number } = JSON.parse(json);

//2 when we declare a variable on one line and initialize it latter
//exapmle changed to work testsing
let colors = [{ color: 'red' }, { color: 'green' }, { color: 'blue' }];

const search = () => {
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].color === 'green') {
      console.log(colors[i]);
    }
  }
};
search();

//3 when we want a variable that type cannot be inferred correctly

let number = [-10, -1, 2];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < number.length; i++) {
  numberAboveZero = number[i];
}

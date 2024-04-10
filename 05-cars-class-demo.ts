import { Car } from "./car-class";

// define 2 cars
let jetta: Car = new Car("Volkswagen", "Jetta", 2022);
let buggati: Car = new Car("Bugatti", "Veyron", 2024);

// put them into an array of cars
let cars: Car[] = [jetta, buggati];

// print the cars
// console.log(jetta.details());
// console.log(`car make: ${jetta.make}`);

console.log("Indexed for...");
// indexed for
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index].details());
}

console.log("For each...");
// for each
for (let car of cars) {
  console.log(car.details());
}

console.log("foreach=>");
// foreach =>
cars.forEach((c) => {
  console.log(c.details());
});

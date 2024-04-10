let movie = {
  id: 1,
  title: "Star Wars",
  rating: "PG",
  year: 1976,
  director: "George Lucas",
};

console.log(movie);

// arrays
let numbers: number[] = [];
numbers[0] = 2;
numbers[1] = 5;
console.log(numbers);

let sevenDwarves: string[] = ['bashful', 'dopey', 'lazy', 'doc', 'happy', 'sleepy', 'sneezy'];
console.log(sevenDwarves);

let names: string[] = [];
names.push("Dave");
names.push("Stan");
names.push("Abbie");
console.log(names);
names.sort();
console.log(names);

enum Color {Red, Blue = 5, Green};
console.log(Color);
let c: Color = Color.Blue;

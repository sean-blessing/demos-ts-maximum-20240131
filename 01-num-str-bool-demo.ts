// define some numbers, strings and booleans
let monthNumber: number = 11;
let interestRate: number = 0.0975;
let price: number = 18549;
let salesTax: number = 0.078;

// define some strings
let firstName: string = "George";
let lastName: string = "McFly";

// define some booleans
let isReviewer: boolean = true;
let isAdmin: boolean = false;

// interpolation
let message: string = `the value of monthNumber
is ${monthNumber}`;
console.log(message);
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
console.log(isReviewer == true);
console.log(isReviewer===true);


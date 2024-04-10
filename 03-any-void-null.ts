let a: any = 123; // defined as number
a = "123"; //allowed to change types

let b: number = 456; // typed a number
//b = "456";              // can't change to string

// void type

function print(): void {
  console.log("in print() function");
}

print();

// nulls
// save this for classes

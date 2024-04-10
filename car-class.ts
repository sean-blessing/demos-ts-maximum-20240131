export class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string = "", model: string = "", year: number = 9999) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  details(): string {
    return `Car details: ${this.make}, ${this.model}, ${this.year}`;
  }
}

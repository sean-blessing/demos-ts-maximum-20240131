// undefined
let xyz;

console.log(typeof(xyz));

// let and block scope

function doSomething(): void {
    if (true) {
        var b = 0;
        let c = 1;
    }
    console.log(b);
    console.log(c);
}
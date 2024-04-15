/*
This function calculates the greatest common divisor of two numbers.

Nicole Dávila Hernández
A01784217
*/

function calculateGCD(a, b) {
    while (b !== 0) {
        let aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}

console.log("ejercicio 5")

// test cases

console.log("test case 1 (3, 12): ", calculateGCD(6, 12)); 
console.log("test case 1 (21, 56): ", calculateGCD(21, 56)); 
console.log("test case 1 (64, 128): ", calculateGCD(8, 128)); 
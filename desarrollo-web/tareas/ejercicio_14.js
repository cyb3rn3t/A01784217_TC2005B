/*
This function checks if a number is a power of two.

Nicole Dávila Hernández
A01784217
*/

function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }
    while (number % 2 === 0) {
        number /= 2;
    }
    return number === 1;
}

console.log("ejercicio 14")

// test cases

console.log("test case 1 (4): ", isPowerOfTwo(4)); 
console.log("test case 2 (16): ", isPowerOfTwo(16)); 
console.log("test case 3 (255): ", isPowerOfTwo(255)); 
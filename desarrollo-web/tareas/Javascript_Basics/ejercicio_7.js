/*
This function finds the factors of a number.

Nicole Dávila Hernández
A01784217
*/

function factorize(number) {
    let factors = [];
    
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log("ejercicio 7")

// test cases

console.log("test case 1 (36): ", factorize(36)); 
console.log("test case 2 (28): ", factorize(28)); 
console.log("test case 3 (11): ", factorize(11));
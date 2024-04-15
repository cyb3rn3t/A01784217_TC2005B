/*
This function sorts an array of numbers in descending order.

Nicole Dávila Hernández
A01784217
*/

function sortDescending(numbers) {
    // using bubble sort 
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] < numbers[j + 1]) {
                // swap elements
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}

console.log("ejercicio 15")

// test cases

const numbers1 = [5, 2, 9, 1, 7];
console.log("test case 1 [5, 2, 9, 1, 7]: ", sortDescending(numbers1)); 

const numbers2 = [10, 4, 8, 3, 6];
console.log("test case 2 [10, 4, 8, 3, 6]: ", sortDescending(numbers2)); 

const numbers3 = [1, 2, 3, 4, 5];
console.log("test case 3 [1, 2, 3, 4, 5]: ", sortDescending(numbers3)); 
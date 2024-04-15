/*
This function calculates the median and mode of an array of numbers.

Nicole Dávila Hernández
A01784217
*/

function medianAndMode(numbers) {
    // calculates the median first
    const sortedNumbers = numbers.sort((a, b) => a - b); // sorts the numbers in ascending order
    const middleIndex = Math.floor(sortedNumbers.length / 2); // calculates the middle index
    let median;
    if (sortedNumbers.length % 2 === 0) { // checks if the length of the array is even
        median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2; // calculates the average of the two middle numbers
    } else {
        median = sortedNumbers[middleIndex]; // takes the middle number
    }

    // calculates the mode
    const numCounter = {};
    let mode = [];
    let maxCount = 0;
    for (const number of numbers) { // counts the occurrences of each number
        numCounter[number] = (numCounter[number] || 0) + 1; // increments the count of the number
        if (numCounter[number] > maxCount) { // checks if the count is greater than the current max count
            mode = [number]; 
            maxCount = numCounter[number]; // updates max count
        } else if (numCounter[number] === maxCount) { 
            mode.push(number);
        }
    }
    return { median, mode };
}

console.log("ejercicio 12");

// test cases

const numbers1 = [1, 2, 3, 4, 5];
console.log("test case 1 [1, 2, 3, 4, 5]: ", medianAndMode(numbers1));

const numbers2 = [2, 4, 6, 8, 10];
console.log("test case 2 [2, 4, 6, 8, 10]: ", medianAndMode(numbers2));

const numbers3 = [3, 3, 3, 4, 4, 5, 5, 5];
console.log("test case 3 [3, 3, 3, 4, 4, 5, 5, 5]: ", medianAndMode(numbers3));
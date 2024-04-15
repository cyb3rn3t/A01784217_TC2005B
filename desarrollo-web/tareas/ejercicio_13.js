/*
This function finds the most frequent string in an array of strings.

Nicole Dávila Hernández
A01784217
*/

function findFrequent(words) {
    let frequencyMap = new Map();
    
    // count the frequency of each string
    for (let str of words) {
        if (frequencyMap.has(str)) {
            frequencyMap.set(str, frequencyMap.get(str) + 1); // increment the frequency
        } else {
            frequencyMap.set(str, 1);
        }
    }
    
    let mostFrequentString = ''; // stores the most frequent string
    let maxFrequency = 0; // and stores the maximum frequency
    
    // find the most frequent string
    for (let [str, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            mostFrequentString = str;
            maxFrequency = frequency;
        }
    }
    
    return mostFrequentString;
}

console.log("ejercicio 13")

// test cases

const words1 = ['unity', 'blender', 'unity', 'vscode', 'unity'];
console.log("test case 1 'unity', 'blender', 'unity', 'vscode', 'unity': ", findFrequent(words1)); 

const words2 = ['cat', 'dog', 'dog', 'cat', 'cat', 'duck'];
console.log("test case 2 'cat', 'dog', 'dog', 'cat', 'cat', 'duck': ", findFrequent(words2));

const words3 = ['red', 'blue', 'green', 'red', 'red', 'green', 'blue'];
console.log("test case 3 'red', 'blue', 'green', 'red', 'red', 'green', 'blue': ", findFrequent(words3)); 
/*
This function finds the first non-repeating character in a string.

Nicole Dávila Hernández
A01784217
*/

function findNoRepeat(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) { // checks if the first and last index of the character are the same
            return char;
        }
    }
    return null; // if no non-repeating character found
}

console.log("ejercicio 1")

// test cases

console.log("test case 1 'abacddbec': ", findNoRepeat('abacddbec')); // from the exercise
console.log("test case 2 'hello': ", findNoRepeat('hello')); 
console.log("test case 3 'parangaricutirimicuaro': ", findNoRepeat('parangaricutirimicuaro')); 
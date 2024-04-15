/*
This function removes duplicates from an array.

Nicole Dávila Hernández
A01784217
*/

function removeDupes(array) {
    let noDupesArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!noDupesArr.includes(array[i])) { // checks if the element is already in the array
            noDupesArr.push(array[i]);
        }
    }
    return noDupesArr;
}

console.log("ejercicio 8")

// test cases

const array1 = [1, 0, 1, 1, 0, 0];
console.log("test case 1 [1, 0, 1, 1, 0, 0]: ", removeDupes(array1));

const array2 = [5, 2, 2, 8, 5, 9, 2, 3, 5];
console.log("test case 2 [5, 2, 2, 8, 5, 9, 2, 3, 5]: ", removeDupes(array2)); 

const array3 = [7, 7, 7, 7, 7];
console.log("test case 3 [7, 7, 7, 7, 7]: ", removeDupes(array3)); 
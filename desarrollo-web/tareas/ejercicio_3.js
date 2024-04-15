/*
This function inverts an array of numbers and returns a new array with the result.

Nicole Dávila Hernández
A01784217
*/

function invertArray(arr) {
    let invertedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertedArr.push(arr[i]);
    }
    return invertedArr;
}

function modifyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
}

console.log("ejercicio 3")

// test cases

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

console.log("test case 1 (inverted array) [1, 2, 3]: ", invertArray(arr1)); 
console.log("test case 2 (inverted array) [4, 5, 6]: ", invertArray(arr2)); 
console.log("test case 3 (inverted array) [7, 8, 9]: ", invertArray(arr3)); 

modifyArray(arr1);
console.log("test case 1 (modified array [1, 2, 3]: )", arr1); 

modifyArray(arr2);
console.log("test case 2 (modified array [4, 5, 6]: )", arr2);

modifyArray(arr3);
console.log("test case 2 (modified array [7, 8, 9]: )", arr3); 
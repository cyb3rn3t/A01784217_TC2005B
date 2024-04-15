/*
This function capitalizes the first letter of each word in a string.

Nicole Dávila Hernández
A01784217
*/

function upperCaseFirst(str) {
    let words = str.split(' '); // splits the string into words
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1); // capitalizes the first letter of each word
    }
    return words.join(' '); // joins the words back into a string
}

console.log("ejercicio 4")

// test cases

console.log("test case 1 'hello world': ", upperCaseFirst("hello world")); 
console.log("test case 2 'goodbye world': ", upperCaseFirst("goodbye world")); 
console.log("test case 2 'catch you later world': ", upperCaseFirst("catch you later world")); 
/*
This function checks if a string is a palindrome.

Nicole Dávila Hernández
A01784217
*/

function isPalindrome(string) {

    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log("ejercicio 10")

// test cases

console.log("test case 1 'racecar': ", isPalindrome("racecar")); 
console.log("test case 2 'madam': ", isPalindrome("madam")); 
console.log("test case 3 'get rickrolled': ", isPalindrome("get rickrolled")); 
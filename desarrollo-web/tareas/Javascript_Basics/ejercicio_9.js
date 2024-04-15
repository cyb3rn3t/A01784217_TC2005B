/*
This function calculates the shortest string length from three strings.

Nicole Dávila Hernández
A01784217
*/

function getShortestStringLength(text1, text2, text3) {
    const lengths = [text1.length, text2.length, text3.length];
    return Math.min(...lengths);
}

console.log("ejercicio 9")

// test cases

console.log("test case 1 'javascript', 'python', 'java': ", getShortestStringLength("javascript", "python", "java"));
console.log("test case 2 'apple', 'microsoft', 'android': ", getShortestStringLength("apple", "microsoft", "android")); 
console.log("test case 3 'WOOO', 'RAHHHHHH', 'YIPPEEEEEEEEE': ", getShortestStringLength("WOOO", "RAHHHHHH", "YIPPEEEEEEEEE")); 
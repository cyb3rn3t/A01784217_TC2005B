/*
This function converts a string to hacker speak.

Nicole Dávila Hernández
A01784217
*/

function toHackerSpeak(text) {
    const conversion = {
        a: '4',
        e: '3',
        i: '1',
        o: '0',
        s: '5',
    };

    let hackerText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        if (conversion[char]) {
            hackerText += conversion[char];
        } else {
            hackerText += text[i];
        }
    }
    return hackerText;
}

console.log("ejercicio 6")

// test cases

const string1 = "javacript es divertido";
console.log("test case 1 'javacript es divertido': ", toHackerSpeak(string1));

const string2 = "unity is a useful tool";
console.log("test case 2 'unity is a useful tool': ", toHackerSpeak(string2));

const string3 = "parangaricutirimicuaro"; 
console.log("test case 3 'parangaricutirimicuaro': ", toHackerSpeak(string3)); 
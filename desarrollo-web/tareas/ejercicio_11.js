/*
This function orders an array of strings alphabetically.

Nicole Dávila Hernández
A01784217
*/

function orderWords(words) {
// using bubble sort
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length - i - 1; j++) {
            if (words[j] > words[j + 1]) {
                // swap elements
                let aux = words[j];
                words[j] = words[j + 1];
                words[j + 1] = aux;
            }
        }
    }
    return words;
}

console.log("ejercicio 11")

// test cases

const words1 = ["mom", "dad", "sister"];
console.log("test case 1 'mom', 'dad', 'sister': ", orderWords(words1));

const words2 = ["car", "torch", "death"];
console.log("test case 2 'car', 'torch', 'death': ", orderWords(words2)); 

const words3 = ["homework", "exam", "classes"];
console.log("test case 3 'homework', 'exam', 'classes': ", orderWords(words3)); 
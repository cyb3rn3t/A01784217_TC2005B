/*
This function implements bubble sort to sort an array of numbers in ascending order.

Nicole Dávila Hernández
A01784217
*/

function bubbleSort(numList) {
    let len = numList.length;
    let swap;
    
    do {
        swap = false; // flag to check if the list is sorted
        
        for (let i = 0; i < len - 1; i++) { // iterate through the list
            if (numList[i] > numList[i + 1]) { // checks if the current element is greater than the next one
                let aux = numList[i]; // swap elements
                numList[i] = numList[i + 1]; 
                numList[i + 1] = aux; // set swap flag to true
                swap = true;
            }
        }
        len--;
    } while (swap); // repeat until the list is sorted
    return numList; 
}

console.log("ejercicio 2")

// test cases

let list1 = [5, 2, 8, 12, 1];
console.log("test case 1 [5, 2, 8, 12, 1]: ", bubbleSort(list1)); 

let list2 = [10, 4, 6, 3, 9];
console.log("test case 2 [10, 4, 6, 3, 9]: ", bubbleSort(list2));

let list3 = [1, 2, 3, 4, 5];
console.log("test case 3 [1, 2, 3, 4, 5]: ", bubbleSort(list3)); 
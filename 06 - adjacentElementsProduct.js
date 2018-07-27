// given an array of numbers, returns the largest product of adjacent integers
function adjacentElementsProduct(inputArray) {
    let largest = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        largest = product > largest ? product : largest;
    }
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([0, -9, -42, -45, 17, 36]));

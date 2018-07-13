// given an array of numbers it returns the middle or the left most of the two middle value(s)

function medianValue(arr) {
    // check to make sure every argument is a numerical character
    arr.forEach(num => {
        if (typeof(num) !== 'number') {
            throw new Error('For each array element enter numerical characters only.')
        }
    });
    return arr.length % 2 !== 0 ? arr[Math.floor(arr.length / 2)] : arr[(arr.length / 2) - 1];
}

// test values
console.log(medianValue([2, 4, 7]));
console.log(medianValue([2, 4, 7, 6]));
console.log(medianValue([2, 4, 7, 6, 6]));
console.log(medianValue([2, 4, 7, 6, 6, 8]));

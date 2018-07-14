// given however many numbers to the add function, it will add them up and return the value

function add(...nums) {
    // check to make sure every argument is a numerical character
    nums.forEach(num => {
        if (typeof(num) !== 'number') {
            throw new Error('Enter numerical characters only.');
        }
    });
    let total = 0;
    nums.forEach(num => {
        total += num;
    });
    return total;
}

console.log(add(3, 2));
console.log(add(1, 2, 3, 4, 5));

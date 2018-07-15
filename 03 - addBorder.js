// given an array of strings put an asterisk border about each string
function addBorder(pictureArr) {
    // check to make sure all elements are strings
    pictureArr.forEach(str => {
        if (typeof(str) !== 'string') {
            throw new Error('Each element in the array must be a string.');
        }
    });
    const outerBorder = pictureArr[0].length + 2;
    let topBorder = '*'.repeat(outerBorder);

    for (let i = 0; i < pictureArr.length; i++) {
        pictureArr[i] = `*${pictureArr[i]}*`;
    }
    pictureArr.unshift(topBorder);
    pictureArr.push(topBorder);
    
    return pictureArr;
}

console.log(addBorder(["ish"]));
console.log(addBorder(["abc", "def"]));

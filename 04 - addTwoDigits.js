// given a two digit number, this function will add the two digits together and return the value
function addTwoDigits(twoDigitNum) {
    twoDigitNum = String(twoDigitNum);
    // check to make sure number passed is a 2 digit number
    if (twoDigitNum.length !== 2) {
        throw new Error('Enter only a two digit number.')
    }

    return parseInt(twoDigitNum[0]) + parseInt(twoDigitNum[1]);
}

console.log(addTwoDigits(32));
console.log(addTwoDigits(66));
console.log(addTwoDigits(92));

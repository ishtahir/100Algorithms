// given a string, this function returns a new string with each letter changed to its following letter
// example: 'abc' will return 'bcd'
function alphabeticShift(inputString) {
    const charCodeArr = [];
    for (let i = 0; i < inputString.length; i++) {
        inputString.toLowerCase().charCodeAt(i) + 1 === 123 ? charCodeArr.push(97) : charCodeArr.push(inputString.charCodeAt(i) + 1);
    }
    let charCodeStr = '';
    charCodeArr.forEach(item => {
        charCodeStr += String.fromCharCode(item);
    });
    return charCodeStr.toUpperCase();
}

console.log(alphabeticShift('Crazy'));
console.log(alphabeticShift('ish'));
console.log(alphabeticShift('tahir'));

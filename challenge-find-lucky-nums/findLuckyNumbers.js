// Write your code below this line.
function nFunction(n) {
    let array = [];
    while (array.length < n) {
        let tempVal = Math.ceil(Math.random() * 10);
        if (array.includes(tempVal)) {
            continue;
        } else {
            array.push(tempVal);
        }
    }
    return array;
}

n = 4;
console.log(nFunction(n));

'use strict'

function getAverageNumber(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return undefined;
    }
    return sum / count;
    
}

const array = [10, true, 'ololo', null, { prop: 20 }, 50, 5, undefined, '123', function(){ }, 10]
console.log(getAverageNumber(array));
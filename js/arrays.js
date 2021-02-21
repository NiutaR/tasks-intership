//Write a function to check whether input is an array or not without using isArray
/*function checkArray(object) {
    if (object.constructor === Array) {
        return true;
        
    }
    else {
        return false;
    }
}
console.log(checkArray('Aray here!'+ [98]));
*/
function checkArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}
console.log(checkArray([2, 43]));
console.log(checkArray('jdldl'));
//Clone an array without using JSON.stringify()
//const arr = ['This', 'is', 'first', 'array'];
//console.log(arr);
//console.log(arr.slice(0, 4));
//рекурсивная версия 
function cloneArr(arr) {
    let i, copy;
    if (Array.isArray(arr)) {
        copy = arr.slice(0);
        for (i = 0; i < copy.length; i++) {
            copy[i] = cloneArr(copy[i]);
        }
        return copy;
    } else if(typeof arr === 'object') {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }
}
console.log(cloneArr(['so this is a clone?']));
//Create a function that will create an array made of length elements; fill elements with their indexes
function createArr(arr) {
    const x = [];
    for (var i = 0; i < arr; i++) {
        x[i] = i;
    }
    return x;
}
console.log(createArr(10));
//Create a function that will return last even element of the array
//let last = arr[arr.length - 1]

function lastElement() {
    let lastArr = [1,2,6,'color', 'red'];
    return lastArr[lastArr.length - 1];
}
console.log(lastElement());

//Write a function that will flatten an array without using flat()
const flatten = function(arr, result = []) {
    for (let i = 0,length = arr.length; i < length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
            flatten(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
};
console.log(flatten(Array('red', 'black', [19, 98,33])));

//Write a function to shuffle an array
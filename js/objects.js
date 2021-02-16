//function isAObject(value) // boolean , try with null
function isAObject(value) {
    return typeof value === "object" && value === null;
}
console.log(isAObject(null));



//function aWithoutB(objA, objB)// return object a without keys existing in object B
function aWithoutB(objA, objB) {
    const keys1 = Object.keys;
    const keys2 = Object.keys(objB);
    for (let key of keys1) {
        if (objA[key] === objB[key]) {
            delete objA[key];
        }
    }
    return objA;
}
//aWithoutB(objA, objB);


//function isEmptyObject(obj) make sure works when nonObject used
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
//function is Equal(objA, objB) boolean if objA have same values as objB
function isEqual (objA, objB) {
    let obj1 = {
        name: 'Anna',
        job: 'Developer'
    }
    let obj2 = {
        name: 'Anna',
        job: 'Developer'
    }
    for (let key in isEqual) {
        return objA === objB;
    }
} 
//isEqual(objA, objB);
    
//function intersections(objA, objB) object ,return common keys between objA and objB
//using array filter
const commonKeys = function intersections(objA, objB) {
    return Object.keys(objA).filter(function(itm) {
        return itm in objB
    });
}
const objA = {name: 'Olga', age: 22, job: 'Cook'},
 objB = {name: 'Dan', age: 22, job: 'Driver'};
commonKeys(objA, objB);

//function getValueByPath(obj, path) any ,obj by the path from the given obj
function getValueByPath(obj, path) {
    parts = path.split(".");
    if (parts.length == 1) {
        return obj[parts[0]];
    }
    return getValueByPath(obj[parts[0]], parts.slice(1).join("."));
}

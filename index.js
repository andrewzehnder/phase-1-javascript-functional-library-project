//function to check/update to array
let collectionArray = []

function turnIntoArray(collection) {
    let collectionArray = []

    if (Array.isArray(collection)) {
    collectionArray = [...collection];
    }
    else {
        for(let element in collection) {
        let value = collection[element]
        collectionArray.push(value);
        }
    }
    return collectionArray;
}



function myEach(collection, alert) {
    let newCollection = turnIntoArray(collection)

    for(let item of newCollection) {
        alert(item);
    }

    return collection;
}

function myMap(collection, callback) {
    let array = [];
    let newCollection2 = turnIntoArray(collection)

    for(let item of newCollection2) {
        array.push(callback(item))
    }

    return array;
}

function myReduce(collection, callback, acc) {
    let newCollection3 = turnIntoArray(collection);
    // console.log("collection", newCollection3)

    if (!acc) {
        acc = newCollection3[0];
        newCollection3 = newCollection3.slice(1);
    }

    for(let item of newCollection3) {
        acc = callback(acc, item, newCollection3);
    }
    // console.log("returned value", acc)
    return acc
}

function myFind(collection, predicate) {
    let newCollection4 = turnIntoArray(collection);

    for(let item of newCollection4) {
        if (predicate(item) === true) {
            return item;
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection5 = turnIntoArray(collection);
    let arrayFilter = []

    for(let item of newCollection5) {
        if (predicate(item) === true) {
            arrayFilter.push(item)
        }
    }
    return arrayFilter;
}

function mySize(collection) {
    let newCollection5 = turnIntoArray(collection);
    let sizeNumbers = newCollection5.length;
    return sizeNumbers;
}

function myFirst(array, n) {
    let newCollection5 = turnIntoArray(array);
    let result;

    if(!n) {
        result = newCollection5[0];
    }
    else {
        result = newCollection5.slice(0, n)
    }
    return result;
}

function myLast(array, n) {
    let newCollection6 = turnIntoArray(array);
    let result;

    if(!n) {
        result = newCollection6.slice(-1);
        result = result[0];
    }
    else {
        result = newCollection6.slice(-(n))
    }
    return result;
}

function myKeys(object) {
 let result = [];
 
 for(let item in object) {
     result.push(item);
 }
 return result;
}

function myValues(object) {
    let result = [];
    
    for(let item in object) {
        let value = object[item]
        result.push(value);
    }
    return result;
   }

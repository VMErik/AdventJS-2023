function findNaughtyStep(original, modified) {
    let returnValue = '';
    for (let i = 0; i < original.length; i++) {
        if (original[i] != modified[i]) {
            returnValue = (original.length > modified.length ?
                original[i] :
                modified[i]);
            break;
        }
    }
    if (modified.length > original.length &&
        returnValue === '') {
        returnValue = modified[original.length];
    }
    return returnValue
}

const original = 'xxxx'
const modified = 'xxoxx'
console.log(findNaughtyStep(original, modified));
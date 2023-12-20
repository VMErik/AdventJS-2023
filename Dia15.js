function autonomousDrive(store, movements) {
    let currentLevel = store.findIndex((row) => row.includes('!'));
    let currentPosition = store[currentLevel].indexOf('!');
    let previousLevel = currentLevel;
    let previousPosition = currentPosition;
    let distribution = [...store];
    let nextMovement = '';
    for (let index = 0; index < movements.length; index++) {
        nextMovement = movements[index];
        if (nextMovement == 'R') {
            previousPosition = currentPosition;
            currentPosition++;
        } else if (nextMovement == 'L') {
            previousPosition = currentPosition;
            currentPosition--;
        } else if (nextMovement == 'D') {
            previousLevel = currentLevel;
            currentLevel++;

        } else if (nextMovement == 'U') {
            previousLevel = currentLevel;
            currentLevel--;
        }
        if (store[currentLevel] != undefined) {
            let isValid = store[currentLevel].charAt(currentPosition) != '*';
            let sizeLevel = store[currentLevel].length
            if (isValid && currentPosition < sizeLevel) {
                distribution[previousLevel] = store[previousLevel].replace('!', '.')
                let row = distribution[currentLevel].replace('!', '.').split('');
                row[currentPosition] = '!';
                distribution[currentLevel] = row.join('')
            } else {
                currentLevel = previousLevel;
                currentPosition = previousPosition;
            }
        } else {
            currentLevel = previousLevel;
            currentPosition = previousPosition;
        }
    }
    return distribution;
}

const store = [
    '*******',
    '.*!.....',
    '*******',

]
const movements = ['D', 'U', 'R', 'R', 'R']
const result = autonomousDrive(store, movements)
console.log(result)
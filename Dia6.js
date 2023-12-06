// function maxDistance(movements) {
//     let steps = 0;
//     let movementsArr = movements.split('');
//     let isFrontLast = false;

//     for (let index = 0; index < movementsArr.length; index++) {
//         let movement = movementsArr[index];
//         if (movement == '>') {
//             steps++;
//             isFrontLast = true;
//         }
//         if (movement == '<') {
//             steps--;
//             isFrontLast = false;
//         }
//         if (movement == '*' && isFrontLast) {
//             steps++;
//             isFrontLast = true;
//         }
//         if (movement == '*' && !isFrontLast) {
//             steps--;
//             isFrontLast = false;
//         }
//     }


//     return (steps < 0) ? steps * -1 : steps;
// }


function maxDistance(movements) {
    let movementsArr = movements.split('');
    let forward = movementsArr.filter((element) => element == '>').length;
    let back = movementsArr.filter((element) => element == '<').length;
    let wildcard = movementsArr.filter((element) => element == '*').length;
    forward = (forward > back || forward == back) ?
        forward + wildcard : forward;
    back = (back > forward) ? back + wildcard : back;
    let totalSteps = forward - back
    return (totalSteps < 0) ? totalSteps * -1 : totalSteps;
}



function maxDistance(movements) {
    let forward = 0;
    let back = 0;
    let wildcard = 0;
    for (const iterator of movements.split('')) {
        if (iterator == ">") forward++;
        if (iterator == "<") back++;
        if (iterator == "*") wildcard++;
    }
    forward = (forward > back || forward == back) ?
        forward + wildcard : forward;
    back = (back > forward) ? back + wildcard : back;
    return ((forward - back) < 0) ? (forward - back) * -1 : (forward - back);
}



const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
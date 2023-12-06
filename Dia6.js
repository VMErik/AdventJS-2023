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
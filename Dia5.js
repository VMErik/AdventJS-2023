function cyberReindeer(road, time) {
    let sleighRoute = []
    road = road.replace('S', '.');
    let unitOfTime = 1;
    let position = -1;
    let newArray = []
    while (unitOfTime <= time) {
        if (unitOfTime == 6) road = road.replaceAll('|', '*');
        position++;
        if (road.charAt(position) == '|' && unitOfTime < 6) position--;
        newArray = road.split('');
        newArray[position] = 'S';
        sleighRoute.push(newArray.join(''));
        unitOfTime++;
    }
    return sleighRoute;
}
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
function findFirstRepeated(gifts) {
    let returnValue = -1;
    gifts.forEach((value, index) => {
        if (gifts.indexOf(value) < index && returnValue < 0) {
            returnValue = value;
        }
    });
    return returnValue;
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
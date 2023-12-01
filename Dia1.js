function findFirstRepeated(gifts) {
    let regalos = [];
    let value = -1;
    gifts.forEach(element => {
        if (regalos.includes(element) && value < 0) {
            value = element;
        }
        regalos.push(element);
    });
    return value;
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
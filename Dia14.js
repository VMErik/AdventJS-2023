function maxGifts(houses) {
    const lastCompare = [];
    lastCompare[0] = houses[0];
    lastCompare[1] = Math.max(houses[0], houses[1]);
    houses.slice(2)
    for (let index = 2; index <= houses.length; index++) {
        lastCompare[index] = Math.max(
            lastCompare[index - 1],
            lastCompare[index - 2] + houses[index]
        );
    }
    return lastCompare[lastCompare.length - 2];
}



maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
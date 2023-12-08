function organizeGifts(gifts) {
    const giftsList = gifts.match(/([0-9]{1,9})|[a-zA-Z]+/g);
    const groupsSymbols = ["[]", "{}", "()"];
    const groupsQuantity = [50, 10, 1];
    let origanizedList = []
    for (let index = 0; index < giftsList.length - 1; index = index + 2) {
        let qtyGift = parseInt(giftsList[index]);
        const gift = giftsList[index + 1];
        groupsSymbols.forEach(function(element, index) {
            const symbol = element;
            const cantidad = groupsQuantity[index];
            let result = Math.floor(qtyGift / cantidad);
            if (result > 0) {
                (cantidad == 1) ?
                origanizedList.push(
                    `(${gift.repeat(result)})`
                ): origanizedList.push(
                    `${symbol.charAt(0)}${gift}${symbol.charAt(1)}`
                    .repeat(result)
                );
            }
            qtyGift = qtyGift - (result * cantidad);
        });
    }
    return origanizedList.join('');
}


const result1 = organizeGifts(`70b120a4c`)
console.log(result1)
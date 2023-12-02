function manufacture(gifts, materials) {
    let completedGifts = [];
    let completedGift = true;
    for (const gift of gifts) {
        for (const letter of gift.split('')) {
            completedGift = true;
            if (!materials.includes(letter)) {
                completedGift = false;
                break;
            }
        }
        if (completedGift) completedGifts.push(gift);
    }
    return completedGifts;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials)
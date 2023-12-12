function createChristmasTree(ornaments, height) {
    let ornamentsIndex = 0;
    let ornamentsByLevel = 1;
    let christmasTree = '';
    for (let index = 1; index <= height; index++) {
        christmasTree += `${' '.repeat(height-index)}`;
        for (let level = 1; level <= ornamentsByLevel; level++) {
            christmasTree += `${ornaments.charAt(ornamentsIndex)}`;
            if (level != ornamentsByLevel) christmasTree += ' ';
            ornamentsIndex++;
            if (ornamentsIndex == ornaments.length) ornamentsIndex = 0;
        }
        christmasTree += '\n';
        ornamentsByLevel++;
    }
    christmasTree += ' '.repeat(height - 1) + '|\n';
    return christmasTree;
}

console.log(createChristmasTree('123', 4));
console.log(createChristmasTree('+*/&%$?¡¿', 15));
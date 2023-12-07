function drawGift(size, symbol) {
    let baseLine = '#'.repeat(size);
    let draw = []
    let finalDraw = "";
    for (let index = 0; index < size; index++) {
        const deep = Array(index).fill(symbol);
        deep[deep.length - 1] = '#';
        let face = [...baseLine.split(''), ...deep]
        if (index > 0 && index < size - 1) face.fill(symbol, 1, size - 1)
        draw.push(face);
    }
    draw = [...draw, ...draw.reverse()];
    draw.splice(size, 1);
    draw.forEach((element, index) => {
        let whiteSpaces = ""
        if (index < size - 1) whiteSpaces = " ".repeat((size - 1) - index);
        finalDraw += whiteSpaces + element.join('') + '\n';
    });
    return finalDraw;
}

drawGift(4, '+');


function drawGift2(size, symbol) {
    let lineaBase = "#".repeat(size);
    let finalString = "";
    for (let index = 0; index < size; index++) {
        const profundidad = (index > 0) ? symbol.repeat(index - 1) + "#" : "";
        let primeraCara = lineaBase
        if (index > 0 && index < size - 1) {
            primeraCara = "#" + symbol.repeat(size - 2) + "#";
        }
        finalString += " ".repeat((size - 1) - index) + primeraCara + profundidad + '\n';
    }
    let arr = finalString.split('\n').reverse();

    arr.forEach(function(element, index) {
        if (index > 1) finalString += element.replaceAll(" ", "") + "\n";
    });
    return finalString;
}
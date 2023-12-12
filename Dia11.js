function getIndexsForPalindrome(word) {
    let letters = word.split('');
    let reverseWord = word.split('').reverse();
    let lettersCount = [];
    let notPairsCount = 0;
    // Son iguales
    if (word == reverseWord.join('')) return [];
    for (let index = 0; index < letters.length; index++) {
        const element = letters[index];
        const indexList = lettersCount.findIndex(object => object.letter === element);
        if (indexList >= 0) {
            lettersCount[indexList].count++;
            if ((lettersCount[indexList].count % 2) == 0) {
                notPairsCount--;
            } else {
                notPairsCount++;
            }
        } else {
            lettersCount.push({ letter: element, count: 1 });
            notPairsCount++;
        }
    }
    // Verificacion si no es palindromo
    const totalLetters = letters.length;
    let rightIndex = 0;
    let leftIndex = 0;
    let changeIndex = 0;
    let letterA = '';
    let letterB = '';
    let textMod = []
    let rvWordMod = []
    if (((totalLetters % 2) != 0 && notPairsCount == 1) ||
        ((totalLetters % 2) == 0 && notPairsCount == 0)) {
        for (let index = 0; index < letters.length; index++) {
            rightIndex = index;
            leftIndex = (letters.length - 1) - index;
            letterA = letters[rightIndex];
            letterB = letters[leftIndex];
            if (letterA != letterB) {
                // Si las letras son diferentes vamos a obtener
                changeIndex = letters.indexOf(letterB);
                if (changeIndex == leftIndex) {
                    changeIndex = reverseWord.indexOf(letterA)
                    return [changeIndex, leftIndex]
                } else {
                    textMod = word.split('')
                    textMod[rightIndex] = letters[changeIndex]
                    textMod[changeIndex] = letters[rightIndex]
                    rvWordMod = [...textMod].reverse();
                    break;
                }
            }
        }

        for (let index = 0; index < rvWordMod.length; index++) {
            if (textMod[index] != rvWordMod[index]) {
                return null
            }
        }
        return [rightIndex, changeIndex];
    }
    return null;
}


getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
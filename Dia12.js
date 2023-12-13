function checkIsValidCopy(original, copy) {
    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'ñ', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z', '#', '+', ':', '.', ' '
    ];
    if (original.length != copy.length) return false;
    let originalLetter = '';
    let copyLetter = '';
    let originPosition = 0;
    let copyPosition = 0;
    for (let index = 0; index < original.length; index++) {
        originalLetter = original.charAt(index);
        copyLetter = copy.charAt(index);
        if (originalLetter == copyLetter) continue;
        if (
            (!letters.includes(originalLetter) ||
                !letters.includes(copyLetter)) &&
            originalLetter != copyLetter
        ) return false;
        if (
            letters.includes(originalLetter) &&
            letters.includes(copyLetter)
        ) {
            originPosition = letters.indexOf(originalLetter);
            copyPosition = letters.indexOf(copyLetter);
            if (
                originPosition <= 26 &&
                (copyPosition != (originPosition + 27) &&
                    copyPosition < 54)
            ) return false;
            if (originPosition > 26 &&
                copyPosition < 54) return false;
            if (originPosition >= 54 &&
                copyPosition < originPosition) return false;
        }
    }
    return true;
}

checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#') // true
checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#') // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
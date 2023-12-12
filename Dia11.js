// function getIndexsForPalindrome(word) {
//     let letters = word.split('');
//     let reverseWord = word.split('').reverse();
//     let totalLetters = [];
//     let letrasImpares = 0;
//     let tratacambios = 0;

//     // Son iguales
//     if (word == reverseWord.join('')) return [];

//     for (let index = 0; index < letters.length; index++) {
//         const element = letters[index];
//         const indexList = totalLetters.findIndex(object => object.letter === element);
//         if (indexList >= 0) {
//             totalLetters[indexList].count++;
//             if ((totalLetters[indexList].count % 2) == 0) {
//                 letrasImpares--;
//             } else {
//                 letrasImpares++;
//             }
//         } else {
//             totalLetters.push({ letter: element, count: 1 });
//             letrasImpares++;
//         }
//     }
//     // Verificacion si no es palindromo
//     const esParTotalLetras = letters.length;
//     if (((esParTotalLetras % 2) != 0 && letrasImpares == 1)) {
//         // console.log('Puede ser ');

//         for (let index = 0; index < letters.length; index++) {
//             let indiceDerecho = index;
//             let indiceIzquierdo = (letters.length - 1) - index;
//             let indiceCambia = 0;

//             let letraUno = letters[indiceDerecho];
//             let letraDos = letters[indiceIzquierdo];
//             if (letraUno != letraDos) {
//                 // Si las letras son diferentes vamos a obtener
//                 indiceCambia = letters.indexOf(letraDos);
//                 if (indiceCambia == indiceIzquierdo) {
//                     indiceCambia = reverseWord.indexOf(letraUno)
//                     return [indiceCambia, indiceIzquierdo]
//                 } else {
//                     let comparacion1 = word.split('')
//                     comparacion1[indiceDerecho] = letters[indiceCambia]
//                     comparacion1[indiceCambia] = letters[indiceDerecho]
//                     let reverseWordUltimo = [...comparacion1].reverse();

//                     for (let index = 0; index < reverseWordUltimo.length; index++) {
//                         if (comparacion1[index] != reverseWordUltimo[index]) {
//                             return null
//                         }
//                     }
//                     return [indiceDerecho, indiceCambia];
//                 }
//             }
//         }
//     }
//     if ((esParTotalLetras % 2) == 0 && letrasImpares == 0) {
//         // console.log('Puede ser ');
//         // return;

//         for (let index = 0; index < letters.length; index++) {
//             let indiceDerecho = index;
//             let indiceIzquierdo = (letters.length - 1) - index;
//             let indiceCambia = 0;

//             let letraUno = letters[indiceDerecho];
//             let letraDos = letters[indiceIzquierdo];
//             if (letraUno != letraDos) {
//                 // Si las letras son diferentes vamos a obtener
//                 indiceCambia = letters.indexOf(letraDos);
//                 if (indiceCambia == indiceIzquierdo) {
//                     indiceCambia = reverseWord.indexOf(letraUno)
//                     return [indiceCambia, indiceIzquierdo]
//                 } else {
//                     return [indiceDerecho, indiceCambia];
//                 }
//             }
//         }
//     }

//     return null;
// }

// console.log(getIndexsForPalindrome('aaababa'));
// console.log(getIndexsForPalindrome('rotaratov'));



function getIndexsForPalindrome(word) {
    let letters = word.split('');
    let reverseWord = word.split('').reverse();
    let totalLetters = [];
    let letrasImpares = 0;
    // Son iguales
    if (word == reverseWord.join('')) return [];
    for (let index = 0; index < letters.length; index++) {
        const element = letters[index];
        const indexList = totalLetters.findIndex(object => object.letter === element);
        if (indexList >= 0) {
            totalLetters[indexList].count++;
            if ((totalLetters[indexList].count % 2) == 0) {
                letrasImpares--;
            } else {
                letrasImpares++;
            }
        } else {
            totalLetters.push({ letter: element, count: 1 });
            letrasImpares++;
        }
    }
    // Verificacion si no es palindromo
    const esParTotalLetras = letters.length;
    let indiceDerecho = 0;
    let indiceIzquierdo = 0;
    let indiceCambia = 0;
    let letraUno = '';
    let letraDos = '';
    let comparacion1 = []
    let reverseWordUltimo = []
    if (((esParTotalLetras % 2) != 0 && letrasImpares == 1) ||
        ((esParTotalLetras % 2) == 0 && letrasImpares == 0)) {
        for (let index = 0; index < letters.length; index++) {
            indiceDerecho = index;
            indiceIzquierdo = (letters.length - 1) - index;
            letraUno = letters[indiceDerecho];
            letraDos = letters[indiceIzquierdo];
            if (letraUno != letraDos) {
                // Si las letras son diferentes vamos a obtener
                indiceCambia = letters.indexOf(letraDos);
                if (indiceCambia == indiceIzquierdo) {
                    indiceCambia = reverseWord.indexOf(letraUno)
                    return [indiceCambia, indiceIzquierdo]
                } else {
                    comparacion1 = word.split('')
                    comparacion1[indiceDerecho] = letters[indiceCambia]
                    comparacion1[indiceCambia] = letters[indiceDerecho]
                    reverseWordUltimo = [...comparacion1].reverse();
                    break;
                }
            }
        }

        for (let index = 0; index < reverseWordUltimo.length; index++) {
            if (comparacion1[index] != reverseWordUltimo[index]) {
                return null
            }
        }
        return [indiceDerecho, indiceCambia];
    }
    return null;
}
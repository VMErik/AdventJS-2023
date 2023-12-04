function decode(message) {
    let positionStart = -1;
    let positionEnd = -1;
    let newText = '';
    let reverseText = '';

    while (message.includes('(')) {
        positionStart = -1;
        positionEnd = -1;
        for (var i = 0; i < message.length; i++) {
            if (message[i] == '(') positionStart = i
            if (message[i] == ')') positionEnd = i
            if (positionStart >= 0 && positionEnd >= 0) break;
        }
        newText = message.substring(positionStart, positionEnd + 1);
        reverseText = newText.split('').reverse().join('').replace('(', '').replace(')', '');
        message = message.replace(newText, reverseText)
    }
    return message;
}


const c = decode('sa(u(cla)atn)s')
console.log(c);
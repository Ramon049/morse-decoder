const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let keys = Object.keys(MORSE_TABLE);
    let value = Object.values(MORSE_TABLE);
    let arrExpr = expr.split('')
    let key = [];
    let res = [];

    for (let i = 0; i < arrExpr.length; ) {
        if(arrExpr[i] == 1 && arrExpr[i + 1] == 0) {
            key.push('.');
        }
        if(arrExpr[i] == 1 && arrExpr[i + 1] == 1) {
            key.push('-');
        }
        if(arrExpr[i] == '*') {
            res.push(' ');
            i = i + 8;
        }
        if(i == 8){
            let str = key.join('');
            let index = keys.indexOf(str);
            let letter = value[index];

            res.push(letter);
            key = [];
            arrExpr.splice(0, 10);
            i = -2;
        }
        i = i + 2;
    }
    return res.join('')
}

module.exports = {
    decode
}
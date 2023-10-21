const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let startPointer = 0;
  const letterStep = 10;
  let decodedExpr = '';
  for (startPointer; startPointer < expr.length; startPointer += letterStep) {
    // slice encoded letter with length letterStep
    const encodedLetter = expr.slice(startPointer, startPointer + letterStep);
    if (encodedLetter[0] === '*') {
      // check if it's space
      decodedExpr += ' ';
    } else {
      // decode each symbol of letter into Morse-notation
      let symb = '';
      for (let i = encodedLetter.indexOf('1'); i < letterStep; i += 2) {
        if (encodedLetter.slice(i, i + 2) === '11') {
          symb += '-';
        } else {
          symb += '.';
        }
      }
      // get letter from morse table
      decodedExpr += MORSE_TABLE[symb];
    }
  }
  return decodedExpr;
}

module.exports = {
  decode,
};

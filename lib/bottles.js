import { downTo } from './helpers';

class Bottles {
  verse(verseNumber) {

    let secondBottle = '';

    secondBottle = (verseNumber === 2) ? 'bottle' : 'bottles';

    let lastLine = `Take one down and pass it around, ` +
      `${verseNumber - 1} ${secondBottle} of beer on the wall.\n`;

    if (verseNumber === 1) {
      lastLine = 'Take it down and pass it around, ' +
        'no more bottles of beer on the wall.\n';
    }

    return `${verseNumber} bottles of beer on the wall, ` +
      `${verseNumber} bottles of beer.\n` +
      `${lastLine}`;
  }
}

export { Bottles };
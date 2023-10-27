import Song from '../lib/song';

describe('Song', () => {
  test('first verse', () => {
    const expected =
      '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';

    expect(new Song().verse(99)).toBe(expected);
  });

  test('second verse', () => {
    const expected =
      '98 bottles of beer on the wall, ' +
      '98 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '97 bottles of beer on the wall.\n';

    expect(new Song().verse(98)).toBe(expected);
  });

  test('2 bottles left (third  to last)', () => {
    const expected =
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';

    expect(new Song().verse(2)).toBe(expected);
  });

  test('1 bottle left (second to last)', () => {
    const expected =
      '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'No more bottles of beer on the wall.\n';

    expect(new Song().verse(1)).toBe(expected);
  });

  test('last verse',() => {
    const expected =
      'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';

    expect(new Song().verse(0)).toBe(expected);
  });

  test.skip('', () => {

    expect().toBe();
  });
});

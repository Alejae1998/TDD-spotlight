// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

const { test, skip } = QUnit;

skip('this test should pass', (expect) => {
    const expected = 'hello michelle';

    const actual = myFunction('michelle');

    expect.equal(actual, expected, 'michelle');

    const expected2 = 'hello alejandra';
    const actual2 = myFunction('alejandra');
    expect.equal(actual2, expected2, 'alejandra');

    const expected3 = 'hello ALEJANDRA AND MICHELLE';
    const actual3 = myFunction('ALEJANDRA AND MICHELLE');
    expect.equal(actual3, expected3, 'ALEJANDRA AND MICHELLE');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should return a new string that adds three exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected, 'bunny rabbit!!!');

    const expected2 = 'alejandra!!!';
    const actual2 = addExclamationPoints('alejandra');
    expect.equal(actual2, expected2, 'alejandra!!!');

    const expected3 = 'michelle!!!';
    const actual3 = addExclamationPoints('michelle');
    expect.equal(actual3, expected3, 'michelle!!!');
});

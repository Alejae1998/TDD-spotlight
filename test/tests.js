// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
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

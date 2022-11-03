// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = myFunction('bunny rabbit');

    expect.equal(actual, expected, 'bunny rabbit');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

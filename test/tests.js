// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
} from '../functions.js';

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

test('this test should take a number and multiply by seven', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected);

    const expected2 = 14;
    const actual2 = multiplyBySeven(2);
    expect.equal(actual2, expected2);

    const expected3 = 21;
    const actual3 = multiplyBySeven(3);
    expect.equal(actual3, expected3);
});

test('this test should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);
    expect.equal(actual, expected);

    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(2);
    expect.equal(actual2, expected2);

    const expected3 = 18;
    const actual3 = multiplyBy12ThenHalve(3);
    expect.equal(actual3, expected3);
});

test('this test should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
    const expected2 = 4;
    const actual2 = divideThenMultiply(6, 3, 2);
    expect.equal(actual2, expected2);

    const expected3 = 16;

    const actual3 = divideThenMultiply(8, 2, 4);
    expect.equal(actual3, expected3);
});

test('this test should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = [6, 7, 8];
    const actual2 = returnAsAnArray(6, 7, 8);
    expect.deepEqual(actual2, expected2);

    const expected3 = [9, 10, 11];
    const actual3 = returnAsAnArray(9, 10, 11);
    expect.deepEqual(actual3, expected3);
});

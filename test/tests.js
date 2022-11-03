// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getLastItem,
    getSecondItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'hello michelle';
    const actual = myFunction('michelle');
    expect.equal(actual, expected);

    const expected2 = 'hello alejandra';
    const actual2 = myFunction('alejandra');
    expect.equal(actual2, expected2);

    const expected3 = 'hello ALEJANDRA AND MICHELLE';
    const actual3 = myFunction('ALEJANDRA AND MICHELLE');
    expect.equal(actual3, expected3);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should return a new string that adds three exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected);

    const expected2 = 'alejandra!!!';
    const actual2 = addExclamationPoints('alejandra');
    expect.equal(actual2, expected2);

    const expected3 = 'michelle!!!';
    const actual3 = addExclamationPoints('michelle');
    expect.equal(actual3, expected3);
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

test('this test should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected);

    const expected2 = '123';
    const actual2 = returnAsAString(1, 2, 3);
    expect.equal(actual2, expected2);

    const expected3 = '456';
    const actual3 = returnAsAString(4, 5, 6);
    expect.equal(actual3, expected3);
});

test("this test should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number", (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';
    const actual = makeLuckyGreeting(8, 4);
    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 2.';
    const actual2 = makeLuckyGreeting(1, 1);
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is 6.';
    const actual3 = makeLuckyGreeting(3, 3);
    expect.equal(actual3, expected3);
});

test('this test should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(actual, expected);

    const expected2 = 'chicken';
    const actual2 = getSecondItem(['cow', 'chicken', 'goat']);
    expect.equal(actual2, expected2);

    const expected3 = 'water';
    const actual3 = getSecondItem(['coffee', 'water', 'tea']);
    expect.equal(actual3, expected3);
});

test("this test should should take an array and return the LAST item in the array, no matter the array's length", (expect) => {
    const expected = 'plum';
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(actual, expected);

    const expected2 = 'fish';
    const actual2 = getLastItem(['cat', 'dog', 'bird', 'fish']);
    expect.equal(actual2, expected2);

    const expected3 = 'winter';
    const actual3 = getLastItem(['winter', 'spring', 'summer', 'winter']);
    expect.equal(actual3, expected3);
});

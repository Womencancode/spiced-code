// countries.js exports a find function to which you can pass a string and get back
//  an array containing up to four countries that begin with that string. In countries.
//  test.js you should write tests that confirm that this function is working correctly.
//  The important things to test are:
//
//     When find is passed an empty string, it returns an empty array
//     The array that it returns contains no more than four matches
//     The search is case insensitive
//     If there are no matching countries, an empty array is returned

const countries = require("./countries");

test("Passed empty string, return empty array", () => {
    expect(countries.find("")).toStrictEqual([]);
});

test("return array should not contain more than 4 matches", () => {
    expect(countries.find("A").length).toBe(4);
});

test("search case insensitive", () => {
    expect(countries.find("afghanistan")).toStrictEqual(["Afghanistan"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("Absurdistan")).toStrictEqual([]);
});

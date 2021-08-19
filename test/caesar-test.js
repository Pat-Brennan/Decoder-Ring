// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");
const caesarModule = require("../src/caesar");

describe("caesar ", () => {
const input = "thinkful";
it("should return a shift of 3", () => {
    const expected = "wklqnixo";
    const actual = caesarModule.caesar("thinkful", 3);
    expect(actual).to.equal(expected);
});

it("should return a shift of -3", () => {
    const expected = "qefkhcri";
    const actual = caesarModule.caesar("thinkful", -3);
    expect(actual).to.equal(expected);
});

it("should return a shift of 3 and false", () => {
    const expected = "qefkhcri";
    const actual = caesarModule.caesar("thinkful", 3, false);
    expect(actual).to.equal(expected);
});

it("should return a shift of 3 and false", () => {
    const expected = "qefkhcri";
    const actual = caesarModule.caesar("thinkful", 3, false);
    expect(actual).to.equal(expected);
});
});
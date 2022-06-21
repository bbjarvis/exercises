const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");
/*  Here are all the requirements for this function:
    return an empty string when passed an empty string
        input: ""
        output: ""
    return a single name when passed a single name
        input: "name"
        output: "name"
    return a single name when passed a single name with extra spaces
        input: " name "
        output: "name"
    return a last-name, first-name when passed a first and last-name
        input: "first last"
        output: "last, first"
    Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
        input: " first last"
        output: "last, first"
    return an empty string when passed a single honorific
        input: "Dr. "
        output: ""
    return honorific first-name when passed honorific first-name
        input: "Dr. first"
        output: "Dr. first"
    return a honorific last-name, first-name when passed honorific first-name last-name
        input: "Dr. first-name last-name"
        output: "Dr. last-name, first-name"
    return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
        input: " Dr. first-name last-name "
        output: "Dr. last-name, first-name"
    throw an error when name is undefined
        input: undefined
        output: throw 'Error'
*/
describe("nameInverter", function () {
  /* 
    Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
        input: " first last"
        output: "last, first"

    throw an error when name is undefined
        input: undefined
        output: throw 'Error'
*/
  it("should return an empty string when passed an empty string", function () {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("should return a single name when passed a single name", function () {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return a single name when passed a single name with extra spaces", function () {
    const inputName = " name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return a last-name, first-name when passed a first and last-name", function () {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return an empty string when passed a single honorific", function () {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
    const inputName1 = "Mr. ";
    assert.equal(nameInverter(inputName1), expectedOutput);
    const inputName2 = "Mrs. ";
    assert.equal(nameInverter(inputName2), expectedOutput);
    const inputName3 = "Ms. ";
    assert.equal(nameInverter(inputName3), expectedOutput);
  });
  it("return honorific first-name when passed honorific first-name", function () {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
    const inputName1 = "Mr. first";
    const expectedOutput1 = "Mr. first";
    assert.equal(nameInverter(inputName1), expectedOutput1);
    const inputName2 = "Mrs. first";
    const expectedOutput2 = "Mrs. first";
    assert.equal(nameInverter(inputName2), expectedOutput2);
    const inputName3 = "Ms. first";
    const expectedOutput3 = "Ms. first";
    assert.equal(nameInverter(inputName3), expectedOutput3);
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name", function () {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
    const inputName1 = "Mr. first-name last-name";
    const expectedOutput1 = "Mr. last-name, first-name";
    assert.equal(nameInverter(inputName1), expectedOutput1);
    const inputName2 = "Mrs. first-name last-name";
    const expectedOutput2 = "Mrs. last-name, first-name";
    assert.equal(nameInverter(inputName2), expectedOutput2);
    const inputName3 = "Ms. first-name last-name";
    const expectedOutput3 = "Ms. last-name, first-name";
    assert.equal(nameInverter(inputName3), expectedOutput3);
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function () {
    const inputName = " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
    const inputName1 = " Mr. first-name last-name ";
    const expectedOutput1 = "Mr. last-name, first-name";
    assert.equal(nameInverter(inputName1), expectedOutput1);
    const inputName2 = " Mrs. first-name last-name ";
    const expectedOutput2 = "Mrs. last-name, first-name";
    assert.equal(nameInverter(inputName2), expectedOutput2);
    const inputName3 = " Ms. first-name last-name ";
    const expectedOutput3 = "Ms. last-name, first-name";
    assert.equal(nameInverter(inputName3), expectedOutput3);
  });
  it("throw an error when name is undefined", function () {
    const inputName = undefined;
    const expectedOutput = 'Error';
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

let add = require("../src/string_calculator");

describe("add", function() {
    it("should return zero to an empty string", function() {
        expect(add("")).toEqual(0);
    });
    it("should return the number itself when a single number is passed", function() {
        expect(add("1")).toEqual(1);
    });
    it("should return the sum of two numbers in a string", function() {
        expect(add("1,1")).toEqual(2);
    });
    it("should return the sum of multiple number of integers in a string", function() {
        expect(add("1,2,3,4")).toEqual(10);
    });
    it("should handle new lines between numbers", function() {
        expect(add("1\n2,3")).toEqual(6);
    });
    it("should handle different delimeters", function() {
        expect(() => add("//;\n1;2").toEqual(3));
    });
    it("should handle different delimeters", function() {
        expect(() => add("//4\n142").toEqual(3));
    });
    it("should add numbers not allow negative numbers", function() {
        expect(function() {
            add("-1,-2,3,4");
        }).toThrowError("negatives not allowed -1,-2");
    });
    it("should ignore numbers that are greater than or equal to 1000", function() {
        expect(add("//;\n1000;1;2")).toEqual(3);
    });
    it("should support different delimeters of any length", function() {
        expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
    });
    it("should support different delimeters of any length", function() {
        expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
    });
    it("should support different delimeters of any length", function() {
        expect(() => add("//[*][%%%]\n1***2%%%3").toEqual(6));
    });
    it("should support different delimeters of any length", function() {
        expect(() => add("//[(--')][%]\n1(--')2%3").toEqual(6));
    });
    it("should support different delimeters of any length", function() {
        expect(() => add("//[abc][777][:(]\n1abc27773:(1").toEqual(7));
    });
    it("should handle invalid input", function() {
        expect(() => add("//;\n1000;1;2;")).toThrowError("invalid input");
    });
    it("should handle invalid input", function() {
        expect(() => add("   //;\n1000,1;2").toThrowError("invalid input"));
    });
    it("should handle invalid input", function() {
        expect(() => add("1,2,3//;\n1000;1;2")).toThrowError("invalid input");
    });
});
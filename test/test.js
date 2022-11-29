let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

    describe("#palindrome", function() {

        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("pacecar");
            assert(!nonPalindrome.palindrome());
        });

        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });
        it("should return true for a mixed-case palindrome", function () {
            let mixedCasePalindrome = new Phrase( "AniTALavaLaTINA");
            assert(mixedCasePalindrome.palindrome());
        });
        it("should convert to nonpunctuated text", function () {
            let punctuatedPhrase = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPhrase.letters(), "MadamImAdam");
        });
        it("should return true for a palindrome with punctuation", function () {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });
    });
});

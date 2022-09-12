var expect = chai.expect;

describe("MyFunctions", function() {
    describe("faceCardValue", function() {
        it("should replace A with 14", function() {
            var x = faceCardValue("A");
            expect(x).to.equal(14);
        });

        it("should replace K with 13", function() {
            var x = faceCardValue("K");
            expect(x).to.equal(13);
        });

        it("should replace Q with 12", function() {
            var x = faceCardValue("Q");
            expect(x).to.equal(12);
        });

        it("should replace J with 11", function() {
            var x = faceCardValue("J");
            expect(x).to.equal(11);
        });
    });
});
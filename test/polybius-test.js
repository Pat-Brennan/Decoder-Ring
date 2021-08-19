// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
const polybius = require("../src/polybius");

describe('polybius', () => {
    it('should encode both i and j to 42', () => {
        actual = polybiusModule.polybius('hailstate');
            expect(actual).to.equal('321142133444114451');
        });
    it('should decode 42 to (i/j)', () => {
        actual = polybiusModule.polybius('321142133444114451', false);
            expect(actual).to.equal('hai/jlstate');
        });
    it('should ignore capital letters', () => {
        actual = polybiusModule.polybius('HailState');
            expect(actual).to.equal('321142133444114451');
    });
    it('should maintain spaces', () => {
        actual = polybiusModule.polybius('hail state');
            expect(actual).to.equal('32114213 3444114451')
        })
})
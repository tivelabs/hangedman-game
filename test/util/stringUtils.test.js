import stringUtils from "../../src/util/stringUtils";

describe('stringUtil test', () => {
    it('test compare word vs array of words', () => {
        const answer = ['B', 'E', 'A', 'R']
        const word = 'BEAR';
        const result = stringUtils.compareWords(word, answer);
        expect(result).toBe(true);
    });
    it('compareWords on different words', () => {
        const result = stringUtils.compareWords('BEAR', ['B', 'E', 'A', '_']);
        expect(result).toBe(false);
    });
    test('find indexes of a  letter in a word', () => {
        const result = stringUtils.getListIndexPosition('ALLIGATOR', 'A');
        expect(result).toEqual([0, 5]);
    });

  });
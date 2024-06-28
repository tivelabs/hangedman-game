import arrayUtils from "../../src/util/arrayUtils";

describe('arrayUtils test', () => {
    it('test insert word in array by index position', () => {
        const answer = ['B', 'E', 'A', '_']
        const result = arrayUtils.insertWordInArrayByIndexPosition(answer, 'R', [3]);
        const spectAnswer = ['B', 'E', 'A', 'R'];
        expect(result).toEqual(spectAnswer);
    });
    it('test not empty list by type', () => {
      const result = arrayUtils.getItemsListByType('animals', 'Low');
      expect(result).not.toBeFalsy();
    });

    it('test fill Answer With Underscore Letters', () => {
        const result = arrayUtils.fillAnswerWithUnderscoreLetters('BEAR');
        const spectAnswer = ['_', '_', '_', '_'];
        expect(result).toEqual(spectAnswer);
      });
  });
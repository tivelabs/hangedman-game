import HangedMan from "../../src/model/hangedMan";

describe('hangedMan test', () => {
    it('test is win', () => {
        const hangedMan = new HangedMan('BEAR', ['B', 'E', 'A', 'R'], 0, true);
        expect(hangedMan.isWinner()).toBe(true);
        expect(hangedMan.isGameStarted()).toBe(false);
    });
    it('test is lost', () => {
        const hangedMan = new HangedMan('BEAR', ['B', 'E', 'A', 'X'], 3, true);
        expect(hangedMan.isLost()).toBe(true);
        expect(hangedMan.isGameStarted()).toBe(false);
    });
    it('test set word inserted', () => {
        const hangedMan = new HangedMan('ALLIGATOR', ['_', 'L', 'L', 'I', 'G', '_', 'T', 'O', 'R'], 0, true);
        hangedMan.play('A');
        expect(hangedMan.answer).toEqual(['A', 'L', 'L', 'I', 'G', 'A', 'T', 'O', 'R']);
    });
  });
  
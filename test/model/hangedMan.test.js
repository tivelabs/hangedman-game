import status from "../../src/helpers/status";
import HangedMan from "../../src/model/hangedMan";

describe('hangedMan test', () => {
    it('test is win', () => {
        const hangedMan = new HangedMan('BEAR', ['B', 'E', 'A', 'R'], 0);
        expect(hangedMan.getStatus()).toBe(status.WON_GAME);
    });
    it('test is lost', () => {
        const hangedMan = new HangedMan('BEAR', ['B', 'E', 'A', 'X'], 3);
        expect(hangedMan.getStatus()).toBe(status.LOST_GAME);
    });
    it('test set word inserted', () => {
        const hangedMan = new HangedMan('ALLIGATOR', ['_', 'L', 'L', 'I', 'G', '_', 'T', 'O', 'R'], 0);
        hangedMan.play('A');
        expect(hangedMan.answer).toEqual(['A', 'L', 'L', 'I', 'G', 'A', 'T', 'O', 'R']);
    });
  });
  
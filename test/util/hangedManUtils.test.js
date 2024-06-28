import status from "../../src/helpers/status";
import hangedManUtils from "../../src/util/hangedManUtils";
describe('test init hanged man', () => {
  it('test is init game', () => {
    const result = hangedManUtils.initHangedMan('1', '1');
    expect(result.getWord()).not.toBeFalsy();
    expect(result.answer).not.toBeFalsy();
    expect(result.getAttemptsFailed()).toBe(0);
    expect(result.getStatus()).toBe(status.GAME_STARTED);
  });
});

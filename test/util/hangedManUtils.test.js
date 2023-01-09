import hangedManUtils from "../../src/util/hangedManUtils";
describe('test init hanged man', () => {
  it('test is init game', () => {
    const result = hangedManUtils.initHangedMan('1', '1');
    expect(result.getWord()).not.toBeFalsy();
    expect(result.answer).not.toBeFalsy();
    expect(result.getAttemptsFiled()).toBe(0);
    expect(result.isGameStarted()).toBe(true);
  });
});

import optionUtils from "../../src/util/optionUtils";

describe('test option utils', () => {
    it('test is a word included in an option category', () => {
      const result = optionUtils.validateCategoryOption('1');
      expect(result).toBe(true);
    });
    it('test is a word is not included in an option category', () => {
        const result = optionUtils.validateCategoryOption('5');
        expect(result).toBe(false);
    });
    it('test is a word included in an option level', () => {
        const result = optionUtils.validateLevelOption('1');
        expect(result).toBe(true);
    });
    it('test is a word is not included in an option level', () => {
        const result = optionUtils.validateLevelOption('5');
        expect(result).toBe(false);
    });
  });
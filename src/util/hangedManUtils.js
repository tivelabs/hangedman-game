import HangedMan from "../model/hangedMan.js";
import arrayUtils from "./arrayUtils.js";
import optionUtils from "./optionUtils.js";
import stringUtils from "./stringUtils.js";

const hangedManUtils = {
  initHangedMan(category, level) {
    if(!optionUtils.validateCategoryOption(category)) {
      throw new Error('Wrong category option');
    }
    
    if(!optionUtils.validateLevelOption(level)) {
      throw new Error('Wrong level option');
    }
    const categoryName = optionUtils.getCategoryNameByOption(category);
    const levelName = optionUtils.getLevelNameByOption(level);
    const word = stringUtils.getRandomWordFromArray(arrayUtils.getItemsListByType(categoryName, levelName));
    const answer = arrayUtils.fillAnswerWithUnderscoreLetters(word);
    return new HangedMan(word, answer, 0, true);
  }
};

export default hangedManUtils;

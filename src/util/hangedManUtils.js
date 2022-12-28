import HangedMan from "../model/hangedMan";
import arrayUtils from "./arrayUtils";
import optionUtils from "./optionUtils";
import stringUtils from "./stringUtils";

const hangedManUtils = {
  initHangedMan(category, level) {
    const categoryName = optionUtils.getCategoryNameByOption(category);
    const levelName = optionUtils.getLevelNameByOption(level);
    const word = stringUtils.getRandomWordFromArray(arrayUtils.getItemsListByType(categoryName, levelName));
    const answer = arrayUtils.fillAnswerWithUnderscoreLetters(word);
    return new HangedMan(word, answer, 0, true);
  },
};

export default hangedManUtils;

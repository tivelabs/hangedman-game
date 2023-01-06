import HangedMan from "../model/hangedMan.js";
import arrayUtils from "./arrayUtils.js";
import optionUtils from "./optionUtils.js";
import stringUtils from "./stringUtils.js";

const hangedManUtils = {
  initHangedMan(category, level) {
    const categoryName = optionUtils.getCategoryNameByOption(category);
    const levelName = optionUtils.getLevelNameByOption(level);
    const word = stringUtils.getRandomWordFromArray(arrayUtils.getItemsListByType(categoryName, levelName));
    const answer = arrayUtils.fillAnswerWithUnderscoreLetters(word);
    return new HangedMan(word, answer, 0, true);
  },
  play(hangedMan, letter) {
    hangedMan.setWordInserted(letter.toUpperCase());
    return hangedMan;
  }
};

export default hangedManUtils;

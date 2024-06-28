import animals from "../data/animals_english.js";
import numbers from "../data/numbers_english.js";
import categories from "../helpers/categories.js";
import stringUtils from "./stringUtils.js";

const UNDERSCORE_CHAR = '_';
const arrayUtils = {
    insertWordInArrayByIndexPosition(answer, letter, indexes) {
      indexes.forEach(index => {
        answer[index] = letter;
      });
  
      return answer;
    },
    getItemsListByType (category, level) {
        let itemsList = [];
        switch (category) {
            case categories.animals:
                itemsList = animals.filter(e => stringUtils.getLevel(e.name) === level);
                break;
            case categories.numbers:
                itemsList = numbers.filter(e => stringUtils.getLevel(e.name) === level);
                break;
            default:
                break;
        }

        return itemsList;
    },
    fillAnswerWithUnderscoreLetters(word) {
        let answer = [];
        const myArray = word.split('');
        myArray.forEach(_ => {
            answer.push(UNDERSCORE_CHAR)
        })
        return answer;
    }
  };
  
  export default arrayUtils;
  
import animals from "../data/animals_english.js";
import numbers from "../data/numbers_english.js";
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
            case 'Animals':
                itemsList = animals.filter(e => stringUtils.getLevel(e.name) === level);
                break;
            case 'Numbers':
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
        myArray.forEach(e => {
            answer.push(UNDERSCORE_CHAR)
        })
        return answer;
    }
  };
  
  export default arrayUtils;
  
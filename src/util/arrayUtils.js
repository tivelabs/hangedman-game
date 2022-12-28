
import animals from "../data/animals_english";
import numbers from "../data/numbers_english";
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
                itemsList = animals.filter(e => e.level === level);
                break;
            case 'Numbers':
                itemsList = numbers.filter(e => e.level === level);
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
            answer.push('_')
        })
        return answer;
    }
  };
  
  export default arrayUtils;
  
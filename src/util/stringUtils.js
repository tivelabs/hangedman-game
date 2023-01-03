
const EASY_LEVEL = 'Easy';
const MEDIUM_LEVEL = 'Medium';
const HARD_LEVEL = 'Hard';

const stringUtils = {
    compareWords(word, answer) {
      return word === answer.join('');
    },
    getListIndexPosition(word, letter) {
      return word
        .split('')
        .map((c, idx) => {
          if(c === letter) {
            return idx;
          }
          return -1
        })
        .filter(element => element !== -1);
    },
    getRandomWordFromArray(listWords) {
        return listWords[Math.floor(Math.random() * listWords.length)].name;
    },
    getLevel(word) {
      const lengthWord = word.length;
      let level = EASY_LEVEL;
      switch (true) {
        case (lengthWord < 5):
          level = EASY_LEVEL;
          break;
        case (lengthWord >= 5 && lengthWord < 7):
          level = MEDIUM_LEVEL;
          break;
        case (lengthWord >= 7):
          level = HARD_LEVEL;
          break;
        default:
          level = EASY_LEVEL;
          break;
      }
      return level
    },
  };
  
  export default stringUtils;
  
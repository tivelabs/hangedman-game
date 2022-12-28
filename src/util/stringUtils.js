
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
    }
  };
  
  export default stringUtils;
  
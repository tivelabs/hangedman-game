import arrayUtils from "../util/arrayUtils.js";
import stringUtils from "../util/stringUtils.js";

const ATTEMPTS_QUANTITY = 3;

class HangedMan {

    #word;
    #attemptsFail;
    #gameStarted;

    constructor (word, answer, attemptsFail, gameStarted) {
        this.#word = word;
        this.answer = answer;
        this.#attemptsFail = attemptsFail;
        this.#gameStarted = gameStarted;
    }

    isWinner = () => {
        const win = stringUtils.compareWords(this.#word, this.answer);
        this.#gameStarted = !win;
        return win;
    }

    isLost = () => {
        const lost = this.#attemptsFail === ATTEMPTS_QUANTITY;
        this.#gameStarted = !lost;
        return lost;
    }

    isGameStarted = () => {
        return this.#gameStarted;
    }

    setWordInserted = (letter) => {
        const indexes = stringUtils.getListIndexPosition(this.#word, letter);
        if(indexes.length > 0) {
          this.answer = arrayUtils.insertWordInArrayByIndexPosition(this.answer, letter, indexes);
        } else {
            this.#addAttemptFiles();
        }
    }

    #addAttemptFiles = () => {
        this.#attemptsFail = this.#attemptsFail + 1;
    }

    getWord = () => {
        return this.#word;
    }

    getAttemptsFiled = () => {
        return this.#attemptsFail;
    }
}

export default HangedMan;
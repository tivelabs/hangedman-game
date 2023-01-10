import status from "../helpers/status.js";
import arrayUtils from "../util/arrayUtils.js";
import stringUtils from "../util/stringUtils.js";

const ATTEMPTS_QUANTITY = 3;

class HangedMan {

    #word;
    #attemptsFail;

    constructor (word, answer, attemptsFail) {
        this.#word = word;
        this.#attemptsFail = attemptsFail;
        this.answer = answer;
        this.status = status.GAME_STARTED;
    }

    getStatus = () => {
        const win = stringUtils.compareWords(this.#word, this.answer);
        if(win) {
            this.status = status.WON_GAME;
        }
        const lost = this.#attemptsFail >= ATTEMPTS_QUANTITY;
        if(lost) {
            this.status = status.LOST_GAME;
        }

        return this.status;
    }

    play = (letter) => {
        const indexes = stringUtils.getListIndexPosition(this.#word, letter.toUpperCase());
        if(indexes.length > 0) {
          this.answer = arrayUtils.insertWordInArrayByIndexPosition(this.answer, letter.toUpperCase(), indexes);
        } else {
            this.#addAttemptFail();
        }
        return this;
    }

    #addAttemptFail = () => {
        this.#attemptsFail = this.#attemptsFail + 1;
    }

    getWord = () => {
        return this.#word;
    }

    getAttemptsFailed = () => {
        return this.#attemptsFail;
    }

    getAllStatus = () => {
        return status;
    }
}

export default HangedMan;
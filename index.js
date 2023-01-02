import hangedManUtils from "./src/util/hangedManUtils.js";

let hangedMan;
export function initHangedMan(category, level) {
    hangedMan = hangedManUtils.initHangedMan(category, level);
    return hangedMan.answer.join('');
}

export function play(letter) {
    hangedMan.setWordInserted(letter);
    if(hangedMan.isWinner() ) {
        return 'Win';
    }

    if(hangedMan.isLost()) {
        return 'Lost';
    }

    return hangedMan.answer.join('');
}


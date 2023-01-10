import inputs from './helpers/inputs';
import messages from './helpers/messages';
import status from './helpers/status';
import hangedManUtils from './util/hangedManUtils';
import optionUtils from './util/optionUtils';

console.clear();

const main = async() => {
    
    let hangedMan;

    messages.showCategoryOptions();

    const categoryOpt = await inputs.selectOption();
    if(optionUtils.validateCategoryOption(categoryOpt)) {
        messages.showLevelOptions();
        const levelOpt = await inputs.selectOption();
        if(optionUtils.validateLevelOption(levelOpt)) {
            hangedMan = hangedManUtils.initHangedMan(categoryOpt, levelOpt);
        }
    }
    if(!hangedMan) {
        messages.showWrongOptionSelected();
    }

    do {
        if(hangedMan && hangedMan.getStatus() === status.GAME_STARTED) {
            messages.showUnderscore(hangedMan.answer, hangedMan.getAttemptsFailed());
            const letter = await inputs.insertLetter();
            hangedMan.play(letter);
        }
    } while(hangedMan && hangedMan.getStatus() === status.GAME_STARTED);

    if(hangedMan && hangedMan.getStatus() === status.WON_GAME) {
        messages.showWinnerMessage(hangedMan.answer);
    }

    if(hangedMan && hangedMan.getStatus() === status.LOST_GAME) {
        messages.showLoserMessage(hangedMan.answer, hangedMan.getAttemptsFailed(), hangedMan.getWord());
    }
    
}

main();
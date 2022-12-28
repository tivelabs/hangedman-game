import inputs from './helpers/inputs';
import messages from './helpers/messages';
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
        if(hangedMan && hangedMan.isGameStarted()) {
            messages.showUnderscore(hangedMan.answer, hangedMan.attemptsFail);
            const letter = await inputs.insertLetter();
            hangedMan.setWordInserted(letter);
            if(!hangedMan.isWinner()) {
                hangedMan.isLost();
            }
        }
    } while(hangedMan && hangedMan.isGameStarted());

    if(hangedMan && hangedMan.isWinner()) {
        messages.showWinnerMessage(hangedMan.answer);
    }

    if(hangedMan && hangedMan.isLost()) {
        messages.showLoserMessage(hangedMan.answer, hangedMan.attemptsFail, hangedMan.word);
    }
    
}

main();
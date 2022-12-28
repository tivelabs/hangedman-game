import 'colors';
import optionUtils from '../util/optionUtils';

const messages = {
    showCategoryOptions() {
        console.clear();
        console.log('======================'.green);
        console.log('Welcome to Hangedman Game!!');
        console.log('======================'.green);
        console.log('    Select an option'.green);
        console.log('======================\n'.green);

        optionUtils.initCategoryOptions().forEach(element => {
            console.log(`${element.number}. ${element.description}`.green);
        });
    },
    showLevelOptions() {
        console.clear();
        console.log('======================'.green);
        console.log('    Select an option'.green);
        console.log('======================\n'.green);

        optionUtils.initLevelOptions().forEach(element => {
            console.log(`${element.number}. ${element.description}`.green);
        });
    },
    showUnderscore(answer, attempts) {
        console.log('======================'.yellow);
        console.log(`\nAttempts failed: ${attempts}`.yellow);
        console.log('======================'.yellow);
        console.log(answer.join(' ').yellow);
        console.log('======================\n'.green);
    },
    showWinnerMessage(answer) {
        console.log('======================'.green);
        console.log('CONGRATULATIONS !!! ... YOU WIN.'.green);
        console.log('======================'.green);
        console.log(answer.join(' ').green);
        console.log('======================\n'.green);
    },
    showLoserMessage(answer, attempts, word) {
        if(answer) {
            console.log('======================'.red);
            console.log('OPPSS!!! ... YOU LOST.'.red);
            console.log('======================'.red);
            console.log(`\nAttempts failed: ${attempts}`.red);
            console.log(`\nThe word was: ${word}`.red);
            console.log('======================'.red);
            console.log(answer.join(' ').red);
            console.log('======================\n'.red);
        }
    },
    showWrongOptionSelected() {
        console.log('======================'.red);
        console.log('OPPSS!!! ... YOU SELECTED A WRONG OPTION.'.red);
        console.log('======================'.red);
    }
  };

export default messages;
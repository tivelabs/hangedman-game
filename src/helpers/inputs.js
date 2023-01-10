import { createInterface } from 'readline';

const inputs = {
    getOption(message) {
        return new Promise(resolve => {
            const readline = createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readline.question(message, (opt) => {
                readline.close();
                resolve(opt.toUpperCase());
            });
        });
    },
    selectOption() {
        return this.getOption('Select an option: ');
    },
    insertLetter() {
        return this.getOption('Write a letter: ');
    }
  };

export default inputs;
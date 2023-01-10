import OptionMenu from "../model/optionMenu.js";

const optionUtils = {
    initCategoryOptions() {
        const animalOpt = new OptionMenu('category', '1', 'Animals');
        const numberOpt = new OptionMenu('category', '2', 'Numbers');
        return [animalOpt, numberOpt];
    },
    initLevelOptions() {
        const low = new OptionMenu('level', '1', 'Easy');
        const medium = new OptionMenu('level', '2', 'Medium');
        const hard = new OptionMenu('level', '3', 'Hard');
        return [low, medium, hard];
    },
    validateCategoryOption(option) {
        return this.initCategoryOptions().flatMap(e => e.number).includes(option);
    },
    validateLevelOption(option) {
        return this.initLevelOptions().flatMap(e => e.number).includes(option);
    },
    getCategoryNameByOption(option) {
        const category = this.initCategoryOptions().filter(e => e.number === option).flatMap(e => e.getDescription());
        return category[0];
    },
    getLevelNameByOption(option) {
        const level = this.initLevelOptions().filter(e => e.number === option).flatMap(e => e.getDescription());
        return level[0];
    }
  };
  
  export default optionUtils;
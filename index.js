import hangedManUtils from "./src/util/hangedManUtils.js";

export function initHangedMan(category, level) {
    return hangedManUtils.initHangedMan(category, level);
}

export function play(hangedMan, letter) {
   return hangedManUtils.play(hangedMan, letter);
}


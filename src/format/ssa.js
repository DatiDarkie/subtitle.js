import { parse as fromSsa, convert as toSsa } from "subtitles-ssa";
import fromArr from "../functions/from.js";
import Dialogue from "../managers/Dialogue.js";

export function parse (str) {
  let dialogues = fromSsa(str);
  
  for (let i = 0; i < dialogues.length; i++) {
    let dialogue = dialogues[i];
    dialogues[i] = new Dialogue(dialogue);
  }

  return fromArr(dialogues);
}

export function convert (dialogues) {
  if (!Array.isArray(dialogues)) return null;
  
  for (let i = 0; i < dialogues.length; i++) {
    let dialogue = dialogues[i];
    dialogues[i] = new Dialogue(dialogue).toJSON();
  }

  return toSsa(dialogues);
}
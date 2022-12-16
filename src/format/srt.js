import { fromSrt, toSrt } from "subtitles-parser";
import fromArr from "../functions/from.js";
import Dialogue from "../managers/Dialogue.js";

export function parse (str) {
  let dialogues = fromSrt(str, true);
  
  for (let i = 0; i < dialogues.length; i++) {
    let dialogue = dialogues[i];
    dialogues[i] = new Dialogue(dialogue);
  }

  return fromArr(dialogues);
}

export function convert (dialogues) {
  if (!Array.isArray(dialogues)) return null;
  
  for (let i = 0; i < dialogues.length; i++) {
    let dialogue = new Dialogue(dialogues[i]);
    dialogues[i] = { id: i + 1, startTime: dialogue.start.valueOf(), endTime: dialogue.end.valueOf(), text: dialogue.text || "" }
  }

  return toSrt(dialogues).replace(/\r/g, "");
}
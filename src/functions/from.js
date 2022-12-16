import Dialogue from "../managers/Dialogue.js";

export default function fromArr (arr) {
  if (Array.isArray(arr)) {
    return arr.map(
      (data, index) => new Dialogue(
        Object.assign({}, data, { number: ++index })
      )
    );
  }
}
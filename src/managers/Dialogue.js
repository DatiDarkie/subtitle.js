import Time from "./Time.js";

export default class Dialogue {
  constructor (data = {}) {
    let text = data.text;

    if (typeof data === "string") text = data;

    let start = data.start || data.startTime;
    let end = data.end || data.endTime;
    let secondaryText = data.secondaryText;

    this.number = data.number || 1;
    this.start = new Time(start);
    this.end = new Time(end);
    this.text = text || "";
    this.secondaryText = secondaryText || "";
  }

  static createEmpty (number) {
    return new Dialogue({ number });
  }

  setText (text) {
    let data = this.clone();
    data.text = text || "";
    return data;
  }

  setSecondaryText (text) {
    let data = this.clone();
    data.secondaryText = text || "";
    return data;
  }

  setStartTime (time) {
    let data = this.clone();
    data.start = new Time(time);
    return data;
  }

  setEndTime (time) {
    let data = this.clone();
    data.end = new Time(time);
    return data;
  }

  clone () {
    return new Dialogue(this);
  }

  toJSON () {
    return {
      text: this.text || "",
      secondaryText: this.secondaryText || "",
      start: this.start.valueOf(),
      end: this.end.valueOf()
    }
  }

  toString () {
    return `[Dialogue]`;
  }

  valueOf () {
    return this.toJSON();
  }
}

export {
  Dialogue
}
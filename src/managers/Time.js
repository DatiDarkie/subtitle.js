const TIME_PATTERN = /(\d+):(\d{2}):(\d{2})[\.,](\d{3})/;

export default class Time {
  constructor (value) {
    this.time = isFinite(value) ? Number(value) : Time.timeToNumber(value);
    this.comma = typeof value === "string" ? (value.includes(".") ? "." : ",") : ".";
  }

  add (ms) {
    if (!isFinite(ms)) return false;
    ms = ms * 1;
    this.time = this.valueOf() + ms;
    return this;
  }

  minus (ms) {
    if (!isFinite(ms)) return false;
    ms = ms * 1;
    
    this.time = this.valueOf() - ms;
    if (this.time < 0) {
      this.time = 0;
    }

    return this;
  }

  valueOf () {
    return this.time;
  }

  toString (comma = this.comma) {
    return Time.timeToString(this.time, comma);
  }

  static isValidTime (val) {
    switch (typeof val) {
      case "string":
        return !!TIME_PATTERN.exec(val);
        break;
      case "number":
        return isFinite(val);
        break;
      default:
        return false;
    }
  }

  static timeToNumber (val) {
    let parts = TIME_PATTERN.exec(val);
  
    if (parts === null) return 0;
  
    for (let i = 1; i < 5; i++) {
      parts[i] = parseInt(parts[i], 10);
      if (isNaN(parts[i])) parts[i] = 0;
    }
    
    return Number(parts[1] * 3600000 + parts[2] * 60000 + parts[3] * 1000 + parts[4]);
  }

  static timeToString (val, comma = ",") {
    let measures = [ 3600000, 60000, 1000 ]; 
    let time = [];

    for (let i in measures) {
      let res = (val / measures[i] >> 0).toString();
      
      if (res.length < 2) res = '0' + res;
      val %= measures[i];
      time.push(res);
    }

    let ms = val.toString();
    if (ms.length < 3) {
      for (let i = 0; i <= 3 - ms.length; i++) ms = '0' + ms;
    }

    return time.join(':') + comma + ms; 
  }
}

export { Time, TIME_PATTERN }
/**
 * It takes an array of objects and returns an array of objects with the same properties, but with the
 * added property of a `say` method
 * @param array - The array of objects to be converted to Dialogue objects.
 * @returns An array of Dialogue objects.
 */
export function fromArr (array: DialogueOptions[]): Dialogue[];

export class Dialogue {
  public number: number;
  public text: string;
  public start: Time;
  public end: Time;
  public secondaryText?: string;

  /**
   * The function takes in a data object and sets the start and end times to the start and end times of
   * the data object, or if the data object is a string, it sets the start and end times to the start
   * and end times of the string.
   * 
   * The function also sets the text and secondaryText to the text and secondaryText of the data
   * object, or if the data object is a string, it sets the text and secondaryText to the text and
   * secondaryText of the string.
   * @param [data] - The data object that is passed to the constructor.
   */
  constructor (data: string | DialogueOptions);

  /**
   * It creates an empty dialogue object.
   * @returns A new instance of the Dialogue class.
   */
  createEmpty (): Dialogue;

  /**
   * The function takes a string as an argument and sets the text property of the object to the string.
   * @param text - The text to be displayed.
   * @returns The object itself.
   */
   setText (text: string): Dialogue;

  /**
   * This function sets the secondary text of the card.
   * @param text - The text to display in the notification.
   * @returns The object itself.
   */
  setSecondaryText (text: string): Dialogue;

  /**
   * This function sets the start time of the event to the time passed in as a parameter.
   * @param time - The time to set the start time to.
   * @returns The object itself.
   */
  setStartTime (time: string | Time): Dialogue;

  /**
   * This function sets the end time of the event.
   * @param time - The time to set the end time to.
   * @returns The object itself.
   */
  setEndTime (time: string | Time): Dialogue;

  /**
   * It creates a new Dialogue object with the same properties as the original.
   * @returns A new Dialogue object with the same properties as the original.
   */
  clone (): Dialogue;

  /**
   * It converts the object to JSON.
   * @returns An object with the properties text, secondaryText, start, and end.
   */
  toJSON (): DialogueType;

  /**
   * It returns the string "[Dialogue]"
   * @returns The string "[Dialogue]"
   */
  toString (comma?: string): string;

  /**
   * The valueOf() method returns the primitive value of a Date object.
   * @returns The value of the object.
   */
  valueOf (): DialogueType;
}

export class Time {
  public text: string;
  public start: Time;
  public end: Time;
  public secondaryText?: string;

  /**
   * "If the value is a number, then set the time to the value, otherwise set the time to the value
   * converted to a number."
   * 
   * The first line of the function is a ternary operator. It's a shorthand way of writing an if/else
   * statement.
   * 
   * The first part of the ternary operator is the condition. If the condition is true, then the second
   * part of the ternary operator is executed. If the condition is false, then the third part of the
   * ternary operator is executed.
   * 
   * The condition is: isFinite(value)
   * 
   * The isFinite() function determines if a value is a finite number.
   * 
   * If the value is a finite number, then the second part of the ternary operator is executed. The
   * second part of the ternary operator is: Number(value)
   * 
   * The Number() function converts
   * @param value - The value to be converted to a number.
   */
  constructor (time: number | string);

  /**
   * It adds the number of milliseconds passed to the current time.
   * @param ms - The number of milliseconds to add to the current date.
   * @returns The value of the current time plus the value of the milliseconds passed in.
   */
  add (ms: number): Time;

  /**
   * It takes a number of milliseconds and subtracts it from the current time.
   * @param ms - The number of milliseconds to subtract from the current time.
   * @returns The time in milliseconds.
   */
  minus (ms: number): Time;
  
  /**
   * This function returns a string representation of the time object.
   * @param [comma] - If true, the time will be formatted with a comma between the hours and minutes.
   * @returns The time in the format of hh:mm:ss.
   */
  toString (comma: string): string;

  /**
   * The valueOf() method returns the primitive value of a Date object.
   * @returns The time property of the object.
   */
  valueOf (): number;

  /**
   * If the value is a string, it must match the time pattern. If the value is a number, it must be
   * finite. Otherwise, it's not valid.
   * </code>
   * 
   * 
   * A:
   * 
   * I think you're looking for <code>isFinite</code>.
   * <code>isFinite(val)
   * </code>
   * @param val - The value to be validated.
   * @returns A boolean value.
   */
  static isValidTime (val: string | number): boolean;

  /**
   * It takes a string in the format of HH:MM:SS.mmm and returns the number of milliseconds that string
   * represents.
   * @param val - The value to be converted to a number.
   * @returns The time in milliseconds.
   */
  static timeToNumber (val: string): number;

  /**
   * It takes a number of milliseconds and returns a string in the format of HH:MM:SS,mmm.
   * 
   * The function is written in JavaScript, but it's easy to convert to any other language.
   * 
   * The function takes two parameters:
   * 
   * val - the number of milliseconds to convert
   * comma - the character to use as a separator between the seconds and milliseconds.
   * The function returns a string in the format of HH:MM:SS,mmm.
   * 
   * The function uses an array of measures to determine how many hours, minutes, and seconds are in
   * the number of milliseconds.
   * 
   * The function then uses a for loop to iterate through the measures array.
   * 
   * The for loop uses the modulus operator (%) to determine the number of milliseconds left after each
   * measure is subtracted.
   * 
   * The for loop uses the bitwise right shift operator (>>)
   * @param val - The time in milliseconds.
   * @param [comma=,] - The character to use as a separator between the hours, minutes, seconds, and
   * milliseconds.
   * @returns The time in the format of hh:mm:ss,mmm
   */
  static timeToString (val: number, comma: string): string;
}

/* It's defining an interface. */
export interface DialogueType {
  text: string,
  start: number,
  end: number,
  secondaryText?: string,
}

/* It's defining an interface. */
export interface DialogueOptions {
  number?: number,
  text: string,
  start?: number,
  end?: number,
  startTime?: number,
  endTime?: number,
  secondaryText?: string,
}

/**
 * It takes an array of objects, each object containing a start and end time, and a text property, and
 * returns a string in the SRT format
 * @param dialogues - Array of objects with the following properties:
 * @returns A string of the converted dialogues.
 */
export function toSrt (dialogues: Dialogue[]): string;

/**
 * It converts a JSON array of dialogues into a SSA array of dialogues
 * @param dialogues - An array of objects, each object representing a dialogue.
 * @returns the result of the toSsa function.
 */
export function toSsa (dialogues: Dialogue[]): string;

/**
 * It takes an array of objects, each of which has a `text` property and an `end` property, and returns
 * a string that is a valid .ass file
 * @param dialogues - An array of objects with the following properties:
 * @returns An array of strings.
 */
export function toAss (dialogues: Dialogue[]): string;

/**
 * It takes a string of SRT subtitles, parses it into an array of objects, and then converts each
 * object into a Dialogue object
 * @param str - The string to parse.
 * @returns An array of Dialogue objects.
 */
export function fromSrt (str: string): Dialogue[];

/**
 * It takes a string of SSA/ASS subtitles, and returns an array of Dialogue objects
 * @param str - The string to parse.
 * @returns An array of Dialogue objects.
 */
export function fromSsa (str: string): Dialogue[];

/**
 * It takes a string, splits it into lines, and then for each line, if it starts with "Dialogue: ", it
 * splits it into parts, and then creates a new Dialogue object with the start, end, and text
 * properties
 * @param str - The string to parse.
 * @returns An array of Dialogue objects.
 */
export function fromAss (str: string): Dialogue[];
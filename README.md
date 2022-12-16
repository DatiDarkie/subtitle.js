# Subtitle.js
This library helps you deal with subtitle files in terms of editing and parsing, with easy and fast tools.

# Installation
- **with** [node.js](https://nodejs.org)
```sh-session
npm install subtitle.js
```
- **with** [yarnpkg](https://yarnpkg.org)
```sh-session
yarn add subtitle.js
```
# Usage
- parse files with type .srt
```js
import { fromSrt } from "subtitle.js";

const dialogues = fromSrt(srtString);

console.log(dialogues[0].text); // subtitle text
console.log(dialogues[0].start); // subtitle startTime
console.log(dialogues[0].end); // subtitle endTime
```
- compile files with type .srt
```js
import { toSrt } from "subtitle.js";

dialogues[0] = dialogues[0].setText("Hello World!");

console.log(toSrt(dialogues));
```

# Supported Files
- .ssa
- .ass
- .srt

(More **Comming soon** ...)

# LICENCE mit
```licence
Copyright (c) YouseHusain (Squasher) 2022

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```
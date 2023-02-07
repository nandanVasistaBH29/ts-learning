"use strict";
// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// are typles in TS not immutable
Object.defineProperty(exports, "__esModule", { value: true });
// tuples in TS are like arrays with fixed length and fixed datatype for that position
var rgb = [255, 255, 255];
rgb[0] = 0;
console.log(rgb); // u can change it
// const user: [number, string]=['23213',122]/ order matters
var user = [123, "nandan"];
console.log(user);
//problem
// if the array has fixed schema u shouldn't be able to change it
console.log("pop");
user.pop();
console.log(user);

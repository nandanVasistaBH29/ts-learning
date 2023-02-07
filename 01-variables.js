"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "nandan vasista";
console.log(greetings);
var num = 1;
// num="nandan";
// it detects these error also
// greetings.toUppercase() // Case() not case()
// error detected
// let num2: number = 1;  //this type need not be specified always
// :TS is smart enough to infer the type which is being used
var num3 = 1;
console.log(typeof num3); //number
//Cannot redeclare block-scoped variable 'greetings'.ts(2451)

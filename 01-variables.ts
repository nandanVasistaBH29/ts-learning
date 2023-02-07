const greetings: string = "nandan vasista";
console.log(greetings);

let num: number = 1;
// num="nandan";
// it detects these error also

// greetings.toUppercase() // Case() not case()
// error detected

// let num2: number = 1;  //this type need not be specified always
// :TS is smart enough to infer the type which is being used

const num3 = 1;
console.log(typeof num3); //number

// number is all the numbers -> Its java or cpp -> to have int float double ....

export {}; // don't worry as of now
//Cannot redeclare block-scoped variable 'greetings'.ts(2451)

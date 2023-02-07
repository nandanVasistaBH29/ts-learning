// just like in java
// how u would define return type
// and type for all the function parameters -> we can do that in TS now

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
function concat(s1: string, s2: string): string {
  return s1 + s2;
}

const signUp = (
  name: string,
  email: string,
  password: string,
  isPaid: boolean = false // default value of false
): boolean => {
  return true;
};

console.log(addTwoNumbers(5, 123.333));
// console.log(addTwoNumbers("5", 123.333));// error
console.log(concat("nandan ", "vasista "));
console.log(
  signUp("nandan", "nandan.vasista.bh@gmail.com", "1234") === true
    ? "success"
    : "failure"
);

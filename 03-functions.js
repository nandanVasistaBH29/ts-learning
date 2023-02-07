// just like in java
// how u would define return type
// and type for all the function parameters -> we can do that in TS now
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
function concat(s1, s2) {
    return s1 + s2;
}
var signUp = function (name, email, password, isPaid // default value of false
) {
    if (isPaid === void 0) { isPaid = false; }
    return true;
};
console.log(addTwoNumbers(5, 123.333));
// console.log(addTwoNumbers("5", 123.333));// error
console.log(concat("nandan ", "vasista "));
console.log(signUp("nandan", "nandan.vasista.bh@gmail.com", "1234") === true
    ? "success"
    : "failure");

// any keyword is used when u wanna don't wanna check the type of it
// when u r not sure whats the type
var username;
// let username: any    <- this is how TS is type infering this variable
var strictly_username;
var getUserName = function () {
    return "nandanvasista";
};
var isLoggedIn = function () {
    return false;
};
username = getUserName();
strictly_username = getUserName();
username = isLoggedIn(); // this obvio bad right u r storing boolean value in the
// variable assigned to store username
strictly_username = isLoggedIn(); // error
// this is a TS error JS don't care about type errors
console.log(strictly_username);

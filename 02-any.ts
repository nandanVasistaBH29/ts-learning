// any keyword is used when u wanna don't wanna check the type of it
// when u r not sure whats the type
let username;
// let username: any    <- this is how TS is type infering this variable
let strictly_username: string;
const getUserName = () => {
  return "nandanvasista";
};
const isLoggedIn = () => {
  return false;
};
username = getUserName();
strictly_username = getUserName();
username = isLoggedIn(); // this obvio bad right u r storing boolean value in the
// variable assigned to store username

// strictly_username = isLoggedIn(); // error
// this is a TS error JS don't care about type errors

console.log(strictly_username); //u will still get it as false

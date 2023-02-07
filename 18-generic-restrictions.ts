// generics can be any type well if its any then its not always usefull
//ther are times when u don't care about most of the things in the input feild
//but mandatorily u want couple of once
interface necessary {
  username: string;
  password: string;
  email: string;
}
const registerUser = <T extends necessary>(user: T): boolean => {
  console.log(user);
  return true;
};
const u1 = {
  username: "nandan",
  password: "nandan123",
  email: "nandan@gmail",
  age: 21,
  city: "blr",
};
registerUser(u1);
const u2 = {
  email: "nandan@gmail",
  age: 21,
  city: "blr",
};
// registerUser(u2); //error rgument of type '{ email: string; age: number; city: string; }' is not assignable to parameter of type 'necessary'.

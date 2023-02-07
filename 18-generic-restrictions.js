var registerUser = function (user) {
    console.log(user);
    return true;
};
var u1 = {
    username: "nandan",
    password: "nandan123",
    email: "nandan@gmail",
    age: 21,
    city: "blr"
};
registerUser(u1);
var u2 = {
    email: "nandan@gmail",
    age: 21,
    city: "blr"
};
// registerUser(u2); //error rgument of type '{ email: string; age: number; city: string; }' is not assignable to parameter of type 'necessary'.

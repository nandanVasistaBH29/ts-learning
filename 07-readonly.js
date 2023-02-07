"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function register(user) {
    console.log(user.email, user.password, user._id);
    // user._id = "adasda";error
    return {
        jwt_token: "1231231231231312",
        isSuccess: true,
    };
}
console.log(register({
    email: "nandan@gmail.com",
    password: "*******",
    creditcardnumber: 1234123,
    name: "nandan",
    _id: "123124sdfsd1213",
}));

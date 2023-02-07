"use strict";
// to login u need email and password
// the function is expected to return jwt_token and success or failure
Object.defineProperty(exports, "__esModule", { value: true });
// const func_name = ({obj param}):{returning obj}=>{
//body
// }
function login(_a) {
    var email = _a.email, password = _a.password;
    console.log(email, password);
    return {
        jwt_token: "1231231231231312",
        isSuccess: true,
    };
}
console.log(login({ email: "nandan@gmail.com", password: "*******" }));

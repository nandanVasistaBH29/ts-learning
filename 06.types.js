// { email, password } for this we haven't defined a type
// to define a type we use type keyword
function login(user) {
    console.log(user.email, user.password);
    return {
        jwt_token: "1231231231231312",
        isSuccess: true,
    };
}
console.log(login({ email: "nandan@gmail.com", password: "*******" }));

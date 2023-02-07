// { email, password } for this we haven't defined a type
// to define a type we use type keyword

//it is very similar to struct keyword of C
// stuct keyword in C and type keyword in TS -> help in defining data type

type User = {
  email: string;
  password: string;
};
type Login_output = {
  jwt_token: string;
  isSuccess: boolean;
};
function login(user: User): Login_output {
  console.log(user.email, user.password);
  return {
    jwt_token: "1231231231231312",
    isSuccess: true,
  };
}
console.log(login({ email: "nandan@gmail.com", password: "*******" }));

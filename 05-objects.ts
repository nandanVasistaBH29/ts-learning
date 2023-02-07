// to login u need email and password
// the function is expected to return jwt_token and success or failure

// const func_name = ({obj param}):{returning obj}=>{
//body
// }

function login({ email, password }): {
  jwt_token: string;
  isSuccess: boolean;
} {
  console.log(email, password);
  return {
    jwt_token: "1231231231231312",
    isSuccess: true,
  };
}
console.log(login({ email: "nandan@gmail.com", password: "*******" }));
export {};

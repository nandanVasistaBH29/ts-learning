type LoginUser = {
  email: string;
  password: string;
};
type creditCardType = {
  readonly creditcardnumber?: number; // optional
  readonly cvv?: number; // you're not supposed to save
};

// & is used to add the types
type registerUser = LoginUser &
  creditCardType & {
    name: string;
    address?: string;
    readonly _id: string; // no one should alter the _id
  };
type Output = {
  jwt_token: string;
  isSuccess: boolean;
};
function register(user: registerUser): Output {
  console.log(user.email, user.password, user._id);
  // user._id = "adasda";error
  return {
    jwt_token: "1231231231231312",
    isSuccess: true,
  };
}
console.log(
  register({
    email: "nandan@gmail.com",
    password: "*******",
    creditcardnumber: 1234123,
    name: "nandan",
    _id: "123124sdfsd1213",
  })
);
export {};

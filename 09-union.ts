// when you're unsure of the data type u use any
// but when you're sure that its either a Datatype A or B or C .. u can use unions |
type User = {
  u_id: number;
  name: string;
};
type Admin = {
  admin_id: number;
  user: User;
};
const getByNameOrId = (arg: number | string): Admin | User => {
  if (typeof arg === "string") {
    // then Query DB with name
    // before that convert it into lowercase
    arg.toLowerCase();
    return {
      u_id: 1,
      name: "nandan",
    };
  } else {
    //query based on arg->u_id
    return {
      admin_id: 1000,
      user: {
        u_id: 1,
        name: "nandan",
      },
    };
  }
};
const myarr: number[] = [12, 312]; // an array of number
const myarr2: string[] = ["sda", "asdad"]; // an array of string
let myarr3: number[] | string[] = [1, 2, 3, 4, 5]; // an array of only strings or an array of only numbers
// myarr3= [1, 2, 3, 4, 5,"adsasd"]; //error
const myarr4: (number | string)[] = ["asdas", 1, 2, "asdas", 3, 3]; // an array which can elements string or number

let seatType: "window" | "aisle" | "middle";
// the seatType variable can only take these 3 values
seatType = "window"; // u even get super osum suggesstions
// seatType="blah"//error

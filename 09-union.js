var getByNameOrId = function (arg) {
    if (typeof arg === "string") {
        // then Query DB with name
        // before that convert it into lowercase
        arg.toLowerCase();
        return {
            u_id: 1,
            name: "nandan",
        };
    }
    else {
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
var myarr = [12, 312]; // an array of number
var myarr2 = ["sda", "asdad"]; // an array of string
var myarr3 = [1, 2, 3, 4, 5]; // an array of only strings or an array of only numbers
// myarr3= [1, 2, 3, 4, 5,"adsasd"]; //error
var myarr4 = ["asdas", 1, 2, "asdas", 3, 3]; // an array which can elements string or number
var seatType;
// the seatType variable can only take these 3 values
seatType = "window"; // u even get super osum suggesstions
// seatType="blah"//error

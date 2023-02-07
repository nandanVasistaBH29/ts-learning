interface User {
  readonly _id: string;
  name: string;
  email: string;
  googleid?: string;
  startTrail(): string; // we can have functions declared in an interface -> which are later implemented
  getCoupon(name: string): number; //number is the return type
}
const str = "hc10";
// assume that u have gotten this User interface from 3rd party
// u wanted to add your custom stuff into it -> this is called "REOPENING OF Interface"

interface User {
  fb_id?: string;
  github_id?: string;
}

// interface can inhereit -> multiple inheritance is also possible
// in type is also inheritance was there using & remember
interface Admin extends User {
  role: "ta" | "ra" | "coordinator";
}

const nv: User = {
  _id: "123esdfc!@#4",
  name: "nandan",
  email: "nandan@gmail.com",
  startTrail() {
    return "Your Free Trail Started";
  },
  getCoupon(str) {
    return 10;
  },
  github_id: "2ew234 ",
};
const rak: Admin = {
  _id: "123esdfc!@#4",
  name: "rak",
  email: "rak@gmail.com",
  startTrail() {
    return "Your Free Trail Started";
  },
  getCoupon(str) {
    return 10;
  },
  role: "coordinator",
};
console.log(nv);
console.log(rak);

//the major difference bw type and interface is that
// interface can be re opened type once declared can't be modified

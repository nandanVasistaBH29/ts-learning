//classes in TS is similar to that of JAVA but one diff is the constructor keyword is used for constructor not the class name
// but
// You can't use multiple constructors, but you can add a few optional parameters and verify if it exists
class User {
  name: string;
  email: string;
  city: string;
  constructor(name: string, email: string, city: string = "") {
    this.name = name;
    this.email = email;
    this.city = city;
  }
}

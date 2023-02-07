// class User {
//   name: string;
//   email: string;
//   city: string;
//   constructor(name: string, email: string, city: string = "") {
//     this.name = name;
//     this.email = email;
//     this.city = city;
//   }
// }
// there is shorter way to define classes
class tUser {
  constructor(
    public readonly name: string,
    private email: string,
    private city: string = ""
  ) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
  // getters get -> keyword setters ge set keyword and one more imp thing for setter method don't mention return type
  get getEmail(): string {
    return this.email;
  }
  get getCity(): string {
    return this.city;
  }
  // A 'set' accessor cannot have a return type annotation.ts(1095)
  set setCity(city: string) {
    this.city = city;
  }
}
const nv = new tUser("nandan", "nandan.vasista.bh@gmail.com");
// nv.name="nandan vasista "  can't change it as its readonly
// nv.city and nv.email can't be accessed itself

nv.setCity = "blr";
// unlike java its not nv.setCity("blr");
console.log(nv.name + " " + nv.getEmail + " " + nv.getCity);

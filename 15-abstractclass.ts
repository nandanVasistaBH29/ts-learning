// an abstract class is a class with atleast 1 unimplemented method
// u can't create obj of abstract class
abstract class SocialMediaAccount {
  public username: string;
  protected email: string;
  protected password: string;
  constructor(username: string, email: string, password: string) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
  abstract forgotPassword(): string;
}
class Insta extends SocialMediaAccount {
  forgotPassword(): string {
    return "OTP sent to your registed email id";
  }
  constructor(
    public username: string,
    protected email: string,
    protected password: string
  ) {
    super(username, email, password);
  }
}
// const nv = new SocialMediaAccount()Cannot create an instance of an abstract class.ts(2511)
const nv = new Insta("nv", "nv@gmail.com", "*******");
console.log(nv.username);

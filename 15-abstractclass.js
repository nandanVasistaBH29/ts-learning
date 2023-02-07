var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// an abstract class is a class with atleast 1 unimplemented method
// u can't create obj of abstract class
var SocialMediaAccount = /** @class */ (function () {
    function SocialMediaAccount(username, email, password) {
        this.email = email;
        this.password = password;
        this.username = username;
    }
    return SocialMediaAccount;
}());
var Insta = /** @class */ (function (_super) {
    __extends(Insta, _super);
    function Insta(username, email, password) {
        var _this = _super.call(this, username, email, password) || this;
        _this.username = username;
        _this.email = email;
        _this.password = password;
        return _this;
    }
    Insta.prototype.forgotPassword = function () {
        return "OTP sent to your registed email id";
    };
    return Insta;
}(SocialMediaAccount));
// const nv = new SocialMediaAccount()Cannot create an instance of an abstract class.ts(2511)
var nv = new Insta("nv", "nv@gmail.com", "*******");
console.log(nv.username);

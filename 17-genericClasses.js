var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
var vegie = new sellable();
vegie.addToCart({ name: "carrot", vendor: "ramesha", price: 45 });
vegie.addToCart({ name: "beans", vendor: "ramesha", price: 50 });
console.log(vegie.cart);
var courses = new sellable();
courses.addToCart({ name: "webdev", author: "hitesh", price: 4500 });
courses.addToCart({ name: "ai ml", author: "krish", price: 5000 });
console.log(courses.cart);
var nums = new sellable();
nums.addToCart(1);
nums.addToCart(2);
console.log(nums.cart);

interface vegetables {
  name: string;
  vendor: string;
  price: number;
}
interface course {
  name: string;
  author: string;
  price: number;
}
class sellable<T> {
  public cart: T[] = [];
  addToCart(product: T): void {
    this.cart.push(product);
  }
}

const vegie = new sellable<vegetables>();
vegie.addToCart({ name: "carrot", vendor: "ramesha", price: 45 });
vegie.addToCart({ name: "beans", vendor: "ramesha", price: 50 });
console.log(vegie.cart);

const courses = new sellable<course>();
courses.addToCart({ name: "webdev", author: "hitesh", price: 4500 });
courses.addToCart({ name: "ai ml", author: "krish", price: 5000 });
console.log(courses.cart);

const nums = new sellable<number>();
nums.addToCart(1);
nums.addToCart(2);
console.log(nums.cart);
export {};

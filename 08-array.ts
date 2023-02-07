// const crap = []; // by default type will be never
// crap.push(9.8);

type Post = {
  readonly post_id: string;
  post_author?: string;
  post_content: string;
  isPremium: boolean;
};
const allPosts: Array<Post> = [];
// const allPosts: Post[] = [];
//or
const my_authors: string[] = [];
const twoD: number[][] = [];

my_authors.push("nandan vasista");
allPosts.push({
  post_id: "12escd24@2",
  post_author: "nandan",
  post_content: "lorem50",
  isPremium: false,
});
twoD.push([1244, 244, 1232, 123, 231]);

console.log(my_authors);
console.log(allPosts);
console.log(twoD);

export {};

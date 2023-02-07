const cities = ["bengaluru", "mysuru", "tumakuru", "hubli", "darawada"];
cities.map((city): string => {
  return `the best is ${city}`;
});
// (city:string) not needed as TS is strong enough to type infer that
// (city):string -> this string is return type

// never Vs void

const logMessage = (msg: string): void => {
  console.log(msg);
};
// void should be used when a function does't return anything and THE EXECUTION CONTINUES

// never is used when the program terminates when that function is ran

// both does't return anything
// never is used to infer that the program will stop after this
const stop = (): never => {
  throw new Error("stopped");
};

stop();

export {};

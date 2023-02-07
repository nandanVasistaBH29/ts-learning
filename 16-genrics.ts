// Without generics, we would either have to give the identity function a specific type:
function identity(arg: number): number {
  return arg;
}
// Or, we could describe the identity function using the any type:

function identity2(arg: any): any {
  return arg;
}

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.
// Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

function identity3<Type>(arg: Type): Type {
  return arg;
}

//using any doesn't bind the type
//when we use <Type> we bind it for that particular instance i.e
//it behaves as number when its a number
//it behaves as string when its a string

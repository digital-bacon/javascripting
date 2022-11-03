const math = (...args) => {
  // Multiplies the 2nd and 3rd arguments, and adds the result to the first argument.
  return args[1] * args[2] + args[0];
}
console.log(math(53, 61, 67));
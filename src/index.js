// pipe
export const pipe = 
(...funcs) => (agrs) =>
 funcs.reduce((accum, func) => func(accum), agrs);

// compose
// export const compose = 
// (...funcs) => (agrs) =>
//  funcs.reduceRight((accum, func) => func(accum), agrs);


const add2 = val => val+2;
const multiplay3 = val => val*3;
const sub4 = val => val-4;

const result1 = sub4(multiplay3(add2(5)));
//[sub4, multiplay3, add2]
// unary argument
const compose = (...funs) => 
val => funs.reduceRight((accum, fun) => fun(accum), val)

const result2 = compose(sub4, multiplay3, add2)(5)

console.log({result2})
console.log({result1})
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// console.log(varA, varB, varC)
// const Aa = varA;
// varA = varB;
// varB = varC;
// varC = Aa;

// console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
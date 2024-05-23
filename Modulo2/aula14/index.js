//strings são indexisadas


let umaString = "um \"texto\""
//console.log(umaString[10]) esse exemplo ira mostrar apenas a letra que voce quer.

console.log(umaString.charAt(3));//
console.log(umaString.concat(' simples'));//concatenar
console.log(umaString.indexOf('t', 3));//acha a letra a partir da posição 3 
console.log(umaString.lastIndexOf('u', 3));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/),'posição')
console.log(umaString.replace(/um/, 'Outro'))
console.log(umaString.length)//retorna a quantidade de carcteres.
console.log(umaString.slice(3, 6))
console.log(umaString.substring(umaString.length -5))
console.log(umaString.split(' ', 1));
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())
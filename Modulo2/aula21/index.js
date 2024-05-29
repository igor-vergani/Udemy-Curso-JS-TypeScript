/*
(DADOS primitivos imutaveis) string, boolean, number, undefine, null, (bigInt, symbol) 
Dado = valor 

(DADOS referencia mutavel: array, object, function) 
*/

let nome = 'Igor';
nome = 'Jhe';
console.log(nome);

let aa = "A";
let bb = aa;
console.log(aa, bb);

const aaa = {
    nome: 'igor',
    sobrenome:'Vergani'
};
const bbb = aaa;
bbb.nome = 'bento';
console.log(aaa);
console.log(bbb);
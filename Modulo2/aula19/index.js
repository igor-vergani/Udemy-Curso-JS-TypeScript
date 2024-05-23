//Como funciona funçoes. 
//toda função executa uma ação.
// toda vez que a engine do JS encontra o return ela não executa nada do que esta abaixo


/*function saudacao(nome) {
    console.log("bom dia", nome)
}

saudacao('Igor');
saudacao('Jhenny');
saudacao('Mag');
*/

/*function soma (a, b){
    const resultado = a + b;
    return resultado
}
console.log(soma(5, 1));
console.log(soma(2, 1));
console.log(soma(4, 1));*/



function soma(x = 1, y = 3){
    const resultado = x+y;
    return resultado;
}
const resultado = soma()
console.log(resultado)

const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));
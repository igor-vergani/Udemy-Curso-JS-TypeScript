// // criar objetos

// const array = [1,2,3];
// array.push(4);
// array[0]= 'Igor';

// console.log(array[0]);

// const nome1 = 'Igor';
// const sobrenome = 'Vergani';
// const idade = '29';

// const pessoa1 = {
//     nome:'Igor',
//     sobrenome:'Vergani',
//     idade: 29
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

//criando uma função para criar um objeto

function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome,idade    };
}

const pessoa1 = criaPessoa('Igor', 'Vergani', 29);
const pessoa2 = criaPessoa('Igor', 'Vergani', 29);
const pessoa3 = criaPessoa('Igor', 'Vergani', 29);
const pessoa4 = criaPessoa('Igor', 'Vergani', 29);
const pessoa5 = criaPessoa('Igor', 'Vergani', 29);


console.log(pessoa1.nome,pessoa1.sobrenome, pessoa1.idade );
console.log(`Seu nome é ${pessoa1.nome} Seu sobrenome é ${pessoa1.sobrenome} Sua idade é ${pessoa1.idade} `);

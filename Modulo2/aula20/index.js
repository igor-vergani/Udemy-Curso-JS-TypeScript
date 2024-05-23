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

// function criaPessoa(nome, sobrenome, idade){
//     return { nome, sobrenome,idade    };
// }

// const pessoa1 = criaPessoa('Igor', 'Vergani', 29);
// const pessoa2 = criaPessoa('Jhenny', 'Vergani', 28);
// const pessoa3 = criaPessoa('Mag', 'Vergani', 3);
// const pessoa4 = criaPessoa('Sansão', 'Vergani', 12);
// const pessoa5 = criaPessoa('Toia', 'Vergani', 4);


// console.log(pessoa1.nome,pessoa1.sobrenome, pessoa1.idade );
// console.log(`Seu nome é ${pessoa1.nome} Seu sobrenome é ${pessoa1.sobrenome} Sua idade é ${pessoa1.idade} `);

// console.log(pessoa2.nome,pessoa2.sobrenome,pessoa2.idade);


/*objetos*/const pessoa1 = {
    nome: 'Igor',
    sobrenome: 'Vergani',
    idade: 30,

    /*metodo 1*/fala()
    {
        console.log(`Minha idade atual é ${this.idade}`); 
    },

    /*Metodo 2*/incrementaIdade(){
        this.idade++;
    }

}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

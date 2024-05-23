Esta aula criamos alguns objetos funçoes e metodos 

* exemplo de objeto:

/*objetos*/ const pessoa1 = {
    nome: 'Igor',
    sobrenome: 'Vergani',
    idade: 30,

    /*metodo1*/fala()
    {
        console.log(`Minha idade atual é ${this.idade}`); 
    },

    /*Metodo 2*/incrementaIdade(){
        this.idade++;
    }

}

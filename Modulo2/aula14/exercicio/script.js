const nome = prompt("Digite seu nome completo");
document.body.innerHTML += `O seu nome é ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é : ${nome.charAt(1)}<br />`;
document.body.innerHTML += `Qual o primeiro indice da letra do seu nome: ${nome.search(i)} <br />`;
document.body.innerHTML += `Qual o ultimo indice da letra do seu nome:  ${nome}<br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.lastIndexOf()}<br />`;
document.body.innerHTML += `Seu nome com letra maiuscula: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letra minuscula: ${nome.toLowerCase()} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;


// console.log(nome);
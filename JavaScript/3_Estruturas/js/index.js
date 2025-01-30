//  let primeiroNome = 'Joao'
//  let segundoNome = 'Pedro'
//  
//  console.log(primeiroNome + segundoNome)
//  
//  console.log('Joa Pedro')
//
//  //Mais sobre variaveis
//
//  let a=5, b=10, c=15 
//  console.log(a + b + c)
//  console.log( a, b, c)
//
//   //promt
//
// let nome = prompt('Digite seu nome')
// let idade = prompt('Digite a sua idade')// 

// console.log(`O seu nome e ${nome} e voce tem ${idade} de idade.`)

    //alert
//    alert('Cuidado voce esta sendo monitorado')

    //Math

//    console.log(Math.max(20, 874, 72434, 3783, 279498, 7832, 373))
//    console.log(Math.floor(12.4))
//    console.log(Math.ceil(24.22))
//    
//    //Console
//    console.log('Ola mundo')
//    console.error('Erro')
//    console.warn('Aviso')
//
    //if / else / else if
//  let idade = prompt('Digite sua idade')
//  if(idade >= 18){
//      console.log('Voce e maior de idade')
//  }else{
//      console.log('Voce e menor de idade')
//  }   

//   let user = 'Joao'
//   if(user === 'Joao'){
//       console.log('Seu nome e Joao')
//   }else{
//       console.log('Seu nome nao e Joao')
//   }
//   
//   let numeroUm= 5
//   let numeroDois = 10
//   if(numeroUm > numeroDois){
//       console.log(`o numero ${numeroUm} e maior que ${numeroDois}`)
//   }else{
//       console.log(`o numero ${numeroUm} nao e maior que ${numeroDois}`)
//   }
//
//   let userName = 'Joao'
//   let userAge = 23
//
//   if(userName === 'Renato' && userAge === 23){
//       console.log('Algo esta errado')
//   }else if(userName === 'Maria' || userAge === 20){
//       console.log('Algo esta errado')
//   }else if(userName === 'Joao' && userAge === 22){
//       console.log(`Seu nome e ${userName} e voce tem ${userAge} de idade`)
//   }else{
//       console.log('Voce entrou no else, nenhum dos parametros deram certo')
//   }
//

   // Estruturas de repeticao While /do While
   
//   let numUm = 0
//   while(numUm <= 5 ){
//    console.log(numUm)
//        numUm++
//   }
//   let numDois = 0
//   do{
//    console.log(`A numeracao e :${numDois}`)
//    numDois++
//   }while(numDois <= 5)
//
//    //Estruturas de repiticao For
//    for(let i = 0 ; i <= 5 ; i++){
//        console.log(i)
//    }
//
//    for(let i =0 ; i <= 3; i++){
//        console.log('Joao Pedro')
//        
//    }

    //Swhich case
    let num1 = parseInt(prompt('Digite um numero'))
    let operacao = prompt('Digite a operacao que voce que fazer : +, -, *, /')
    let num2 = parseInt(prompt('Digite mais algum numero'))
    switch (operacao) {
        case '+':
            console.log(num1 + num2)
            break;
        case '-':
            console.log(num1 - num2)
            break
        case '*':
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 /num2)
            break 
        default:
            console.log('Aconteceu algo de errado')
            break;
    }
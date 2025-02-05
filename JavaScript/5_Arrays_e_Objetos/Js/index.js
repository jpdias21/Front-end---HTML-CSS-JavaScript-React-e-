/*
// 1️⃣ map() → Multiplica cada número por 2
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(num => num * 2);
console.log("Map:", dobrados); // [2, 4, 6, 8, 10]

// 2️⃣ forEach() → Exibe cada número no console
numeros.forEach(num => console.log("ForEach:", num));

// 3️⃣ filter() → Pega só os números maiores que 2
let maioresQue2 = numeros.filter(num => num > 2);
console.log("Filter:", maioresQue2); // [3, 4, 5]

// 4️⃣ reduce() → Soma todos os números
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Reduce:", soma); // 15

// 5️⃣ find() → Encontra o primeiro número maior que 3
let encontrado = numeros.find(num => num > 3);
console.log("Find:", encontrado); // 4

// 6️⃣ some() → Verifica se existe um número maior que 10
let temMaiorQue10 = numeros.some(num => num > 10);
console.log("Some:", temMaiorQue10); // false

// 7️⃣ every() → Verifica se todos são maiores que 0
let todosPositivos = numeros.every(num => num > 0);
console.log("Every:", todosPositivos); // true

// 8️⃣ pop() → Remove o último item
let frutas = ["Maçã", "Banana", "Laranja"];
let ultimaFruta = frutas.pop();
console.log("Pop:", ultimaFruta); // "Laranja"
console.log("Frutas após pop:", frutas); // ["Maçã", "Banana"]

// 9️⃣ push() → Adiciona uma fruta no final
frutas.push("Laranja");
console.log("Push:", frutas); // ["Maçã", "Banana", "Laranja"]

// 🔟 shift() → Remove o primeiro item
let primeiraFruta = frutas.shift();
console.log("Shift:", primeiraFruta); // "Maçã"
console.log("Frutas após shift:", frutas); // ["Banana", "Laranja"]

// 1️⃣1️⃣ unshift() → Adiciona um item no início
frutas.unshift("Maçã");
console.log("Unshift:", frutas); // ["Maçã", "Banana", "Laranja"]

///Feitos pelo CHAT GPT par que eu possa entender o que casa variavel faz com exemplos simples

*/


//1 - Arrays

let lista = [1,2,3,4,5]
console.log(lista)

let listaAleatoria = [1, 'Matheus', true, []]
console.log(listaAleatoria)

// 2- Mais sobre arrays
let arrayNumber = [10,20,30,40,50]
console.log(arrayNumber[0])
console.log(arrayNumber[1])
console.log(arrayNumber[2])

let arrayName = ['Joao', 'Gabriel', 'Renato']
console.log(arrayName[0])
console.log(arrayName[1])
console.log(arrayName[2])

// 3- Proriedades

let arrayContavel = [1,2,3,4,5,6,7,8,9]

console.log(arrayContavel.length)


//Metodos de concatenacao, juntar dois arrays

let arrayUm =[1,2,3,4]
let arrayDois = ['Joao', 'Gabriel', 'Rafael']

let arrayJuntar = arrayUm.concat(arrayDois)

console.log(arrayJuntar)

//Objetos

let carro = {
    Name : 'Ford',
    Modelos :'Fiesta',
    Ano : 2022, 
    NomeDoDono : 'Joao Pedro'
}   
console.log(carro.Name)
console.log(carro.Modelos)
console.log(carro.Ano)
console.log(carro.NomeDoDono)

//Criando e deletando objetos
let carroDois = {
    Name : 'Ferrari',
    Modelos :'La ferrari',
    Ano : 2026, 
    NomeDoDono : 'Joao Pedro'
}   
console.log(carroDois.Name)
console.log(carroDois.Modelos)
console.log(carroDois.Ano)
console.log(carroDois.NomeDoDono)
//Adicionando
carroDois.Quilometragem = 2000
console.log(carroDois)
///deletando
delete carroDois.Quilometragem
console.log(carroDois)

//Mutacao (copia de objeto)

let a ={
    name: 'Joao Pedro'
}
let b = a 
console.log(a)
console.log(b)
///adicionando parametros no obj a

a.age =22
console.log(a)
console.log(b)
///Obj b fez a copia 

//Deletando propriedades
delete b.age 
console.log(a)
console.log(b)
//deleta nos dois



//loops/Percorrer  arrays
let arrayLoops = [1,2,3,4,5,6]

for(let i = 0 ; i < arrayLoops.length ; i++){
    console.log(arrayLoops[i])
}
let arrayLoopsDois = ['Joao', 'Pedro', 'Dias', 'Pontes']

arrayLoopsDois.forEach( num => console.log(num)) 



///Push / pop

let arrayPushPop = ['Joao', 'Maria', 'Gabriel', 'Renato']
///Removendo pop
arrayPushPop.pop(3)
console.log(arrayPushPop)
///adicioando push
arrayPushPop.push('Renato')
console.log(arrayPushPop)



//SHIFT UNSHIFT 
let arrayShiftUnshift = [1,2,3,4,5]
//Removendo o primeiro elemento
arrayShiftUnshift.shift()
console.log(arrayShiftUnshift)
// Adicionando o primeiro elemento
arrayShiftUnshift.unshift(1)
console.log(arrayShiftUnshift)

///indexOf e LastIndexOf
//Mostra o indice do elemento

let arrayIndex = ['Uva','Maça', 'Pera', 'Morango']
console.log(arrayIndex.indexOf('Pera'))

let frutas = ["Maçã", "Banana", "Laranja", "Manga"];
let novaLista = frutas.slice(2);  // Copia do índice 2 até o final

console.log(novaLista); // ["Laranja", "Manga"]

///Array includes

let arrayIncludes = ['Mercedex', 'Ferrari', 'Bmw']
console.log(arrayIncludes.includes('Ferrari'))
console.log(arrayIncludes.includes('Ford'))

//Array Reverce
let arrayReverce =['Mercedex', 'Ferrari', 'Bmw']
arrayReverce.reverse
console.log(arrayReverce)

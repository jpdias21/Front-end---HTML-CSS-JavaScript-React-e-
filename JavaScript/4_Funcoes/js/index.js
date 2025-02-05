function mensagem(){
    console.log('Joao Pedro Diad De Pontes')
}

mensagem()
mensagem()

let outraDeclaracao = function(){
    console.log('Outra forma de fazer uma funcao (Funcao em variavel)')
}

outraDeclaracao()

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro(' Esta e a funcao com parametro 01')
funcaoComParametro(' Esta e outra funcao 02')

//02 - return
let a = 10
let b = 20
let c= 30
let d = 40


function soma(num1, num2){
    return num1 + num2
}

let resultado = soma(a,b)
console.log(resultado)

console.log(soma(c,d))

//03 Escopo da funcao 
 
let foraDentro ='Estou fora do escopo da funcao'

function dentroDoEscopo(){
    let foraDentro = 'Estou dentro do escopo da funcao'
    console.log(foraDentro)
}

console.log(foraDentro)

dentroDoEscopo()

console.log(foraDentro)

// Funcao escopo alinhado

function multiplicador(fator) {
    return function (numero) {
        return numero * fator;
    };
}

let dobrar = multiplicador(2);
let triplicar = multiplicador(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15

//
console.log('----------')
let m = 10

    function escopoAlinhado(){

        let m = 20

            if(true){
                let m = 30
                    if(true){
                    let m = 40
                    console.log(m)
                    }
                console.log(m)        
            }
        
        console.log(m)
    }
        
    escopoAlinhado()
console.log(m)


//Arrow function

let somar = (a,b) => a + b
console.log(somar(100,50))

let multiplicar = (n1 , n2) => n1 * n2
console.log(multiplicar(123,34))

console.log('-------')
let parImpar = (n) => {
    if(n % 2 === 0){
        console.log('Este numero e Par')
    }else{
        console.log('Este numero e Impar')
    }
}

parImpar(10)
parImpar(15)

console.log('---Raiz quadrada ---')
let raizQuadrada = (n) => n * n

console.log(raizQuadrada(10))
console.log(raizQuadrada(1534))

// Function closure
console.log('--- Function closure ---')
function criarContador(){
    contador = 0

    return function(){
        contador++
        console.log(contador)
    }
}
let contador1 = criarContador()

contador1()
contador1()
contador1()

console.log('----Function Recursao----' )
function contagemRegressiva(n) {
    if (n === 0) { // Condição de parada
        console.log("FIM!");
        return;
    }
    console.log(n);
    contagemRegressiva(n - 1); // A função chama a si mesma
}

contagemRegressiva(5);

function fatorial(n) {
    if (n === 1) return 1; // Condição de parada
    return n * fatorial(n - 1); // Chama a própria função reduzindo o número
}

console.log(fatorial(5)); // 120


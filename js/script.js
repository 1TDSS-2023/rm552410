
/*
"user strict";
//isso evita deixa variveis soltas


/*console.log("Olá Mundo!");*/

/*var nr1 = "10";
var nr2 = "5";

//Realizando operações com Strings;
//tem que usar função de parciamento

console.log(parseInt(nr1) + parseInt(nr2));

var nr3 */


/*var nome1 = "Dubas";
let nome2 = "Serbatinho";
const nome3 = "Julia";
//variavelo const não se altera durante o fluxo

if(nome1 != ""){
    let nome1 ="Julia";
}

console.log(nome1);*/


//Declaração de um ARRAY e seus métodos
//banana na primeira posição mas no indice 0
//let frutas = ["banana", "maça", "laranja", "morango", "uva", "amora", "cereja", "abacaxi"];

//console.log(frutas)
//console.log(frutas[7])

//verificando o tamanho do array através da propriedade length.
//console.log(`Tamanho do Array é:  ${frutas.length}`);


//Inserindo um item ao final do Array com o método push(nomeItem)
//frutas.push("pêssego");
//console.log(frutas)

//Inserindo um item no inicio do Array com o método unshift(nomeItem)
//frutas.unshift("Kiwi");
//console.log(frutas)

//Removendo um item ao final do Array com o método pop(), não precisa passar um parâmetro
//frutas.pop();
//console.log(frutas)

//Removendo um item no inicio do Array com o método shift();
//frutas.shift();
//console.log(frutas);


//Localizando um item no Array com o método indexOf(nomeitem);
//Obs: O indexOf (nomeItem) retorna o indice do item.
//let indice = frutas.indexOf("uva");
//console.log(`Indice do item buscado: ${indice}`);
//console.log(`Elemento buscado: ${frutas[indice]}`)


//Removendo um item do Array com o método splice(indice do item, qtd de vezes que 
// o indice sera removido)
//obs: utilize o método indexOf(nomeItem) para descobrir o indice do item. 


/*let indice  = frutas.indexOf("amora");
console.log(`Elemento no índice antes da remoção: ${frutas[indice]}`);
frutas. splice(indice, 1);
console.log(frutas);
console.log(`Elemento no índice após a remoção: ${frutas[indice]}`);

//Fazendo tabela
console.table(frutas)*/


//frutas.forEach((fruta) => {
    //console.log("FRUTA DA VEZ: " + fruta)

//});

//let nr1 = [1,2,3,4,5];
//let nr2 = [6,7,8,9,10];
//console.log(nr1);
//console.log(nr2);

//concatenando arrays em um novo array.
//let nr3 = [nr1,nr2];
//console.log("NOVO ARRAY: " + nr3);


//concatenando arrays em um novo array com operador SPREAD(...);
//let nr3 = [...nr1,...nr2];
//console.log("NOVO ARRAY: " + nr3);

//imprimindo o novo array com forEach
//nr3.forEach((nr)=>{
    //nr.forEach((nr)=>{
    //console.log("ITENS DO NOVO ARRAY: " + nr);
//});

const imgElements = [...document.getElementsByTagName("img")];
//for (let index = 0; index < imgElements.length; index++) {
   // console.log(imgElements[index].alt);
//}
//const imgElementsArray = [...imgElements];

//imgElements.forEach((img)=>{
    //(img.setAttribute("width", "10%"));
//});

const pElements =[...document.querySelectorAll(".teste")];
console.log(Elements);

elements.forEach( (el)=>{
    if(el.tagName == "img"){
        console.log(el);
    }
}) 
// Implementar una función "suma" que retorne la suma de 2 numeros, ejemplo: suma(2,3) retorna 
const suma = function() {
    let num1=Number(prompt("Ingrese el primer número"));
    let num2=Number(prompt("Ingrese el segundo número"));

    return console.log(`${num1}+${num2}): ${num1+num2}`);
}
// Implementar una función "elevarAlCubo" que eleve al cubo un numero, ejemplo: elevarAlCubo(3) 
const elevacion= function elevarAlCubo(){
    let numero=Number(prompt("Ingrese un numero"));
    resultado=numero*numero*numero;
    console.log(`Elevar: ${resultado}`);
}

// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor ejemplo: restoDivisionEntera(3,2) retorna 1
const division = function(){
    let num1=Number(prompt("Ingrese el primer número"));
    let num2=Number(prompt("Ingrese el segundo número"));

    resultado=num1%num2; 
    console.log(`Division (${num1},${num2}): ${resultado}`)
}

// Implementar una función "numeroPi" para devolver el numero PI
// ejemplo: numeroPi() retorna 3,14...
function numeroPi(){
    let valorPi = Math.PI;
    console.log(`Pi vale: ${valorPi}`);
}

// Implementar una función "numeroRandom" para devolver un número random / aleatorio
// ejemplo: numeroRandom() retorna 0,123...
function numeroRandom(){
    let numAleatorio=Math.random() * 1000;
    console.log(`Random:${numAleatorio}`); 
}
//console.log("numeroRandom(): ", numeroRandom())


// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
// ejemplo: mejorNumeroRandom(1,6) retorna 3
function mejorNumeroRandom(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1,6)) 


/* CADENAS DE CARACTERES */

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
// ejemplo: transformarMayuscula("Plataformas Móviles") retorna "PLATAFORMAS MÓVILES"
function transformarMayuscula(plataformasmoviles){
    console.log("plataformas moviles".toUpperCase());
}

//console.log("transformarMayuscula(\"Plataformas Móviles\"): ", transformarMayuscula("Plataformas Móviles"))


// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
// ejemplo: primeraLetra("Plataformas") retorna "P"
function primeraLetra(palabra){
    console.log(palabra[0].toUpperCase());
}

//console.log("primeraLetra(\"Plataformas\"): ", primeraLetra("Plataformas"))


// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
// ejemplo: ultimaLetra("Plataformas") retorna "s"
function ultimaLetra(lastLetter){
    console.log(lastLetter.slice(-1));
}

//console.log("ultimaLetra(\"Plataformas\"): ", ultimaLetra("Plataformas"))


// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
// ejemplo: primeraLetraMayuscula("plataformas") retorna "Plataformas"
function primeraLetraMayuscula(letra){
    console.log("primer letra mayuscula");
    console.log(letra.charAt(0).toUpperCase() + letra.slice(1));
}

//console.log("primeraLetraMayuscula(\"plataformas\"): ", primeraLetraMayuscula("plataformas"))


// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
// ejemplo: palabraAListaDeLetras("hola") retorna ['h', 'o', 'l', 'a'];
function letterList(listedLetters){
    let array=[];
    for(let i=0;i<listedLetters.length;i++){
        array.push(listedLetters[i]);
    }
    console.log(array);
}

//console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))


// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
// ejemplo: listadoDeLetrasAPalabra(["h", "o", "l", "a"]) retorna "hola";
const listLettersToWord=(letters)=>{return console.log(letters.join(""));}

//console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))


// Implementar una función "palabraInvertida" que devuelva la palabra invertida
// ejemplo: palabraInvertida("hola") retorna "aloh";
const palabraInvertida = str => {
    let convertir = str.split("");
    let revertir = convertir.reverse().join("");

    return console.log(revertir);
}

/*LLAMADO A LAS FUNCIONES*/
//suma();
// console.log(elevacion(3));
// division(); 
// numeroPi();
 numeroRandom();
// mejorNumeroRandom(1,6); 
// transformarMayuscula(); 
// primeraLetra("locura"); 
// ultimaLetra("toro");
// primeraLetraMayuscula("plataformas"); 
// letterList("Butterfly");              
// listLettersToWord(["l","o","c","u","r","a"]);
//palabraInvertida("Hola");

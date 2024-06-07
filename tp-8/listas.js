const listaNumerosEjemplo = [2,4,6,-1,5,-4,0];
function invertirLista(listaDeNumeros){
    for(let i=listaDeNumeros.length-1;i>0;i--){
        document.write(`${listaDeNumeros[i]}  `);
    }
}
invertirLista(listaNumerosEjemplo);
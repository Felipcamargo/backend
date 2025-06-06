const listaNumeros = [20, 50, 100, 10, 30];
const listaString = ["abacaxi", "uva", "laranja", "banana" ];

const frutasOrdenas = listaString.sort();
console.log(listaString)
console.log(frutasOrdenas)
const numOrdenado = listaNumeros.sort((a, b) => {
    if (a < b){
        return -1;
}
    if (a > b){
     return 1
}
     return 0
});
console.log(numOrdenado)

let cardapio = ["X-Burguer", "X-Salada", "X-Bacon", "X-Tudo", "Misto Quente"];
let precos = [12.50, 15.00, 18.00, 20.00, 8.00];

function mostrarCardapio() {
    console.log("Cardápio:");
    for (let i = 0; i < cardapio.length; i++) {
        console.log(cardapio[i] + " - R$" + precos[i].toFixed(2)); 
    }
}

function adicionarLanche(nome, preco) {
    cardapio.push(nome); 
    precos.push(preco);   
}

function mostrarCardapioComDesconto() {
    console.log("\nCardápio com 15% de desconto:");
    for (let i = 0; i < cardapio.length; i++) {
        let precoComDesconto = precos[i] * 0.85; 
        console.log(cardapio[i] + " - R$" + precoComDesconto.toFixed(2));
    }
}

mostrarCardapio();


adicionarLanche("X-Calabresa", 22.00);

console.log("\nDepois de adicionar um novo lanche:");
mostrarCardapio();

mostrarCardapioComDesconto();

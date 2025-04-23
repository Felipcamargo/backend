 
 const livros = require("./livros.json");
 
 function mostrarlivro(){
    livros.forEach((livro) => {
        console.log(livro.titulo + "-" + 
                    livro.autor + "ano" + 
                    livro.ano + "paginas:" + 
                    livro.paginas + "preço: R$" +
                    livro.preco)
    })

}

function adicionarLivro(titulo,autor,editora,ano,sinopse,paginas, genero,preco){
    livros.push({
        titulo:titulo,
        autor: autor,
        editora:editora,
        ano:  ano,
        sinopse:sinopse,
        paginas:  paginas, 
        genero:genero,
        preco:preco,

    })
    console.log
}

adicionarLivro("O pequeno principe",
    "Leonardo davinci",
    "Tilibra",
    "2025",
    "Um principe que era pequeno",
    1,
    ["terror, comedia"],
    500.00

)



 function criaArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require("fs");
    fs.writeFileSync("livros.json",livrosTexto)
}

//criaArquivo();

mostrarlivro(); 

  

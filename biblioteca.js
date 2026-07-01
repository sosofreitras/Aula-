const { removeEventHandler } = require("jest-circus");
const { nodeInternals } = require("stack-utils");

const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero, estoque = 1) {
        const livro = {
            nome: nome,
            autor: autor,
            ano: ano,
            genero: genero,
            vezesAlugado: 0,
            estoque: estoque,
            estoqueInicial: estoque
        };

        this.livros.push(livro);
    },

    mostrarLivros() {
        console.log("=== LISTA DE LIVROS ===");

        for (let i = 0; i < this.livros.length; i++) {
            const livro = this.livros[i];

            console.log(
                `${i + 1}. ${livro.nome} - ${livro.autor} (${livro.ano}) | ${livro.genero} | Alugado ${livro.vezesAlugado}x | Estoque: ${livro.estoque}`
            );
        }
    },

    mostrarTabela() {
        console.table(this.livros);
    },

    alugar(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja alugar.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },

    devolver(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja devolver.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque < l.estoqueInicial) {
                    l.estoque++;
                    console.log(`O livro "${nome}" foi devolvido com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" já está disponível na biblioteca.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },

    removerLivro(nome){
        for(let i=0;i<this.livro.lenght;i++){
            if(this.livro[i].nome.toLowercase()===nome.toLowercase()){
                const removido = this.livro[i]
                this.livro.splice(i,1);
                console.log("Livro removido", + removido.nome);
                return;
                }}console.log("Livro não encontrado")
            }
            
}; 


// Adicionando livros
biblioteca.adicionarLivros(
    "Trono de vidro",
    "Sarah J.maas",
    2012,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Trono de vidro: Coroa da meia-noite",
    "Sarah J.maas",
    2013,
    "Fantasia",
    3
);

biblioteca.adicionarLivros(
    "A seleção",
    "Kiera Cass",
    2012,
    "Fantasia"
    
);

biblioteca.adicionarLivros(
    "Príncipe cruel",
    "Holly Black",
    2018,
    "Fantasia",
    3
);

biblioteca.adicionarLivros(
    "Alice no País das Maravilhas",
    "Lewis Carroll",
    1865,
    "Fantasia",
    2
);

biblioteca.adicionarLivros(
    "Jogos Vorazes",
    "Suzanne Collins",
    2008,
    "Distopia",
    2
);

biblioteca.adicionarLivros(
    "Game of Thrones",
    "George R. R. Martin",
    1996,
    "Fantasia",
    4
);

biblioteca.adicionarLivros(
    "A rainha vermelha",
    "Victoria Aveyard",
    2015,
    "Aventura",
    1
);

// Mostra a lista de livros
biblioteca.mostrarLivros();

// Aluga um livro
biblioteca.alugar("A rainha vermelha");

// Devolve o livro
biblioteca.devolver("Jogos vorazes");

// Mostra apenas uma tabela no final
biblioteca.mostrarTabela();
  
biblioteca.remover("Príncipe cruel");

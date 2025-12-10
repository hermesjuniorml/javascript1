let estoque = [
    {
        titulo: 'Memórias Póstumas de Brás Cubas',
        autor: 'Machado de Assis',
        quantidade: 1
    },
    {
        titulo: 'Veias abertas da américa latina',
        autor: 'Eduardo Galeano',
        quantidade: 1
    },
    {
        titulo: 'Menino Maluquinho',
        autor: 'Ziraldo',
        quantidade: 3,
    }
]

const adicionarLivro = (title, autor, qtd)=> {
    const contem_duplicado = estoque.map(e=> e.titulo===title)
    if (contem_duplicado.includes(true)) {
        console.error('Já existe este livro no estoque.')
        return
    }
    estoque.push({titulo: title, autor: autor, quantidade: qtd});
    console.log('Livro adicionado com sucesso.')

};


const removerLivro = (titulo_livro)=>{
    const contem_duplicado = estoque.map(e=> e.titulo===titulo_livro)
    if (contem_duplicado.includes(true)) {
        estoque=estoque.filter((livro)=> livro.titulo!==titulo_livro)
        console.log('Livro removido com sucesso.')
        return
    }
    console.error('Livro não encontrado')
};

const atualizarQuantidade = (titulo, qtd)=>estoque.forEach((livro)=> livro.titulo == titulo ? livro.quantidade = qtd : null);

const listarLivros = ()=> estoque.forEach((e)=> console.log(e));


// ############ TESTANDO #################

// Deve retornar que já existe o livro no estoque
// adicionarLivro('Veias abertas da américa latina', 'eu',1) 

// Deve retornar um novo livro adicionado com sucesso
// adicionarLivro('Código de alguma coisa', 'Pablo Marçal',123123);

// Deve retornar que foi removido com sucesso
// removerLivro('Menino Maluquinho')

// Deve retornar erro de não encontrado
// removerLivro('Xapolẽoao Ruemnaparte')

// Deve realizar diretamente, não especificou que para atualizar deveria verificar então não fiz
// atualizarQuantidade('Menino Maluquinho', 5)

// Listar Livros retorna o Array
// console.log(estoque)
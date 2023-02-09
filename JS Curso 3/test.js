const colecionador = {
    nome:"João do Gibi",
    idade:41,
    tipocolecao:["quadrinhos"],
    contato:"joao@email.com",
    adicionarTipo:function(propriedade, tipo) {
        this[propriedade].push(tipo)
    },
    adicionarChave:function(chave, valor) {
        this[chave] = valor
    }
}

colecionador.adicionarChave('estado', 'SP')
console.log(colecionador)


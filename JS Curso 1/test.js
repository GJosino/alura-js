function acesso(nome) {
    return `${nome} logou com sucesso!`
}


function autentica(cargo) {
    console.log(cargo)

    return true
}

function x() {}

function login(pessoa, x) {
    if (pessoa.cargo === `funcionário`) {
        autentica(90000)
    } else if (pessoa.cargo === `diretoria`) {
        autentica(900000)
    }
    return console.log(acesso(pessoa.nome))
}

login({nome: `Gustavo`, cargo:`diretoria`}, x)
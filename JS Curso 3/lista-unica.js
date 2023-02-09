const clientes = [
{
    nome:"Andre",
    cpf:"34564564546",
    dependentes:[{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    },
    {
        nome: "Samia",
        parentesco:"filha",
        dataNasc:"04/01/2014"
    }]
},
{
    nome:"Juliana",
    cpf:"34567678987",
    dependentes:[{
        nome:"Sophia",
        parentesco:"filha",
        dataNasc:"20/03/2011"
    }]
}]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)
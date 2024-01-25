// Dadas as propriedades:

// Nome
// Ano de nascimento
// CPF
// Cidade
// Estado
// Logradouro
// Crie o objeto pessoa contendo todas as propriedades citadas.

const pessoa = {
    nome: "Jéssica",
    anoDeNascimento: "07/08/1992",
    cpf: "092.092.589-76",
    cidade: "Curitiba",
    estado: "Paraná",
    logradouro: "Rua Curitiba, 490", 
}

// Dadas as propriedades:

// Nome
// CNPJ
// Área de atuação
// Cidade
// Estado
// Logradouro
// Curso
// Crie o objeto escola contendo todas as propriedades citadas.

const escola = {
        nome: "DJG Sistemas",
        cnpj: "27.328.181/0001-36",
        areaDeAtuacao: "Sistemas",
        cidade: "Colombo",
        estado: "Paraná",
        logradouro: "Rua Curitiba, 546",
        curso: "Informática",
}

// Dadas as propriedades:

// Nome
// Duração em anos
// Turma
// Módulos
// Crie o objeto curso contendo todas as propriedades citadas.

const curso = {
        nome: "Kenzie",
        duracaoEmAnos: "1 ano",
        turma: "MT22",
        módulo: "M2",
}

// Dadas as propriedades:

// Cidade
// Estado
// Logradouro
// Cep
// Crie o objeto endereço contendo todas as propriedades citadas.

const endereço = {
        cidade: "Curitiba",
        estado: "Paraná",
        logradouro: "Rua Thomaz Liss, 426",
        cep: "83.406-530",
}

// 2ª Parte: Manipulação - Estacionamento 

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true,
}

// Escreva uma função chamada obterPlaca:

// A função, quando chamada, deve retornar a placa do carro.

// Exemplo de chamada da função: obterPlaca()
// Saída: "ABC123"

function obterPlaca(){
    return carro.placa
}

const placa = obterPlaca()
console.log(placa)

// Escreva uma função chamada verificarClasses:

// A função, quando chamada, deve retornar a(s) classe(s) do carro.

// Perceba que a propriedade é um array - quando o array possuir apenas um elemento, retorne somente o valor do elemento, e quando o array possuir mais de um elemento, retorne todo o array.

// Exemplo de chamada da função: verificarClasses()
// Saída: "sedan"

function verificarClasse(){
    if(carro.classes.length === 1){
        return carro.classes[0]
    }
    return carro.classes
}

const classes = verificarClasse()
console.log(classes)

// Escreva uma função chamada potenciaReal:

// A função, quando chamada, deve retornar a potência real do carro.

// Caso o carro tenha a propriedade luxo definida como true, o valor da propriedade potencia é elevado ao quadrado.

// Retorne o valor da potência do carro.

// Exemplo de chamada da função: potenciaReal()
// Saída: 40000

function potenciaReal(){
    if(carro.luxo === true){
        return carro.potencia * carro.potencia;
    }else if(carro.luxo === !true){
        return carro.potencia
    }
}

const potencia = potenciaReal()
console.log(potencia)

// Crie uma função chamada adicionarNovaClasse que recebe uma string como parâmetro:

// Verifique se o número de classes do carro é maior ou igual a 3.

// Se o número de classes for maior ou igual a 3, retorne: "Este carro não pode ter mais classes".

// Se o número de classes for menor que 3, verifique se a classe recebida está entre as classes permitidas: 'sedan', 'hatchback', 'suv', 'crossover' e 'cupê'.

// Caso a classe recebida não estiver entre as classes permitidas, retorne: "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê".

// Se a classe recebida estiver entre as classes permitidas, verifique se ela já está presente no objeto de carro.

// Se a classe já estiver presente, retorne: "O carro já possui a classe x", onde x é o valor da classe.

// Se a classe não estiver presente, adicione-a à lista de classes do carro e retorne: "Classe x adicionada com sucesso", onde x é o valor da classe.

// Exemplo de chamada da função: adicionarNovaClasse('cupê')
// Saída: "Classe cupê adicionada com sucesso"

function adicionarNovaClasse(novaClasse){
   const classes = carro.classes;
   const classesPermitidas = [`sedan`, `hatchback`, `suv`, `crossover`, `cupê`]

   if(classes.length >= 3){
    return "Este carro não pode ter mais classes"
   }

   if(classesPermitidas.includes(novaClasse.toLowerCase())){
        if(classes.includes(novaClasse)){
            return `O carro já possui a classe ${novaClasse}`
        }
        classes.push(novaClasse)
        console.log(classes)
        return `Classe ${novaClasse} adicionada com sucesso`
   }

   return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover, cupê"

}

const resultado = adicionarNovaClasse(`crossover`)
console.log(resultado)

// ⁠Escreva uma função chamada naoMaisLuxo:
// Verifique se o carro está estacionado.
// Se o carro não estiver estacionado, retorne: "O carro {placa do carro} não está estacionado".
// Verifique se o atributo "luxo" do carro é verdadeiro.
// Se o atributo "luxo" não for verdadeiro, retorne: "O carro {placa do carro} não é luxuoso".
// Se ambos os atributos estiverem corretos (carro estacionado e luxo verdadeiro), altere o atributo "luxo" para falso.
// Retorne: "O carro {placa do carro} não é mais considerado um carro de luxo",.

// Obs.: Substitua "{placa do carro}" pela placa do carro em questão.

// Exemplo de chamada da função: naoMaisLuxo()
// Saída: "O carro ABC123 não é mais considerado um carro de luxo"

function naoMaisLuxo(){
    if(carro.estacionado === false){
        return `O carro ${carro.placa} não esta estacionado`
    }else if(carro.luxo === false){
        return `O carro ${carro.placa} não é luxuoso`
    }else if(carro.estacionado && carro.luxo === true){
        carro.luxo = false
        return `O carro ${carro.placa} não é mais considerado um carro de luxo`
    }
}

const carroEstacionado = naoMaisLuxo()
console.log(carroEstacionado)

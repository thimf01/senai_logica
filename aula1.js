
let peso = 172;

if (peso > 100) {
    console.log("Peso ok, válida para cadastro!")
} else {    
    console.log("Erro, peso fora do padrão")    
}
//Lista de peças com máximo de 10 peças
let listaPecas = ["Amortecedor", "Filtro de ar", "Velas", "Disco de freio", "Pistão", "Bateria", "Filtro de Combustivel", "Correia dentada", "Pastilha de Freio", "Barra de direcao"]
let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log("Lista com espeço disponivel")
} else {
    console.log("Lista sem espaço! Capacidade maxima atingida")    
}   
// Restringindo tamanho do nome da peçã  maior que tres caracteres
let nomePeca = "Bateria";

if (nomePeca.length > 3) {
    console.log("Nome válido! Favor continuar cadastro")
} else {
    console.log("Nome inválido! Numero de caracteres insuficiente! Varificar nome da peça")
}
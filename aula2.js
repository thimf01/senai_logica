let dataDoEvento = new Date (2021,10,22)
let hoje = new Date (2021,10,15)
let idade = 22
let participantes 

if (hoje > dataDoEvento) {
    console.log ("Cadastro não realizado, erro na data!")  
}else {
    console.log ("Data permitida!")
    if (idade < 18) {
        console.log ("Cadastro proibido, idade menor que 18 anos.")
        } else {
        console.log ("Cadastro permitido!")
        do {
            participantes++
        } 
        while (participantes <=100) {
            console.log ("Cadastro realizado com sucesso.")
            if (participantes >100) {
            console.log ("Cadastro não realizado, número máximo de participantes atingido.")
            }
        }

    }




}





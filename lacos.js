const prompt = require('prompt-sync')
//utilizando if (se)
function se(num){

    if(num <10){
        console.log('Voce é uma criança!')
    }


}

//Utilizando if .. else (se.. então)
function senao(ano){
    if(ano < 1900){
        console.log('Época de guerras internas no pais')
    }else if(ano > 1899 && ano < 2000 ){
        console.log('Primeira e Segunda Guerra')
    } else{
        console.log('Guerra da Rússia vs Ucrânia')
    }

}

// Laço for(Para)
function para(k){
    for(let i=0;i<10;i++){
        if(k== i){
            console.log('kaue lindo'+ i) 
        }
        
    }
}

//Laço while (enquanto)
function enquanto(n){
    let = i = 0
    while(i < 10){
        if(n == i){
        console.log('Sao paulo' + i)
        }
        i++
    }
}

//Laço do while (faça.. enquanto)
function facaenquanto(n){
    let i = 0
    do{
        if(n == i){
            console.log('Sao paulo' + i)
            }
            i++
    }while(i < 10);
}


//Laço switch case(repetidor)
function caso(n){
    switch(n){
        case 1:console.log('Voce escolheu '+ n)
        break
        case 2:console.log('Voce escolheu '+ n)
        break
        case 3:console.log('Voce escolheu '+ n)
        break
        case 4:console.log('Voce escolheu '+ n)
        break
        default:
        console.log('Fora do vetor ' + n)
    }
}

const n = parseInt(prompt('Entre com valor no case'))
console.log(caso(n))
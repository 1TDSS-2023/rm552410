//Desafio 1
//Inserir os botoes de números e operações no visor
//É obrigatorio utilizar funções parametrizadas...
//Pode ser utilizados eventos de inline. 

//visor vai receber (=) o botao
function insereNumeroNoVisor(botao, visor) {
    if(botao.value =="+" || botao.value =="-" || botao.value =="*" || botao.value =="/"){

        if(visor.value[visor.value.length-1] =="+" || visor.value[visor.value.length-1] =="-" ||
        visor.value[visor.value.length-1] =="*" || visor.value[visor.value.length-1] =="/"){
            visor.value.slice(visor.value.length-1);
        }
        else{
            visor.value += botao.value;
        }
    }
    else{
        visor.value += botao.value;
    }
}

//Desafio 2
//Utilizando a função eval(expressão)
//Crie uma nova função no formato ArrowFunction que recebe
//um parâmetro e passe para a função eval() realizar o cauculo e devolva o resultado no visor

const calculaResultadoOperacoes = (visor) =>{
    visor.value = eval(visor.value);
    
}

//Desafio 3
//Faça com que os sinais não repita um seguido do outro,
//E nem possa terminar com sinal no final da solução

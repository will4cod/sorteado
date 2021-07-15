function numeroAleatorio(num){
    let numero = Math.floor(Math.random() * num) + 1;

    return numero;
}

function exibirSorteado(nome){
    window.alert('Nome sorteado: ' + nome);
}


function initialize(){
    
    let botao = document.getElementById('sortear');
    
    botao.addEventListener('click', () =>{
        let nomes = document.getElementById('lista-nomes').value;
        let lista = nomes.split('\n');
        let sorteado = numeroAleatorio(lista.length) -1;
        exibirSorteado(lista[sorteado]);                
    });
}

initialize();
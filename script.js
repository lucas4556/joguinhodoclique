let num = 1

document.getElementById('valor1').innerHTML = 10
document.getElementById('valor2').innerHTML = 50
document.getElementById('valor3').innerHTML = 100

document.getElementById('botao').addEventListener('click', botaoContar)

function botaoContar(){
    let numCliques = document.getElementById('numCliques')
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let valor3 = document.getElementById('valor3')
    valor1 = 10
    valor2 = 50
    valor3 = 100
    let subTexto1 = document.getElementById('sub-texto1')
    let subTexto2 = document.getElementById('sub-texto2')
    let subTexto3 = document.getElementById('sub-texto3')

    if (num === 1){
        numCliques.innerHTML = `${Number(num++)} clique.`
    } else {
        numCliques.innerHTML = `${Number(num++)} cliques.`
    }

    if (num > valor3){
        subTexto3.style.display = 'block'
        document.getElementById('texto-jogo-concluido').style.display = 'block'
        document.getElementById('texto-jogo-concluido').style.fontStyle = 'italic'
        document.getElementById('texto-jogo-concluido').style.fontWeight = 'bold'
    } else if (num > valor2){
        subTexto2.style.display = 'block'
    } else if (num > valor1){
        subTexto1.style.display = 'block'
    }
}


let cartas = {
    carta1: {
        cartaNumero: 1,
        cartaImagem: './img/img1.png',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    carta2: {
        cartaNumero: 2,
        cartaImagem: './img/img2.png',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    carta3: {
        cartaNumero: 3,
        cartaImagem: './img/img3.jpg',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    carta4: {
        cartaNumero: 4,
        cartaImagem: './img/img4.png',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    carta5: {
        cartaNumero: 5,
        cartaImagem: './img/img5.jpg',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    carta6: {
        cartaNumero: 6,
        cartaImagem: './img/img6.jpg',
        cartaPosicao1: 'lugar',
        cartaPosicao2: 'lugar',
        virada: false
    },
    escolhidas: {
        carta1: 0,
        carta2: 0,
    }
}

let posicoesCartas = [document.getElementById('position1'),
                    document.getElementById('position2'),
                    document.getElementById('position3'),
                    document.getElementById('position4'),
                    document.getElementById('position5'),
                    document.getElementById('position6'),
                    document.getElementById('position7'),
                    document.getElementById('position8'),
                    document.getElementById('position9'),
                    document.getElementById('position10'),
                    document.getElementById('position11'),
                    document.getElementById('position12'),]


function embaralharCartas(){
    let contadorCarta = 1
    let contadorPosicao = 1
    for(let i = 0; i < 6; i++){
        if(contadorPosicao > 2){
            contadorPosicao = 1
        }
        while(contadorPosicao < 3){
            let numero = numeroAleatorio(0,(posicoesCartas.length - 1))
            let cartaString = 'carta'+contadorCarta
            let posicaoString = 'cartaPosicao'+contadorPosicao
            cartas[cartaString][posicaoString] = posicoesCartas[numero]
            posicoesCartas.splice(numero, 1)
            contadorPosicao++  
        }

        contadorCarta++
    
    }
}

function numeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }



let cartasArrEvent = document.querySelectorAll('img')
for(let item of cartasArrEvent){
    item.addEventListener('click', function(event){
        let cartaClicadaId = event.target.id
        escolherCarta(cartaClicadaId)
    })
}

function escolherCarta(posicaoCarta){
   let posicaoEscolhida = document.getElementById(posicaoCarta)
   
    for(let item in cartas){
  
    if(cartas[item].cartaPosicao1 == posicaoEscolhida|| cartas[item].cartaPosicao2 == posicaoEscolhida){
        posicaoEscolhida.setAttribute("src", cartas[item].cartaImagem)
        
        adicionarCarta(item)
        
    }
}

}

function adicionarCarta(item){
    console.log(item)
    if(cartas.escolhidas.carta1 == 0 ){

    cartas.escolhidas.carta1 = cartas[item].cartaNumero
    }else{
        cartas.escolhidas.carta2 = cartas[item].cartaNumero
        
        validarCarta()
          
    }
}

function validarCarta(){
   
    if(cartas.escolhidas.carta1 == cartas.escolhidas.carta2){
        let cartaString = 'carta'+ cartas.escolhidas.carta1
        cartas[cartaString].virada = true
        
    }else{
        cartas.escolhidas.carta1 = 0
        cartas.escolhidas.carta2 = 0
        

        setTimeout(()=>{
            for(let item in cartas){
            
                if(cartas[item].virada == false){
                    cartas[item].cartaPosicao1.setAttribute("src", "./img/coringa.png")
                    cartas[item].cartaPosicao2.setAttribute("src", "./img/coringa.png")
                }
            }
        }, 1000) 
    } 
}
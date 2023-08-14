let jhonVida = 150;
let jhonAtaque = 30;

let gustavoVida = 140;
let gustavoAtaque = 30;

let duduVida = 130;
let duduAtaque = 40;

let kaniaVida = 140;
let kaniaAtaque = 40;
let jogador = ''
let jogadorVida ;
let jogadorAtaque ;
let vidaJ = document.querySelector('.vidaJ')
let card1 = document.querySelector('.card1')
let card2 = document.querySelector('.card2')
let derrota = document.querySelector('.derrota')
let funcionamento = document.querySelector('.funcionamento')
let botaoAtaqueA = document.querySelector('#atacarA')
let escolhaJhon = document.querySelector('#eu')
let escolhaGustavo = document.querySelector('#gustavo')
let escolhaDudu= document.querySelector('#dudu')
let escolhaKania = document.querySelector('#kania')
let nome = document.querySelector('#vida-minha')
let nomeInimigo = document.querySelector('#vida-inimigo')
let jhonNome = document.createTextNode('Jhon: ' +jhonVida + ' \u2764\uFE0F' )
let gustavoNome = document.createTextNode('Gustavo: ' + gustavoVida+ ' \u2764\uFE0F')
let duduNome = document.createTextNode('Dudu: '+ duduVida+ ' \u2764\uFE0F')
let kaniaNome = document.createTextNode('Kania: '+ kaniaVida+ ' \u2764\uFE0F')
let jogo = document.querySelector('.jogo');
let container = document.querySelector('.container')
let habilidadeJhon = document.createTextNode('Dançar \uD83C\uDFB6')
let habilidadeGustavo = document.createTextNode('Malhar \uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F')
let habilidadeDudu = document.createTextNode('Arremessar \uD83C\uDFC0')
let habilidadeKania = document.createTextNode('Acelerar \uD83D\uDE97')
let inimigoVida = 250;
let inimigoFoto = document.querySelector('#voce');
let voceFoto = document.querySelector('#inimigo')
let vidaInimigo = document.querySelector('#vida-inimigo')
let botaoAtaque = document.querySelector('.ataqueJ');
let botaoHabilidade = document.querySelector('.habilidadeJ')
let textoDuelo = document.querySelector('.textoDuelo')
let fabioAtaque = 40;
let vitoria = document.querySelector('.vitoria');
let botaoAtaqueH =document.querySelector('#atacarH')
let body = document.querySelector('.body')
let turnos2 = 3;
let habilidadeVezes;
let botaoHabilidade2 = document.querySelector('#habilidade2')
let bola = document.querySelector('.bola')
let carro =  document.querySelector('.carro')










escolhaJhon.addEventListener('click',function(){
    jogador = 'Jhon: '
    jogadorVida = 150;
    jogadorAtaque = 30;
    container.style.display = 'none';
    let inimigoNome = document.createTextNode('Fabio: ' +inimigoVida +' \u2764\uFE0F')
    jogo.style.display = 'block';
    nome.appendChild(jhonNome);
    botaoHabilidade.appendChild(habilidadeJhon)
    vidaInimigo.appendChild(inimigoNome)
    body.style.backgroundColor = 'rgba(204, 204, 204, 0.962)'
    voceFoto.src = 'Jhon2-removebg-preview.png'




 

    botaoAtaque.addEventListener('click', function(){   
        let gerador = Math.floor(Math.random()*10);
        let geradorFabio = Math.floor(Math.random()*10);
        console.log(gerador)  
        if(gerador<10){
        voceFoto.style.animation = 'ataque 0.5s 2 alternate'
        inimigoVida -= jhonAtaque;
        setTimeout(animacao,2000);
        setTimeout(animacao,5100)
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        botaoHabilidade2.style.display = 'none'
        let texto = document.createTextNode('Voce Causou ' + jhonAtaque + ' de dano ao Fabio')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(voltaBatalha,3000)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }
        else{
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        textoErro= document.createTextNode('Você errou o ataque KKKKKK')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(textoErro)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }                                                           
        if(inimigoVida<=0){
           
            inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
            vidaInimigo.replaceChildren(inimigoNome);
            
               setTimeout(() => {
                inimigoFoto.src = 'vilaoMorto2.png'
                inimigoFoto.style.animation = 'none'
                inimigoFoto.style.height = '300px'
                
                
               }, 500); 
          
            
            setTimeout(() => {
                funcionamento.style.display = 'none';
                vitoriaTexto = document.createTextNode('Podzin dos guri ta liberado #paz')
                vitoria.replaceChildren(vitoriaTexto);
                
                vitoria.style.display = 'block';
                card2.style.display = 'none';
                card1.style.marginLeft = '700px'
                card1.style.marginTop = '10px'
                nome.style.display = 'none';
                voceFoto.style.height = '400px'
                voceFoto.style.width= '400px'
                
                
    
            }, 2000);
            

        }
      
        
        

        
    })
    botaoHabilidade.addEventListener('click',function(){
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        voceFoto.style.animation = 'danca 0.2s 10 alternate'
        setTimeout(animacao,2000);
        let texto = document.createTextNode('Jhon meteu o passinho (ele dança muito)')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabio,4000)
        setTimeout(voltaBatalhaHabilidade,7000)  
        botaoHabilidade2.replaceChildren(habilidadeJhon)
        let turnos = 3;
        botaoHabilidade2.addEventListener('click',function(){
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        voceFoto.style.animation = 'danca 0.2s 10 alternate'
        setTimeout(animacao,2000);
        texto = document.createTextNode('Dansa gatinho dansa')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabio,4000)
        setTimeout(voltaBatalhaHabilidade,7000)  
        turnos = 3;
        })
        
     
        
        
       
            botaoAtaqueH.addEventListener('click',function(){
            voceFoto.style.animation = 'ataque 0.5s 2 alternate'
            inimigoVida -= jhonAtaque;
            setTimeout(animacao,2000);
            botaoAtaqueH.style.display = 'none';
            botaoHabilidade.style.display = 'none'
            let texto = document.createTextNode('Voce Causou ' + jhonAtaque + ' de dano ao Fabio')
            textoDuelo.style.display = 'block'
            textoDuelo.replaceChildren(texto)
            botaoAtaqueH.style.display = 'none';
            inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
            vidaInimigo.replaceChildren(inimigoNome); 
            turnos --;
            console.log(turnos)
            textoFabioParado = document.createTextNode('Fabio continua em choque com sua malemolencia(' + turnos +' turno(s) sem atacar)' )
            setTimeout(function(){
            textoDuelo.replaceChildren(textoFabioParado)
            textoDuelo.style.display = 'block'}
            ,2000);
            
            if(inimigoVida<=0){
           
                inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);
                
                   setTimeout(() => {
                    inimigoFoto.src = 'vilaoMorto2.png'
                    inimigoFoto.style.animation = 'none'
                    
                    
                   }, 500); 
              
                
                setTimeout(() => {
                    funcionamento.style.display = 'none';
                    vitoria.style.display = 'block';
                    card2.style.display = 'none';
                    card1.style.marginLeft = '700px'
                    nome.style.display = 'none';
                    voceFoto.style.height = '400px'
                    voceFoto.style.width= '400px'
                    
                    
        
                }, 2000);
            }
            if(turnos==0){
                setTimeout(() => {
                textoFabioParado = document.createTextNode('Fabio está na ativa novamente, não vai sair do portão em!' )
                textoDuelo.replaceChildren(textoFabioParado)
                botaoAtaqueH.style.display = 'none';
                }, 2000);
                setTimeout(voltaBatalhaTurnos,4000)
                botaoAtaqueA.addEventListener('click',function(){
                    let gerador = Math.floor(Math.random()*10);
                    if(gerador<9){
                        botaoAtaqueA.style.display = 'none';
                        botaoAtaqueH.style.display = 'none';
                        voceFoto.style.animation = 'ataque 0.5s 2 alternate'
                        inimigoVida -= jhonAtaque;
                        setTimeout(animacao,2000);
                        setTimeout(fabioAtacando,3000)
                        setTimeout(animacao,5100)
                        botaoAtaque.style.display = 'none';
                        botaoHabilidade.style.display = 'none'
                        let texto = document.createTextNode('Voce Causou ' + jhonAtaque + ' de dano ao Fabio')
                        textoDuelo.style.display = 'block'
                        textoDuelo.replaceChildren(texto)
                        
                        setTimeout(ataqueInimigo,3000) 
                        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                        vidaInimigo.replaceChildren(inimigoNome);  
                        turnos2--
                        console.log(turnos2)
                    }   
                        else{
                            botaoAtaqueA.style.display = 'none';
                            botaoHabilidade.style.display = 'none'
                            textoErro= document.createTextNode('Você errou o ataque KKKKKK')
                            textoDuelo.style.display = 'block'
                            textoDuelo.replaceChildren(textoErro)
                            setTimeout(fabioAtacando,2500)
                            setTimeout(ataqueInimigo,3000) 
                            setTimeout(voltaBatalhaTurnos,5000)
                            inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                            vidaInimigo.replaceChildren(inimigoNome); 
                            turnos2--
                            }            
                
                    if(inimigoVida<=0){
           
                        inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                        vidaInimigo.replaceChildren(inimigoNome);
                        
                           setTimeout(() => {
                            inimigoFoto.src = 'vilaoMorto2.png'
                            inimigoFoto.style.animation = 'none'
                            
                            
                           }, 500); 
                      
                        
                        setTimeout(() => {
                            funcionamento.style.display = 'none';
                            vitoria.style.display = 'block';
                            card2.style.display = 'none';
                            card1.style.marginLeft = '700px'
                            nome.style.display = 'none';
                            voceFoto.style.height = '400px'
                            voceFoto.style.width= '400px'
                            
                            
                
                        }, 2000);
                    }
                    if(turnos2 == 0){
                        setTimeout(() => {
                            textoFabioParado = document.createTextNode('Sua habilidade voltou' )
                            textoDuelo.replaceChildren(textoFabioParado)
                            botaoAtaqueA.style.display = 'none';
                            }, 4000);
                            setTimeout(voltaBatalha2,6000)   
                    
                    }else{
                        setTimeout(voltaBatalhaTurnos,5000)
                        
                    }
                })
                    
                        
                    

                    
                    

                
            }
            else{
                setTimeout(voltaBatalhaHabilidade,6000)
            }
            
            
            
            
    
        
      
    
        })
    })

})






    
        


escolhaGustavo.addEventListener('click',function(){
    container.style.display = 'none';
    voceFoto.src = 'gustavo.png'
    jogo.style.display = 'block';
    nome.style.width = '200px'
    nome.appendChild(gustavoNome);
    let inimigoNome = document.createTextNode('Fabio: ' +inimigoVida +' \u2764\uFE0F')
    vidaInimigo.appendChild(inimigoNome)    
    botaoHabilidade.appendChild(habilidadeGustavo)
    body.style.backgroundColor = 'rgba(204, 204, 204, 0.962)'
    jogador = 'Gustavo: '
    jogadorVida = 140;
    jogadorAtaque = 30;
    
    
  
    
    botaoAtaque.addEventListener('click', function(){   
        let gerador = Math.floor(Math.random()*10);
        let geradorFabio = Math.floor(Math.random()*10);
        console.log(gerador)  
        if(gerador<10){
        voceFoto.style.animation = 'ataque 0.5s 2 alternate'
        inimigoVida -= jogadorAtaque;
        setTimeout(animacao,2000);
        setTimeout(animacao,5100)
        botaoAtaque.style.display = 'none';
        botaoHabilidade.replaceChildren(habilidadeGustavo)
        botaoHabilidade.style.display = 'none'
        botaoHabilidade2.style.display = 'none'
        let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(voltaBatalha,3000)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }
        else{
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        textoErro= document.createTextNode('Você errou o ataque KKKKKK')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(textoErro)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }                                                           
        if(inimigoVida<=0){
           
            inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
            vidaInimigo.replaceChildren(inimigoNome);
            
               setTimeout(() => {
                inimigoFoto.src = 'vilaoMorto2.png'
                inimigoFoto.style.animation = 'none'
                inimigoFoto.style.height = '300px'
                
                
               }, 500); 
          
            
            setTimeout(() => {
                funcionamento.style.display = 'none';
                vitoriaTexto = document.createTextNode('Vo dormi em todas as aula sifoda')
                vitoria.replaceChildren(vitoriaTexto);
                vitoria.style.display = 'block';
                card2.style.display = 'none';
                card1.style.marginLeft = '700px'
                card1.style.marginTop = '10px'
                nome.style.display = 'none';
                voceFoto.style.height = '400px'
                voceFoto.style.width= '400px'
                
                
    
            }, 2000);
            

        }
    })
    botaoHabilidade.addEventListener('click',function(){
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        voceFoto.style.animation = 'malhar 0.2s 10 alternate'
        setTimeout(() => {
            voceFoto.src = 'gustavoH.png'
        }, 2000);
        setTimeout(animacao,2000);
        let texto = document.createTextNode('Deus me Perdoe, FAKE NATYYY!!!!')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabioGu,4000)
        setTimeout(voltaBatalhaTurnos,7000) 
        jogadorVida +=30;
        jogadorAtaque += 10;
        nomeVida = document.createTextNode(jogador + jogadorVida + ' \u2764\uFE0F' )
        nome.replaceChildren(nomeVida);
        console.log(jogadorVida);
        let turnos2 = 3;
        botaoHabilidade2.replaceChildren(habilidadeGustavo)
        
        botaoHabilidade2.addEventListener('click',function(){
        botaoAtaque.style.display = 'none';
        botaoHabilidade2.style.display = 'none'
        voceFoto.style.animation = 'malhar 0.2s 10 alternate'
        setTimeout(() => {
            voceFoto.src = 'gustavoH.png'
        }, 2000);
        setTimeout(animacao,2000);
        let texto = document.createTextNode('Parece que você gosta do suco, não é mesmo?')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabioGu,4000)
        setTimeout(voltaBatalhaTurnos,7000) 
        jogadorVida +=30;
        jogadorAtaque += 10;
        nomeVida = document.createTextNode(jogador + jogadorVida + ' \u2764\uFE0F' )
        nome.replaceChildren(nomeVida);
        console.log(jogadorVida);
        turnos2 = 3;
            
        })
        
        
        botaoAtaqueA.addEventListener('click',function(){
            let gerador = Math.floor(Math.random()*10);
            if(gerador<9){
                botaoAtaqueA.style.display = 'none';
                botaoAtaqueH.style.display = 'none';
                voceFoto.style.animation = 'ataque 0.5s 2 alternate'
                inimigoVida -= jogadorAtaque
                setTimeout(animacao,2000);
                setTimeout(fabioAtacando,3000)
                setTimeout(animacao,5100)
                botaoAtaque.style.display = 'none';
                botaoHabilidade2.style.display = 'none'
                let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
                textoDuelo.style.display = 'block'
                textoDuelo.replaceChildren(texto);
                setTimeout(ataqueInimigo,3000) 
                inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);  
                turnos2--
                console.log(turnos2)
            }   
                else{
                    botaoAtaqueA.style.display = 'none';
                    botaoHabilidade.style.display = 'none'
                    textoErro= document.createTextNode('Você errou o ataque KKKKKK')
                    textoDuelo.style.display = 'block'
                    textoDuelo.replaceChildren(textoErro)
                    setTimeout(fabioAtacando,2500)
                    setTimeout(ataqueInimigo,3000) 
                    setTimeout(voltaBatalhaTurnos,5000)
                    inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                    vidaInimigo.replaceChildren(inimigoNome); 
                    turnos2--
                    }            
        
            if(inimigoVida<=0){
   
                inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);
                
                   setTimeout(() => {
                    inimigoFoto.src = 'vilaoMorto2.png'
                    inimigoFoto.style.animation = 'none'
                    inimigoFoto.style.height = '300px'
                    
                    
                   }, 500); 
              
                
                setTimeout(() => {
                    funcionamento.style.display = 'none';
                    vitoriaTexto = document.createTextNode('Bela mãe, amigo!')
                    vitoria.replaceChildren(vitoriaTexto);
                    vitoria.style.display = 'block';
                    card2.style.display = 'none';
                    card1.style.marginLeft = '700px'
                    nome.style.display = 'none';
                    voceFoto.style.height = '400px'
                    voceFoto.style.width= '400px'
                    
                    
        
                }, 2000);
            }
            if(turnos2 == 0){
                setTimeout(() => {
                    textoFabioParado = document.createTextNode('Sua habilidade voltou' )
                    textoDuelo.replaceChildren(textoFabioParado)
                    botaoAtaqueA.style.display = 'none';
                    }, 4000);
                    setTimeout(voltaBatalha2,6000)   
            
            }else{
                setTimeout(voltaBatalhaTurnos,5000)
                
            }
        })
       
    
    })
})
escolhaDudu.addEventListener('click',function(){
    container.style.display = 'none';
    voceFoto.src = 'dudu.png'
    jogo.style.display = 'block';
    nome.appendChild(duduNome);
    botaoHabilidade.appendChild(habilidadeDudu)
    let inimigoNome = document.createTextNode('Fabio: ' +inimigoVida +' \u2764\uFE0F')
    vidaInimigo.appendChild(inimigoNome) 
    jogadorAtaque = 40;
    jogadorVida = 130;
    body.style.backgroundColor = 'rgba(204, 204, 204, 0.962)'
    jogador = 'Dudu: '
    funcionamento.style.width = '1000px'
    botaoAtaque.addEventListener('click', function(){   
        let gerador = Math.floor(Math.random()*10);
        let geradorFabio = Math.floor(Math.random()*10);
        console.log(gerador)  
        if(gerador<10){
        voceFoto.style.animation = 'ataque 0.5s 2 alternate'
        inimigoVida -= jogadorAtaque;
        setTimeout(animacao,2000);
        setTimeout(animacao,5100)
        botaoAtaque.style.display = 'none';
        botaoHabilidade.replaceChildren(habilidadeDudu)
        botaoHabilidade.style.display = 'none'
        botaoHabilidade2.style.display = 'none'
        let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(voltaBatalha,3000)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }
        else{
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        textoErro= document.createTextNode('Você errou o ataque KKKKKK')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(textoErro)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }                                                           
        if(inimigoVida<=0){
            jogadorVida ==1000;
            inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
            vidaInimigo.replaceChildren(inimigoNome);
           
            
               setTimeout(() => {
                inimigoFoto.src = 'vilaoMorto2.png'
                inimigoFoto.style.animation = 'none'
                inimigoFoto.style.height = '300px'
                
                
               }, 500); 
          
            
            setTimeout(() => {
                funcionamento.style.display = 'none';
                vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
                vitoria.replaceChildren(vitoriaTexto);
                vitoria.style.display = 'block';
                card2.style.display = 'none';
                card1.style.marginLeft = '700px'
                card1.style.marginTop = '10px'
                nome.style.display = 'none';
                voceFoto.style.height = '400px'
                voceFoto.style.width= '400px'
                
                
    
            }, 2000);
            

        }

    })
    botaoHabilidade.addEventListener('click',function(){
            
            setTimeout(animacao,2000);
            let arremessoChance = Math.floor(Math.random()*10)
            console.log(arremessoChance)
            botaoHabilidade2.replaceChildren(habilidadeDudu)
            botaoHabilidade2.addEventListener('click',function(){
                setTimeout(animacao,2000);
                let arremessoChance = Math.floor(Math.random()*10)
                if(arremessoChance>=4){
                    bola.style.display = 'block'
                    voceFoto.style.animation = 'arremesso2 1s'
                    bola.style.animation = 'arremesso 4s'
                    botaoAtaque.style.display = 'none';
                    botaoHabilidade.style.display = 'none'
                    botaoHabilidade2.style.display = 'none'
                    bola.style.display = 'block'
                    let texto = document.createTextNode('A quadra inteira vai a loucura, você acertou um aremesso de 3 pontos')
                    textoDuelo.style.display = 'block'
                    textoDuelo.replaceChildren(texto)
                    setTimeout(falaFabioDudu,4000)
                    setTimeout(voltaBatalhaHabilidadeGu,7000)
                    let turnos = 3;
                    if(inimigoVida<=0){
       
                        inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                        vidaInimigo.replaceChildren(inimigoNome);
                        jogadorVida == 1000;
                        
                           setTimeout(() => {
                            inimigoFoto.src = 'vilaoMorto2.png'
                            inimigoFoto.style.animation = 'none'
                            inimigoFoto.style.height = '300px'
                            
                            
                           }, 500); 
                      
                        
                        setTimeout(() => {
                            funcionamento.style.display = 'none';
                            vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
                            vitoria.replaceChildren(vitoriaTexto);
                            vitoria.style.display = 'block';
                            card2.style.display = 'none';
                            card1.style.marginLeft = '700px'
                            nome.style.display = 'none';
                            voceFoto.style.height = '400px'
                            voceFoto.style.width= '400px'
                            
                            
                
                        }, 2000);
                    }
                    
                    }
                    else{
                        botaoHabilidade2.style.display = 'none';
                        bola.style.display = 'block'
                        voceFoto.style.animation = 'arremesso2 1s'
                        bola.style.animation = 'arremesso 4s'
                        botaoAtaque.style.display = 'none';
                        botaoHabilidade.style.display = 'none'
                        let texto = document.createTextNode('Você errou o arremesso de 3 pontos')
                        textoDuelo.replaceChildren(texto)
                        textoDuelo.style.display = 'block'
                        setTimeout(falaFabioDuduErro,4000)
                        setTimeout(voltaBatalhaHabilidadeGu,7000)     
                       
                    }

            })

            if(arremessoChance>=4){
            voceFoto.style.animation = 'arremesso2 1s'
            bola.style.display = 'block'
            bola.style.animation = 'arremesso 4s'
            botaoAtaque.style.display = 'none';
            botaoHabilidade.style.display = 'none'
            let texto = document.createTextNode('A quadra inteira vai a loucura, você acertou um arremesso de 3 pontos')
            textoDuelo.style.display = 'block'
            textoDuelo.replaceChildren(texto)
            setTimeout(falaFabioDudu,4000)
            setTimeout(voltaBatalhaTurnos,7000)  ,
            botaoHabilidade2.replaceChildren(habilidadeDudu)
            if(inimigoVida<=0){
       
                inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);
                jogadorVida == 1000;
                
                   setTimeout(() => {
                    inimigoFoto.src = 'vilaoMorto2.png'
                    inimigoFoto.style.animation = 'none'
                    inimigoFoto.style.height = '300px'
                    
                    
                   }, 500); 
              
                
                setTimeout(() => {
                    funcionamento.style.display = 'none';
                    vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
                    vitoria.replaceChildren(vitoriaTexto);
                    vitoria.style.display = 'block';
                    card2.style.display = 'none';
                    card1.style.marginLeft = '700px'
                    nome.style.display = 'none';
                    voceFoto.style.height = '400px'
                    voceFoto.style.width= '400px'
                    
                    
        
                }, 2000);
            }
            let turnos = 3;
            }
            else{
                bola.style.display = 'block'
                voceFoto.style.animation = 'arremesso2 1s'
                bola.style.animation = 'arremesso 4s'
                botaoAtaque.style.display = 'none';
                botaoHabilidade.style.display = 'none'
                let texto = document.createTextNode('Você errou o arremesso de 3 pontos')
                textoDuelo.replaceChildren(texto)
                textoDuelo.style.display = 'block'
                setTimeout(falaFabioDuduErro,4000)
                setTimeout(voltaBatalhaTurnos,7000)     
               
            }
            botaoAtaqueA.addEventListener('click',function(){
                let gerador = Math.floor(Math.random()*10);
                if(gerador<9){
                    botaoAtaqueA.style.display = 'none';
                    botaoAtaqueH.style.display = 'none';
                    voceFoto.style.animation = 'ataque 0.5s 2 alternate'
                    inimigoVida -= jogadorAtaque
                    setTimeout(animacao,2000);
                    setTimeout(fabioAtacando,3000)
                    setTimeout(animacao,5100)
                    botaoAtaque.style.display = 'none';
                    botaoHabilidade2.style.display = 'none'
                    let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
                    textoDuelo.style.display = 'block'
                    textoDuelo.replaceChildren(texto);
                    setTimeout(ataqueInimigo,3000) 
                    inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                    vidaInimigo.replaceChildren(inimigoNome);  
                    turnos2--
                    console.log(turnos2)
                }   
                    else{
                        botaoAtaqueA.style.display = 'none';
                        botaoHabilidade.style.display = 'none'
                        textoErro= document.createTextNode('Você errou o ataque KKKKKK')
                        textoDuelo.style.display = 'block'
                        textoDuelo.replaceChildren(textoErro)
                        setTimeout(fabioAtacando,2500)
                        setTimeout(ataqueInimigo,3000) 
                        setTimeout(voltaBatalhaTurnos,5000)
                        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                        vidaInimigo.replaceChildren(inimigoNome); 
                        turnos2--
                        }            
            
                if(inimigoVida<=0){
       
                    inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                    vidaInimigo.replaceChildren(inimigoNome);
                    jogadorVida == 1000;
                    
                       setTimeout(() => {
                        inimigoFoto.src = 'vilaoMorto2.png'
                        inimigoFoto.style.animation = 'none'
                        inimigoFoto.style.height = '300px'
                        
                        
                       }, 500); 
                  
                    
                    setTimeout(() => {
                        funcionamento.style.display = 'none';
                        vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
                        vitoria.replaceChildren(vitoriaTexto);
                        vitoria.style.display = 'block';
                        card2.style.display = 'none';
                        card1.style.marginLeft = '700px'
                        nome.style.display = 'none';
                        voceFoto.style.height = '400px'
                        voceFoto.style.width= '400px'
                        
                        
            
                    }, 2000);
                }
                if(turnos2 == 0){
                    setTimeout(() => {
                        textoFabioParado = document.createTextNode('Sua habilidade voltou' )
                        textoDuelo.replaceChildren(textoFabioParado)
                        botaoAtaqueA.style.display = 'none';
                        }, 4000);
                        setTimeout(voltaBatalha2,6000)   
                
                }else{
                    setTimeout(voltaBatalhaTurnos,5000)
                    
                }
            })

    })
})

escolhaKania.addEventListener('click',function(){
    voceFoto.src = 'Kania.png'
    container.style.display = 'none';
    jogo.style.display = 'block';
    let inimigoNome = document.createTextNode('Fabio: ' +inimigoVida +' \u2764\uFE0F')
    vidaInimigo.appendChild(inimigoNome) 
    nome.appendChild(kaniaNome);
    botaoHabilidade.appendChild(habilidadeKania)
    vidaInimigo.appendChild(inimigoNome)
    jogadorVida = 140;
    jogadorAtaque = 40;
    body.style.backgroundColor = 'rgba(204, 204, 204, 0.962)'
    jogador = 'Kania: '
    funcionamento.style.width = '950px'
    botaoAtaque.addEventListener('click', function(){   
        let gerador = Math.floor(Math.random()*10);
        let geradorFabio = Math.floor(Math.random()*10);
        console.log(gerador)  
        if(gerador<10){
        voceFoto.style.animation = 'ataque 0.5s 2 alternate'
        inimigoVida -= jogadorAtaque;
        setTimeout(animacao,2000);
        setTimeout(animacao,5100)
        botaoAtaque.style.display = 'none';
        botaoHabilidade.replaceChildren(habilidadeKania)
        botaoHabilidade.style.display = 'none'
        botaoHabilidade2.style.display = 'none'
        let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(voltaBatalha,3000)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }
        else{
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        textoErro= document.createTextNode('Você errou o ataque KKKKKK')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(textoErro)
        setTimeout(fabioAtacando,2500)
        setTimeout(ataqueInimigo,3000) 
        setTimeout(voltaBatalha,5000)
        inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome); 
        }                                                           
        if(inimigoVida<=0){
            jogadorVida ==1000;
            inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
            vidaInimigo.replaceChildren(inimigoNome);
           
            
               setTimeout(() => {
                inimigoFoto.src = 'vilaoMorto2.png'
                inimigoFoto.style.animation = 'none'
                inimigoFoto.style.height = '300px'
                
                
               }, 500); 
          
            
            setTimeout(() => {
                funcionamento.style.display = 'none';
                vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
                vitoria.replaceChildren(vitoriaTexto);
                vitoria.style.display = 'block';
                card2.style.display = 'none';
                card1.style.marginLeft = '700px'
                card1.style.marginTop = '10px'
                nome.style.display = 'none';
                voceFoto.style.height = '400px'
                voceFoto.style.width= '400px'
                
                
    
            }, 2000);
            

        }

    })
    botaoHabilidade.addEventListener('click',function(){
        
        botaoAtaque.style.display = 'none';
        botaoHabilidade.style.display = 'none'
        setTimeout(() => {
            carro.style.display = 'block'
            carro.style.animation = 'atropelo 1s'
            voceFoto.style.display = 'none';
        }, 6000);

        setTimeout(animacao,2000);
        let texto = document.createTextNode('Ó o carro da rua passando no seu ovo (Vida Fabio:-60) (Dano Fabio:-10)')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabioKania,4000)
        setTimeout(voltaBatalhaTurnos,7000) 
        nomeVida = document.createTextNode(jogador + jogadorVida + ' \u2764\uFE0F' )
        nome.replaceChildren(nomeVida);
        console.log(jogadorVida);
        let turnos2 = 3;
        botaoHabilidade2.replaceChildren(habilidadeKania)
        botaoHabilidade2.addEventListener('click',function(){
        botaoAtaque.style.display = 'none';
        botaoHabilidade2.style.display = 'none'
        botaoHabilidade.style.display = 'none'
        setTimeout(() => {
            carro.style.display = 'block'
            carro.style.animation = 'atropelo 1s'
            voceFoto.style.display = 'none';
        }, 6000);

        setTimeout(animacao,2000);
        let texto = document.createTextNode('Cuidado DegoDego (Vida Fabio: -60) (Dano Fabio: - 10)')
        textoDuelo.style.display = 'block'
        textoDuelo.replaceChildren(texto)
        setTimeout(falaFabioKania,4000)
        setTimeout(voltaBatalhaTurnos,7000) 

        nomeVida = document.createTextNode(jogador + jogadorVida + ' \u2764\uFE0F' )
        nome.replaceChildren(nomeVida);
        console.log(jogadorVida);
        turnos2 = 3;
            
        })
        
        
        botaoAtaqueA.addEventListener('click',function(){
            let gerador = Math.floor(Math.random()*10);
            if(gerador<9){
                botaoAtaqueA.style.display = 'none';
                botaoAtaqueH.style.display = 'none';
                voceFoto.style.animation = 'ataque 0.5s 2 alternate'
                inimigoVida -= jogadorAtaque
                setTimeout(animacao,2000);
                setTimeout(fabioAtacando,3000)
                setTimeout(animacao,5100)
                botaoAtaque.style.display = 'none';
                botaoHabilidade2.style.display = 'none'
                let texto = document.createTextNode('Voce Causou ' + jogadorAtaque + ' de dano ao Fabio')
                textoDuelo.style.display = 'block'
                textoDuelo.replaceChildren(texto);
                setTimeout(ataqueInimigo,3000) 
                inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);  
                turnos2--
                console.log(turnos2)
            }   
                else{
                    botaoAtaqueA.style.display = 'none';
                    botaoHabilidade.style.display = 'none'
                    textoErro= document.createTextNode('Você errou o ataque KKKKKK')
                    textoDuelo.style.display = 'block'
                    textoDuelo.replaceChildren(textoErro)
                    setTimeout(fabioAtacando,2500)
                    setTimeout(ataqueInimigo,3000) 
                    setTimeout(voltaBatalhaTurnos,5000)
                    inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
                    vidaInimigo.replaceChildren(inimigoNome); 
                    turnos2--
                    }            
        
            if(inimigoVida<=0){
   
                inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
                vidaInimigo.replaceChildren(inimigoNome);
                
                   setTimeout(() => {
                    inimigoFoto.src = 'vilaoMorto2.png'
                    inimigoFoto.style.animation = 'none'
                    inimigoFoto.style.height = '300px'
                    
                    
                   }, 500); 
              
                
                setTimeout(() => {
                    funcionamento.style.display = 'none';
                    vitoriaTexto = document.createTextNode('Vo pra aula hoje não slc')
                    vitoria.replaceChildren(vitoriaTexto);
                    vitoria.style.display = 'block';
                    card2.style.display = 'none';
                    card1.style.marginLeft = '700px'
                    nome.style.display = 'none';
                    voceFoto.style.height = '400px'
                    voceFoto.style.width= '400px'
                    
                    
        
                }, 2000);
            }
            if(turnos2 == 0){
                setTimeout(() => {
                    textoFabioParado = document.createTextNode('Sua habilidade voltou' )
                    textoDuelo.replaceChildren(textoFabioParado)
                    botaoAtaqueA.style.display = 'none';
                    }, 4000);
                    setTimeout(voltaBatalha2,6000)   
            
            }else{
                setTimeout(voltaBatalhaTurnos,5000)
                
            }
        })
       
    
    })
    

})



function voltaBatalha(){
    textoDuelo.style.display = 'none';
    botaoAtaqueH.style.display = 'none';
    botaoAtaque.style.display = 'inline-block'
    botaoHabilidade.style.display = 'inline-block'
        
}
function voltaBatalha2(){
    textoDuelo.style.display = 'none';
    botaoAtaqueH.style.display = 'none';
    botaoAtaque.style.display = 'inline-block'
    botaoHabilidade2.style.display = 'inline-block'
        
}
function voltaBatalhaTurnos(){
    textoDuelo.style.display = 'none';
    botaoAtaqueH.style.display = 'none';
    botaoAtaqueA.style.display = 'inline-block'
    botaoAtaqueA.style.marginLeft = '250px'
    botaoAtaque.style.display = 'none';
    bola.style.display = 'none';
    carro.style.display = 'none';
    voceFoto.style.display = 'block'
    

   
        
}
function voltaBatalhaHabilidade(){
    textoDuelo.style.display = 'none';
    botaoAtaqueH.style.display = 'inline-block';
    botaoAtaqueH.style.marginLeft = '250px'
    
        
}
function voltaBatalhaHabilidadeGu(){
    textoDuelo.style.display = 'none';
    botaoAtaque.style.display = 'inline-block';
    botaoAtaque.style.marginLeft = '250px'
    
        
}

function ataqueInimigo(){
    jogadorVida-= fabioAtaque;
    nomeVida = document.createTextNode(jogador + jogadorVida + ' \u2764\uFE0F' )
    nome.replaceChildren(nomeVida);
    botaoAtaque.style.display = 'none';
    botaoHabilidade.style.display = 'none'
    textoDuelo.style.display = 'block'
    textoFabio = document.createTextNode('Fabio causou ' + fabioAtaque+ ' de dano em você')
    textoDuelo.replaceChildren(textoFabio)
    textoDuelo.style.animation = 'typing 1s'
    console.log(jogadorVida);
    if(inimigoVida>0){
    if(jogadorVida<=0 && jogador=='Jhon: '){
        voceFoto.src = 'jhonMorto.png'
        nomeMorte = document.createTextNode(jogador + ' 0 \u2764\uFE0F');
        nome.replaceChildren(nomeMorte);
        voceFoto.style.animation = 'none'
        voceFoto.style.transform = 'rotate(-90deg)'
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            derrota.style.display = 'block';
            card1.style.display = 'none';
            card2.style.marginLeft = '700px'
            vidaInimigo.style.display = 'none';
            inimigoFoto.style.height = '600px'
            inimigoFoto.style.width= '600px'
            
            

        }, 2000);
        
       
       
       
        
    }
    else if(jogadorVida<=0 && jogador=='Gustavo: '){
        voceFoto.src = 'gustavoMorto.png'
        nomeMorte = document.createTextNode(jogador + ' 0 \u2764\uFE0F');
        nome.replaceChildren(nomeMorte);
        voceFoto.style.animation = 'none'
        voceFoto.style.transform = 'rotate(-90deg)'
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            derrota.style.display = 'block';
            card1.style.display = 'none';
            card2.style.marginLeft = '700px'
            vidaInimigo.style.display = 'none';
            inimigoFoto.style.height = '600px'
            inimigoFoto.style.width= '600px'
            
            

        }, 2000);

    }
    else if(jogadorVida<=0 && jogador=='Dudu: '){
        voceFoto.src = 'duduMorto.png'
        nomeMorte = document.createTextNode(jogador + ' 0 \u2764\uFE0F');
        nome.replaceChildren(nomeMorte);
        voceFoto.style.animation = 'none'
        voceFoto.style.transform = 'rotate(-90deg)'
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            derrota.style.display = 'block';
            card1.style.display = 'none';
            card2.style.marginLeft = '700px'
            vidaInimigo.style.display = 'none';
            inimigoFoto.style.height = '600px'
            inimigoFoto.style.width= '600px'
            
            

        }, 2000);

    }
    else if(jogadorVida<=0 && jogador=='Kania: '){
        voceFoto.src = 'kaniaMorto.png'
        nomeMorte = document.createTextNode(jogador + ' 0 \u2764\uFE0F');
        nome.replaceChildren(nomeMorte);
        voceFoto.style.animation = 'none'
        voceFoto.style.transform = 'rotate(-90deg)'
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            derrota.style.display = 'block';
            card1.style.display = 'none';
            card2.style.marginLeft = '700px'
            vidaInimigo.style.display = 'none';
            inimigoFoto.style.height = '600px'
            inimigoFoto.style.width= '600px'
            
            

        }, 2000);

    }
    

}
}
function falaFabio(){
    let fabioFala = document.createTextNode('Fabio ficou hipinotizado com seu molejo (3 turnos sem atacar)')
    textoDuelo.style.display = 'block'
    textoDuelo.replaceChildren(fabioFala)
    textoDuelo.style.fontSize = '40px'


}
function falaFabioGu(){
    let fabioFala = document.createTextNode('Que fisico mais aesthetic (Vida:+30)   (Ataque: +10)')
    textoDuelo.style.display = 'block'
    textoDuelo.replaceChildren(fabioFala)
    textoDuelo.style.fontSize = '40px'


}
function falaFabioDudu(){
    let fabioFala = document.createTextNode('Esse cara é bão dmais, 100 de dano ao fabio')
    textoDuelo.style.display = 'block'
    textoDuelo.replaceChildren(fabioFala)
    textoDuelo.style.fontSize = '40px'
    inimigoVida -=100;
    inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
    vidaInimigo.replaceChildren(inimigoNome)
    bola.style.display = 'none'

    if(inimigoVida<=0){
       
        inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome);
        jogadorVida == 1000;
        
           setTimeout(() => {
            inimigoFoto.src = 'vilaoMorto2.png'
            inimigoFoto.style.animation = 'none'
            inimigoFoto.style.height = '300px'
            
            
           }, 500); 
      
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
            vitoria.replaceChildren(vitoriaTexto);
            vitoria.style.display = 'block';
            card2.style.display = 'none';
            card1.style.marginLeft = '700px'
            nome.style.display = 'none';
            voceFoto.style.height = '400px'
            voceFoto.style.width= '400px'
            
            

        }, 2000);
    }



}
function falaFabioKania(){
    let fabioFala = document.createTextNode('Fabio: Comprou carteira filha da #@$@')
    textoDuelo.style.display = 'block'
    textoDuelo.replaceChildren(fabioFala)
    textoDuelo.style.fontSize = '40px'
    inimigoVida -=60;
    fabioAtaque -= 10;
    inimigoNome = document.createTextNode('Fabio: ' +inimigoVida + ' \u2764\uFE0F')
    vidaInimigo.replaceChildren(inimigoNome)
    bola.style.display = 'none'
    if(inimigoVida<=0){
       
        inimigoNome = document.createTextNode('Fabio: 0 \u2764\uFE0F')
        vidaInimigo.replaceChildren(inimigoNome);
        jogadorVida == 1000;
        
           setTimeout(() => {
            inimigoFoto.src = 'vilaoMorto2.png'
            inimigoFoto.style.animation = 'none'
            inimigoFoto.style.height = '300px'
            
            
           }, 500); 
      
        
        setTimeout(() => {
            funcionamento.style.display = 'none';
            vitoriaTexto = document.createTextNode('Arruma o aro do basquete Silvany')
            vitoria.replaceChildren(vitoriaTexto);
            vitoria.style.display = 'block';
            card2.style.display = 'none';
            card1.style.marginLeft = '700px'
            nome.style.display = 'none';
            voceFoto.style.height = '400px'
            voceFoto.style.width= '400px'
            
            

        }, 2000);
    }




}
function falaFabioDuduErro(){
    let fabioFala = document.createTextNode('Fabio: Isso foi patético')
    textoDuelo.style.display = 'block'
    textoDuelo.replaceChildren(fabioFala)
    textoDuelo.style.fontSize = '40px'
    bola.style.display = 'none'
    


}

    

function animacao(){
    voceFoto.style.animation = 'animacaoLuta 0.4s infinite alternate'
    inimigoFoto.style.animation = 'animacaoLuta 0.4s infinite alternate'
}
function fabioAtacando(){
    inimigoFoto.style.animation = 'ataqueFabio 0.5s 2 alternate'

}

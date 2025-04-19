var controles = document.createElement('div')

        
let posi = 0
let posileft = 0
var bonecosp = document.createElement('div')
let ids = [
          'cabeca',
          'tronco',
          'braco-direito',
          'antebraco-direito',
          'braco-esquerdo',
          'antebraco-esquerdo',
          'coxa-direita',
          'canela-direita',
          'coxa-esquerda',
          'canela-esquerda'
        ];
        


var body = document.getElementById('bonecos')

        function logar(){
          
          let corpo = Array.from({ length: 10 }, () => document.createElement('div'));
          bonecosp.appendChild(corpo[0]); // cabeça
 corpo[0].appendChild(corpo[1]); // tronco
 corpo[0].appendChild(corpo[2]); // braço dir
 corpo[2].appendChild(corpo[3]); // antebraço dir
 corpo[0].appendChild(corpo[4]); // braço esq
 corpo[4].appendChild(corpo[5]); // antebraço esq
 corpo[1].appendChild(corpo[6]); // coxa dir
 corpo[6].appendChild(corpo[7]); // canela dir
 corpo[1].appendChild(corpo[8]); // coxa esq
 corpo[8].appendChild(corpo[9]); // canela esq
  

for (let i = 0; i < corpo.length; i++) {
  corpo[i].className = `${ids[i]}`; // já define com sufixo
}
 corpo[0].style.cssText = `
   width: 15px; height: 15px; border: 2px solid black;
   border-radius: 50%; position: absolute; left: 20px; top: 0px;
 `
 
 // tronco
 corpo[1].style.cssText = `
   width: 2px; height: 25px; background: black;
   position: absolute; top: 15px; left: 6px;
 `
 
 // braço direito
 corpo[2].style.cssText = `
   width: 15px; height: 2px; background: black;
   position: absolute; top: 18px; left: 8px;
   transform: rotate(25deg); transform-origin: left center;
 `
 
 // antebraço direito
 corpo[3].style.cssText = `
   width: 12px; height: 2px; background: black;
   position: absolute; left: 15px; top: 0;
   transform: rotate(20deg); transform-origin: left center;
 `
 
 // braço esquerdo (corrigido)
 corpo[4].style.cssText = `
   width: 15px; height: 2px; background: black;
   position: absolute; top: 18px; left: -7px;
   transform: rotate(-25deg); transform-origin: right center;
 `
 
 // antebraço esquerdo
 corpo[5].style.cssText = `
   width: 12px; height: 2px; background: black;
   position: absolute; left: -12px; top: 0;
   transform: rotate(-20deg); transform-origin: right center;
 `
 
 // coxa direita
 corpo[6].style.cssText = `
   width: 10px; height: 2px; background: black;
   position: absolute; top: 25px; left: 1px;
   transform: rotate(25deg); transform-origin: left center;
 `
 
 // perna direita
 corpo[7].style.cssText = `
   width: 10px; height: 2px; background: black;
   position: absolute; left: 10px; top: 0;
   transform: rotate(25deg); transform-origin: left center;
 `
 
 // coxa esquerda
 corpo[8].style.cssText = `
   width: 10px; height: 2px; background: black;
   position: absolute; top: 25px; left: -8px;
   transform: rotate(-25deg); transform-origin: right center;
 `
 
 // perna esquerda
 corpo[9].style.cssText = `
   width: 10px; height: 2px; background: black;
   position: absolute; left: -10px; top: 0;
   transform: rotate(-25deg); transform-origin: right center;
   }
   `
 
 
 
 // Estilização do boneco geral
 bonecosp.style.position = 'absolute';
 bonecosp.style.top = posi + 'px';
 bonecosp.style.left = posileft + 'px';
 bonecosp.style.width = '100px';
 bonecosp.style.height = '100px';
        controles.style.alignItems = 'center'
        controles.style.marginBottom = '70%'
        bonecosp.style.position = 'absolute'
        bonecosp.style.top = posi + 'px'
        bonecosp.style.left = posileft + 'px'
        body.appendChild(bonecosp)
        body.appendChild(controles)
        controles.appendChild(botao)
        }
        addEventListener("keydown", function(event) {
          const cabeca = document.querySelector('.cabeca');
          
          if (event.key === "w" || event.key === "s") {
              cabeca.id = 'anima';
          }
        
          if (event.key === "w") {
              posi -= 5;
              bonecosp.style.top = posi + 'px';
          }
          if (event.key === "s") {
              posi += 10;
              bonecosp.style.top = posi + 'px';
          }
        
          if (event.key === "a" || event.key === "d") {
              bonecosp.id = 'anima';
          }
        
          if (event.key === "d") {
              posileft += 10;
              bonecosp.style.left = posileft + 'px';
          }
        
          if (event.key === "a") {
              posileft -= 10;
              bonecosp.style.left = posileft + 'px';
          }
        });
        
        addEventListener('keyup', function (event) {
          const cabeca = document.querySelector('.cabeca');
        
          if (event.key === "w" || event.key === "s") {
              cabeca.id = 'parado';
          }
        
          if (event.key === "a" || event.key === "d") {
              bonecosp.id = 'parado';
          }
        });
        // Criando mais 3 botões
        // Criando mais 3 botões
const cima = document.createElement('button')
const baixo = document.createElement('button')
const esquerda = document.createElement('button')
const direita = document.createElement('button')

// Texto dos botões
cima.innerText = '↑'
baixo.innerText = '↓'
esquerda.innerText = '←'
direita.innerText = '→'

// Estilo dos botões
const botoes = [cima, baixo, esquerda, direita]
botoes.forEach(botao => {
  botao.style.width = '40px'
  botao.style.height = '40px'
  botao.style.margin = '2px'
  botao.style.background = 'red'
  botao.style.color = 'white'
  botao.style.fontWeight = 'bold'
  botao.style.border = 'none'
  botao.style.borderRadius = '4px'
})

// Container para layout
const botoesContainer = document.createElement('div')
botoesContainer.style.display = 'flex'
botoesContainer.style.flexDirection = 'column'
botoesContainer.style.alignItems = 'center'
botoesContainer.style.position = 'absolute'
botoesContainer.style.bottom = '10px'
botoesContainer.style.left = '50%'
botoesContainer.style.transform = 'translateX(-50%)'

// Layout tipo cruz
const meio = document.createElement('div')
meio.style.display = 'flex'
meio.appendChild(esquerda)
meio.appendChild(direita)

botoesContainer.appendChild(cima)
botoesContainer.appendChild(meio)
botoesContainer.appendChild(baixo)

document.body.appendChild(botoesContainer)
// Funções para movimentar com animação
let moveIntervalCima, moveIntervalBaixo, moveIntervalEsquerda, moveIntervalDireita;

// CIMA
cima.addEventListener('mousedown', () => {
  const cabeca = document.querySelector('.cabeca');
  cabeca.id = 'anima';
  moveIntervalCima = setInterval(() => {
    posi -= 5;
    bonecosp.style.top = posi + 'px';
  }, 50);
});
cima.addEventListener('mouseup', () => {
  clearInterval(moveIntervalCima);
  document.querySelector('.cabeca').id = 'parado';
});
cima.addEventListener('mouseleave', () => {
  clearInterval(moveIntervalCima);
  document.querySelector('.cabeca').id = 'parado';
});

// BAIXO
baixo.addEventListener('mousedown', () => {
  const cabeca = document.querySelector('.cabeca');
  cabeca.id = 'anima';
  moveIntervalBaixo = setInterval(() => {
    posi += 5;
    bonecosp.style.top = posi + 'px';
  }, 50);
});
baixo.addEventListener('mouseup', () => {
  clearInterval(moveIntervalBaixo);
  document.querySelector('.cabeca').id = 'parado';
});
baixo.addEventListener('mouseleave', () => {
  clearInterval(moveIntervalBaixo);
  document.querySelector('.cabeca').id = 'parado';
});

// ESQUERDA
esquerda.addEventListener('mousedown', () => {
  bonecosp.id = 'anima';
  moveIntervalEsquerda = setInterval(() => {
    posileft -= 5;
    bonecosp.style.left = posileft + 'px';
  }, 50);
});
esquerda.addEventListener('mouseup', () => {
  clearInterval(moveIntervalEsquerda);
  bonecosp.id = 'parado';
});
esquerda.addEventListener('mouseleave', () => {
  clearInterval(moveIntervalEsquerda);
  bonecosp.id = 'parado';
});

// DIREITA
direita.addEventListener('mousedown', () => {
  bonecosp.id = 'anima';
  moveIntervalDireita = setInterval(() => {
    posileft += 5;
    bonecosp.style.left = posileft + 'px';
  }, 50);
});
direita.addEventListener('mouseup', () => {
  clearInterval(moveIntervalDireita);
  bonecosp.id = 'parado';
});
direita.addEventListener('mouseleave', () => {
  clearInterval(moveIntervalDireita);
  bonecosp.id = 'parado';
});

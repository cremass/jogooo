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
// Criação dos 4 botões
let btnCima = document.createElement('button');
let btnBaixo = document.createElement('button');
let btnEsquerda = document.createElement('button');
let btnDireita = document.createElement('button');

btnCima.innerText = "↑";
btnBaixo.innerText = "↓";
btnEsquerda.innerText = "←";
btnDireita.innerText = "→";

// Estilo comum dos botões
[btnCima, btnBaixo, btnEsquerda, btnDireita].forEach(btn => {
  btn.style.width = '50px';
  btn.style.height = '50px';
  btn.style.margin = '5px';
  btn.style.fontSize = '20px';
});

// Layout dos controles
controles.style.display = 'flex';
controles.style.flexWrap = 'wrap';
controles.style.justifyContent = 'center';
controles.style.position = 'fixed';
controles.style.bottom = '10px';
controles.style.left = '50%';
controles.style.transform = 'translateX(-50%)';
controles.style.zIndex = '1000';

// Adiciona os botões
controles.appendChild(btnCima);
controles.appendChild(btnEsquerda);
controles.appendChild(btnDireita);
controles.appendChild(btnBaixo);

body.appendChild(controles);

// Variáveis de movimento
let intervaloCima, intervaloBaixo, intervaloEsquerda, intervaloDireita;
const cabeca = document.querySelector('.cabeca');

// Funções de movimento
function moverCima() {
  posi -= 5;
  bonecosp.style.top = posi + 'px';
  cabeca.id = 'anima';
}
function moverBaixo() {
  posi += 5;
  bonecosp.style.top = posi + 'px';
  cabeca.id = 'anima';
}
function moverEsquerda() {
  posileft -= 5;
  bonecosp.style.left = posileft + 'px';
  bonecosp.id = 'anima';
}
function moverDireita() {
  posileft += 5;
  bonecosp.style.left = posileft + 'px';
  bonecosp.id = 'anima';
}

// Toque: CIMA
btnCima.ontouchstart = () => {
  clearInterval(intervaloCima);
  moverCima();
  intervaloCima = setInterval(moverCima, 50);
};
btnCima.ontouchend = () => {
  clearInterval(intervaloCima);
  cabeca.id = 'parado';
};

// Toque: BAIXO
btnBaixo.ontouchstart = () => {
  clearInterval(intervaloBaixo);
  moverBaixo();
  intervaloBaixo = setInterval(moverBaixo, 50);
};
btnBaixo.ontouchend = () => {
  clearInterval(intervaloBaixo);
  cabeca.id = 'parado';
};

// Toque: ESQUERDA
btnEsquerda.ontouchstart = () => {
  clearInterval(intervaloEsquerda);
  moverEsquerda();
  intervaloEsquerda = setInterval(moverEsquerda, 50);
};
btnEsquerda.ontouchend = () => {
  clearInterval(intervaloEsquerda);
  bonecosp.id = 'parado';
};

// Toque: DIREITA
btnDireita.ontouchstart = () => {
  clearInterval(intervaloDireita);
  moverDireita();
  intervaloDireita = setInterval(moverDireita, 50);
};
btnDireita.ontouchend = () => {
  clearInterval(intervaloDireita);
  bonecosp.id = 'parado';
};

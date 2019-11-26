var telaAtiva = 0, opcao = 1;
var imgMenu; 
var imgEquipe; 
var imgJogo; 
var imgNave; 
var imgDisparo; 
var imgCoracao;
var imgANEL;
var imgESTRELA;
var imgCIRCULO;
var imgCRUZ;
var imgLOSANGO;
var imgSOL;
var imgPENTAGONO;
var imgPIRAMIDE;
var imgOSSO;
var imgCORACAO;
var imgELIPSE;
var imgLUA;
var imgPARALELE;
var imgFLECHA;
var imgHEXAGONO;
var imgESPADA;
var imgRETANGULO;
var imgTRAPEZIO;
var imgTRIANGULO;
var imgPAUS;
var imgQUADRADO;
var y = 150;

var xObj = 150, yObj = 100;
var xNave = 300, yNave = 500;
var xDisparo, yDisparo;
var vidasJogador = 3, vidasObj = 3;
var pontos = 0;
var atirando = false;

var obj;
var qntLoop = 0;

function setup() {
  createCanvas(800, 600);
}

function preload() { 
  imgMenu = loadImage('Background-4.png');
  imgEquipe = loadImage('background_old.png');
  imgJogo = loadImage('Background-3.png');
  imgNave = loadImage('F5S4.png');
  imgDisparo = loadImage('disparo.png');
  imgCoracao = loadImage('coracao.png');

  imgANEL = loadImage('1-jpg.jpg');
  imgESTRELA = loadImage('1-png.png');
  imgCIRCULO= loadImage('2-jpg.jpg');
  imgCRUZ = loadImage('2-png.png');
  imgLOSANGO = loadImage('3-png.png');
  imgSOL= loadImage('4-jpg.jpg');
  imgPENTAGONO = loadImage('4-png.png');
  imgPIRAMIDE = loadImage('5-jpg.jpg');
  imgOSSO = loadImage('6-png.png');
  imgCORACAO = loadImage('7-jpg.jpg');
  imgELIPSE = loadImage('7-png.png');
  imgLUA = loadImage('8-jpg.jpg');
  imgPARALELE = loadImage('8-png.png');
  imgFLECHA = loadImage('9-jpg.jpg');
  imgHEXAGONO = loadImage('10-jpg.jpg');
  imgESPADA = loadImage('10-png.png');
  imgRETANGULO = loadImage('11-png.png');
  imgTRAPEZIO = loadImage('12-png.png');
  imgTRIANGULO = loadImage('13-png.png');
  imgPAUS = loadImage('14-png.png');
  imgQUADRADO = loadImage('15-png.png');
}

function draw() {
  switch(telaAtiva){
    case 0:
      menu();
      break;
    case 1: 
      jogar();
      break;
    case 2:
      tutorial();
      break;
    case 3:
      equipe();
      break;
  }
}

function menu(){
  background(imgMenu);  
  textSize(70);
  fill('rgb(29, 233, 182)');
  stroke(25);
  strokeWeight(20);
  text('Strike The Figure', 140, 85)
  
  fill('rgba(0, 150, 136, 0.9)');
  noStroke();
  rect(190, 150, 400, 70, 100);
  
  textSize(30);
  fill(0);
  text('Jogar', 335, 190);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(190, 250, 400, 70, 100); 
  
  textSize(30);
  fill(0);
  text('Tutorial', 330, 290);
  
  fill('rgba(0, 150, 136, 0.9)'); 
  noStroke();
  rect(190, 350, 400, 70, 100); 
  
  textSize(30);
  fill(0);
  text('Equipe', 330, 390);
  
  noFill();
  stroke(120);
  strokeWeight(10);
  rect(190, y, 400, 70, 100);
}

function jogar(){

  qntLoop++;
  
  background(imgJogo);
  
  image(imgNave, xNave, yNave, 100, 100);
  
  if(vidasObj>0){
    gerarCabecalho(false);
    rect(xObj, yObj, 100, 100);
  
    yObj += 1;
    
    if(yObj > 600){
      yObj = 0;
      xObj = random(700);
    }
    
  }else if(vidasObj == 0){
    vidasObj = 3;
    xObj = random(700);
    yObj = 0;
    pontos++;
    gerarCabecalho(true);
  }
  
  if(dist(xObj, yObj, xNave, yNave) < 100 || dist(xObj, yObj, xObj, 0) === 500){
    if (dist(xObj, yObj, xNave, yNave) < 100) {
      xNave = 300;
      yNave = 500;
      yObj = 0;
      xObj = random(700);
    }
    vidasJogador--;
  }
  
   if(vidasJogador == 3){
    image(imgCoracao, 440, 20, 40, 40);
    image(imgCoracao, 490, 20, 40, 40);
    image(imgCoracao, 540, 20, 40, 40);
  } else if (vidasJogador == 2){
    image(imgCoracao, 440, 20, 40, 40);
    image(imgCoracao, 490, 20, 40, 40);
  } else if (vidasJogador == 1){
    image(imgCoracao, 440, 20, 40, 40);
  } if(vidasJogador == 0){
    gameOver();
  }
  
  if(keyIsDown(32) && atirando == false){
    xDisparo = xNave+43;
    yDisparo = yNave+20;
    atirando = true;
  }
  
  if(atirando == true){
    image(imgDisparo, xDisparo, yDisparo, 15, 50);
    yDisparo -= 10;
    if(yDisparo < 0){
      atirando = false;
    }
  }

  if(atirando == true && dist(xObj, yObj, xDisparo-40, yDisparo-60) < 50){
    vidasObj--;
    atirando = false;
    console.log(vidasObj);
  }
  
  if(keyIsDown(UP_ARROW)){
    if(yNave > 0){
      yNave -= 5;
    }
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yNave < 500){
      yNave += 5;
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    if(xNave < 700){
      xNave += 5;
    }
  }
  
  if(keyIsDown(LEFT_ARROW)){
    if(xNave > 0){
      xNave -= 5;
    }
  }
  
  if(keyIsDown(BACKSPACE)){
    telaAtiva = 0;
  }
  
  if(keyIsDown(27) || keyIsDown(BACKSPACE)){
     telaAtiva = 0;
     vidasJogador = 3;
     vidasObj = 3;
     xNave = 300;
     yNave = 500;
     yObj = 100;
     xObj = random(700);
     pontos = 0;
  }
}

function gameOver(){
  telaAtiva = 0;
  vidasJogador = 3;
  vidasObj = 3;
  xNave = 300;
  yNave = 500;
  yObj = 100;
  xObj = random(700);
  pontos = 0;
}

function equipe(){
  background(imgEquipe);
  textSize(40);
  fill('rgb(29, 233, 182)');
  stroke(0);
  strokeWeight(6);
  text('Este jogo foi criado por: ', 20, 90);
  text('Pedro Leandro e Diogo Campos', 20, 140);
  text('Turma: 02A', 20, 190)
  text('Professor: Aquiles Burlamaqui', 80, 300);
  text('ECT - UFRN', 200, 400);
  text('2019', 280, 450);
}
  
function tutorial(){
  background(imgEquipe);
  textSize(40);
  fill('rgb(29, 233, 182)');
  stroke(0);
  strokeWeight(6);
  text('COMO JOGAR: ', 20, 90);
  text('Use as setas do teclado (↑ ↓ → ←)', 20, 140);
  text('para movimentar a nave e SPACE', 20, 190);
  text('para disparar contra os objetos', 20, 240);
  text('específicos que aparecerão na', 20, 290);
  text('parte superior esquerda, desviando', 20, 340);
  text('das outras e não as deixando cair', 20, 390);
  text('no chão. Quando estiver jogando', 20, 440);
  text('Pressione ESC para voltar ao menu.', 20, 490);
  text('Voltar ao menu (Aperte BACKSPACE)', 20, 590);
  
}

function keyPressed(){
  switch(telaAtiva){
    case 0:
      btnMenu();
      break;
    case 1:
      jogar();
      break; 
    case 2:
      btnVoltar();
      break;
    case 3:
      btnVoltar();
      break;
  }
}

function btnMenu(){
  if(keyCode == ENTER){
    telaAtiva = opcao;
  }
  
  if (keyCode === DOWN_ARROW) {
    if(y<345) {
      y+=100;
      if(opcao == 1){
        opcao = 2;
      }else if(opcao == 2){
        opcao = 3;
      }
    }
  } else if(keyCode === UP_ARROW){
    if(y > 150) {
      y -= 100;
      if(opcao == 3){
        opcao = 2;
      }else if(opcao == 2){
        opcao = 1;
      }
    }
  }
}

function btnVoltar(){
  if(keyCode == BACKSPACE){
    telaAtiva = 0; 
  }
}

function gerarCabecalho(novoObj){
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  if(novoObj || qntLoop === 1){
    obj = figura();
  }

  text(obj, 30, 50);
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('LIFE:', 350, 50);
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('PONTOS: ' + pontos, 600, 50);
  
  noStroke();
  fill('rgb(213, 0, 0)');
}

function figura(){
  var valor = Math.floor(Math.random() * 21);
  switch(valor){
    case 0:
      return 'CIRCLE';
    case 1:
      return 'TRIANGLE';
    case 2:
      return 'SQUARE';
    case 3:
      return 'RECTANGLE';
    case 4:
      return 'PARALLELEPIPED';
    case 5:
      return 'TRAPEZE';
    case 6:
      return 'ELIPSE';
    case 7:
      return 'STAR';
    case 8:
      return 'PENTAGON';
    case 9:
      return 'HEXAGON';
    case 10:
      return 'MOON';
    case 11:
      return 'SUN';
    case 12:
      return 'CROSS';
    case 13:
      return 'RING';
    case 14:
      return 'PYRAMID';
    case 15:
      return 'BONE';
    case 16:
      return 'HEART';
    case 17:
      return 'RHOMBUS';
    case 18:
      return 'SPADE';
    case 19:
      return 'CLUBS';
    case 20:
      return 'ARROW';
  }
}

function gerarObjeto(novoObj){
  switch(obj){
    case 'CIRCLE':
      image(imgCIRCULO, xObj, yObj, 100, 100);
    case 'TRIANGLE':
      image(imgTRIANGULO, xObj, yObj, 100, 100);
    case 'SQUARE':
      image(imgQUADRADO, xObj, yObj, 100, 100);
    case 'RECTANGLE':
      image(imgRETANGULO, xObj, yObj, 100, 100);
    case 'PARALLELEPIPED':
      image(imgPARALELE, xObj, yObj, 100, 100);
    case 'TRAPEZE':
      image(imgTRAPEZIO, xObj, yObj, 100, 100);
    case 'ELIPSE':
      image(imgELIPSE, xObj, yObj, 100, 100);
    case 'STAR':
      image(imgESTRELA, xObj, yObj, 100, 100);
    case 'PENTAGON':
      image(imgPENTAGONO, xObj, yObj, 100, 100);
    case 'HEXAGON':
      image(imgHEXAGONO, xObj, yObj, 100, 100);
    case 'MOON':
      image(imgLUA, xObj, yObj, 100, 100);
    case 'SUN':
      image(imgSOL, xObj, yObj, 100, 100);
    case 'CROSS':
      image(imgCRUZ, xObj, yObj, 100, 100);
    case 'RING':
      image(imgANEL, xObj, yObj, 100, 100);
    case 'PYRAMID':
      image(imgPIRAMIDE, xObj, yObj, 100, 100);
    case 'BONE':
      image(imgOSSO, xObj, yObj, 100, 100);
    case 'HEART':
      image(imgCORACAO, xObj, yObj, 100, 100);
    case 'RHOMBUS':
      image(imgLOSANGO, xObj, yObj, 100, 100);
    case 'SPADE':
      image(imgESPADA, xObj, yObj, 100, 100);
    case 'CLUBS':
      image(imgPAUS, xObj, yObj, 100, 100);
    case 'ARROW':
      image(imgFLECHA, xObj, yObj, 100, 100);
  }
}
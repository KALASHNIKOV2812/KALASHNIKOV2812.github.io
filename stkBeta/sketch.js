var telaAtiva = 0, opcao = 1;
var imgMenu, imgEquipe, imgJogo, imgNave, imgDisparo, imgCoracao;
var rand = 1, rand2 = 1; 
var velocidade = 2;
var imgObj = [];
var y = 150;

var xObj = 150, yObj = 100;
var xNave = 300, yNave = 500;
var xDisparo, yDisparo;
var vidasJogador = 3, vidasObj = 3;
var pontos = 0;
var atirando = false;

function setup() {
  createCanvas(800, 600);
}

function preload() { 
  imgMenu = loadImage('Background-4.png');
  imgEquipe = loadImage('background_old.png');
  imgJogo = loadImage('b3.png');
  imgNave = loadImage('F5S4.png');
  imgDisparo = loadImage('disparo.png');
  imgCoracao = loadImage('coracao.png');
  for(var i = 1; i<=20;i++){
    imgObj[i]=loadImage(i+'.png');
  }
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
  text('Strike The Figure',140, 85)
  
  fill('rgba(0, 150, 136,0.9)');
  noStroke();
  rect(190,150,400,70,100);
  
  textSize(30);
  fill(0);
  text('Jogar',335,190);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(190,250,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Tutorial',330,290);
  
  fill('rgba(0, 150, 136,0.9)'); 
  noStroke();
  rect(190,350,400,70,100); 
  
  textSize(30);
  fill(0);
  text('Equipe',330,390);
  
  noFill();
  stroke(120);
  strokeWeight(10);
  rect(190,y,400,70,100);
}

function jogar(){
  
  background(imgJogo);
  
  image(imgNave,xNave,yNave,100,100);
  
  if(pontos<=5){
    velocidade = 2;
  }else if(pontos>5 && pontos<=10){
    velocidade = 3;
  }else if(pontos>10 && pontos<=15){
    velocidade = 3.5;
  }else if(pontos>15 && pontos<=20){
    velocidade = 4;
  }else if(pontos>20 && pontos <=25){
    velocidade = 4.5;
  }else if(pontos>25){
    velocidade = 5;
  }      
  
  if(vidasObj>0){
    image(imgObj[rand2],xObj,yObj,100,100);
  
    yObj += velocidade;
    
    if(yObj>600){
      if(rand==rand2){
        yObj = 0;
        xObj = random(700);
        rand = Math.floor((Math.random()*20)+1);
        rand2 = Math.floor((Math.random()*20)+1);
        vidasJogador--;
      }else if(rand!=rand2){
        yObj = 0;
        xObj = random(700);
        rand = Math.floor((Math.random()*20)+1);
        rand2 = Math.floor((Math.random()*20)+1);
        pontos++;
      } 
    }
    
  }else if(vidasObj==0 && rand == rand2){
    vidasObj = 3;
    xObj = random(700);
    yObj = 0;
    rand = Math.floor((Math.random()*20)+1);
    rand2 = Math.floor((Math.random()*20)+1);
    pontos++;
  }else if(vidasObj==0 && rand != rand2){
    vidasObj = 3;
    xObj = random(700);
    yObj = 0;
    rand = Math.floor((Math.random()*20)+1);
    rand2 = Math.floor((Math.random()*20)+1);
    vidasJogador--;
  }  
  
  if(dist(xObj,yObj,xNave,yNave)<100){
    xNave = 300;
    yNave = 500;
    vidasJogador--;
    yObj = 0;
    xObj = random(700);
    rand2 = Math.floor((Math.random()*20)+1);
  }
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  if(rand == 1){
    text('RING',30, 50);
  }else if(rand == 2){
    text('STAR',30, 50);
  }else if(rand == 3){
    text('CIRCLE',30, 50);
  }else if(rand == 4){
    text('CROSS',30, 50);
  }else if(rand == 5){
    text('SUN',30, 50);
  }else if(rand == 6){
    text('RHOMBUS',30, 50);
  }else if(rand == 7){
    text('PYRAMID',30, 50);
  }else if(rand == 8){
    text('BONE',30, 50);
  }else if(rand == 9){
    text('HEART',30, 50);
  }else if(rand == 10){
    text('HEXAGON',30, 50);
  }else if(rand == 11){
    text('PARELELLEPIPED',30, 50);
  }else if(rand == 12){
    text('ELLIPSE',30, 50);
  }else if(rand == 13){
    text('MOON',30, 50);
  }else if(rand == 14){
    text('HEXAGON',30, 50);
  }else if(rand == 15){
    text('ARROW',30, 50);
  }else if(rand == 16){
    text('SPADE',30, 50);
  }else if(rand == 17){
    text('RECTANGLE',30, 50);
  }else if(rand == 18){
    text('TRAPEZE',30, 50);
  }else if(rand == 19){
    text('TRIANGLE',30, 50);
  }else if(rand == 20){
    text('CLUB',30, 50);
  }
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('LIFE:',350, 50);
  
  textSize(30);
  fill('rgb(229, 57, 53)');
  stroke(0);
  strokeWeight(5);
  text('PONTOS: '+pontos, 600, 50);
  
  noStroke();
  fill('rgb(213, 0, 0)');
  
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
    image(imgDisparo, xDisparo, yDisparo, 15,50);
    yDisparo -=10;
    if(yDisparo<0){
      atirando = false;
    }
  }

  if(atirando == true && (dist(xObj,yObj,xDisparo-40,yDisparo-60)<50)){
    vidasObj--;
    atirando = false;
  }
  
  if(keyIsDown(UP_ARROW)){
    if(yNave>0){
      yNave-=5;
    }
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(yNave<500){
      yNave+=5;
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    if(xNave<700){
      xNave+=5;
    }
  }
  
  if(keyIsDown(LEFT_ARROW)){
    if(xNave>0){
      xNave-=5;
    }
  }
  
  if(keyIsDown(27)){
    telaAtiva = 0;
  }
  
  if(keyIsDown(27)){
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
  text('Este jogo foi criado por: ',20,90);
  text('Pedro Leandro e Diogo Campos',20,140);
  text('Turma: 02A', 20, 190)
  text('Professor: Aquiles Burlamaqui',80,300);
  text('ECT - UFRN',200,400);
  text('2019',280,450);
}
  
function tutorial(){
  background(imgEquipe);
  textSize(40);
  fill('rgb(29, 233, 182)');
  stroke(0);
  strokeWeight(6);
  text('COMO JOGAR: ',20,90);
  text('Use as setas do teclado (↑ ↓ → ←)',20,140);
  text('para movimentar a nave e SPACE',20,190);
  text('para disparar contra os objetos',20,240);
  text('específicos que aparecerão na',20,290);
  text('parte superior esquerda, desviando',20,340);
  text('das outras e não as deixando cair',20,390);
  text('no chão. Quando estiver jogando',20,440);
  text('Pressione ESC para voltar ao menu.',20,490);
  text('Voltar ao menu (Aperte ESC)',20,590);
  
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
    if(y>150) {
      y-=100;
      if(opcao == 3){
        opcao = 2;
      }else if(opcao == 2){
        opcao = 1;
      }
    }
  }
}

function btnVoltar(){
  if(keyCode == 27){
    telaAtiva = 0; 
  }
}

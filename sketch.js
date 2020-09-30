var backImg, playImg, chosenImg, wallImg;
var breaks, b1, b2, b3, b4, by = 200;
var walls, w1, w2, w3, w4, w5, w;
var player, playC, allPlayer;
var db, gameState = 0;
var form, game;

function preload(){
  backImg = loadImage("images/bg.png");
  playImg = loadImage("images/pick.png");
  chosenImg = loadImage("images/chosPick.png");
  wallImg = loadImage("images/wall.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-20);

  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  game.update(0);
  player.updateCount(0);
}

function draw(){
  if(playC == 4 && gameState !== 2)
  {
    game.update(1);
  }
  if(gameState == 1)
  {
    clear();
    game.play();
  }
  if(gameState ==2)
  {
    game.end();
  }
  if(player.waitTime > 0)
  {
    player.waitTime = player.waitTime - 1;
  }
}
var database;
var game,player,form
var gameState = 0
var playerCount
var players;
var distance = 0
var car1,car2,car3,car4,cars

function preload(){
    carimg1 = loadImage("car1.png")
    carimg2 = loadImage("car2.png")
    carimg3 = loadImage("car3.png")
    carimg4 = loadImage("car4.png")
    trackimg = loadImage("track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()
game = new Game() 
game.getState()
game.start()
}

function draw(){
    if(playerCount === 4 ){
        game.updateState(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
    if(gameState === 2){
        game.end()
    }
}



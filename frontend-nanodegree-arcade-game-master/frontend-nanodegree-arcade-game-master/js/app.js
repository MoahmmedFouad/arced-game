// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=0;
    this.y = 0;
    this.speed = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=this.speed*dt;
    if(this.x>=505)
        this.x=-50;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.setEnemiesValues = function() {
       var ind = 0;
       allEnemies.forEach(function(enemy){
        enemy.x = 1;
        enemy.speed = 600 - (ind*100);   
        if(ind == 0 || ind == 1)
            enemy.y = 70;
        else if(ind == 2 || ind == 3)
            enemy.y = 150; 
        else
            enemy.y = 230;
        ind++;   
    });
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    
    this.players = [
        "images/char-boy.png",
        "images/char-cat-girl.png",
        "images/char-horn-girl.png",
        "images/char-pink-girl.png",
        "images/char-princess-girl.png"
    ]
    //this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 390;
    this.move="";
    this.playerNum = 0;
};

Player.prototype.update = function(){
    var Move = this.move;
    if(Move == "up" && this.y-80>=-10){
        this.y-=80;
    }
    else if(Move == "down" && this.y+80<=390){
        this.y+=80;
    }
    else if(Move == "right" && this.x+101<=404){
        this.x+=101;
        
    }
    else if(Move == "left" && this.x-101>=0){
        this.x-=101;
    }
    if(this.y == -10){
        $("#Game").hide(1000);
        $(".congratulations").show(2000);
    }
    this.move = "";
};

Player.prototype.render = function() {
    var playerImage = this.players[this.playerNum];
    ctx.drawImage(Resources.get(playerImage), this.x, this.y);
};

Player.prototype.handleInput = function(Key){
    this.move = Key;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies  = [new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy()];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
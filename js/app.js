// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed; //enables different speeds for each bug
    //make speed random for each bug???
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //position starting??
    //Updates the Enemy location (you need to implement)
    //Enemy.prototype.checkCollisions (or external to update method???
    //once enemy off-screen needs to start from x=0 again
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,speed) {
  this.x = x;
  this.y = y;
  this.speed = 15;
  this.sprite = 'images/char-horn-girl.png';
  //this.sprite.position.set

}
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //this.x += this.speed * dt; (BREAKS PLAYER due to speed argument?)
    //this.y += this.speed * dt;  ("")

    //this.sprite.position.x += this.directionX * this.speed;
//this.sprite.position.y += this.directionY * this.speed;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
  if(keyPress === 'left'){
		this.x -= 15;
 	}
 	if(keyPress === 'up'){
 		this.y -= 15;
 	}
 	if(keyPress === 'right'){
		this.x += 15;
 	}
 	if(keyPress === 'down') {
 		this.y += 15;
}
};
//Handle keydown/keyup too so do not need to press repeatedly
//Stop player moving off screen
//
//If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(0, 65, 15), new Enemy(0, 145, 90), new Enemy(0, 230, 45)];
// Place the player object in a variable called player
let player = new Player (202, 400, 15);


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

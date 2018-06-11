// Whole-script strict mode syntax
'use strict';

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  this.sprite = 'images/enemy-bug.png';
  this.speed = speed; //enables different speeds for each bug, to be defined in objects later
};

let canvasClass = document.getElementsByTagName('canvas');
function animate() {
  canvasClass[0].classList.add('animate');
  setTimeout(function(){
  canvasClass[0].classList.remove('animate');
  },500);
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  //Updates the Enemy location (you need to implement)
  //Checks for collisions - horizonatally 55 pixels between and vertically 15 pixels
  if (Math.abs(Math.floor(player.x) - Math.floor(this.x)) <= 55 &&
    Math.abs(Math.floor(player.y) - Math.floor(this.y)) <= 15) {
      animate();
      player.x = 202;
      player.y = 400;
    //window.location.reload();
  }
  //Checks if enemy object has left screen and restarts it off screen to left
  if (this.x >= 500) {
    this.x = (Math.floor(Math.random() * (-600 - (-100))) + (-100));
  }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = 15;
  this.sprite = 'images/char-horn-girl.png';
  //this.sprite.position.set???
};
Player.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

function winGame() {
  //Player put back to original position
  player.x = 202;
  player.y = 400;
  //All enemies stopped
  for (const enemy of allEnemies) {
    enemy.speed = 0;
  }
  modal.style.display = 'block';
}

//Congratulations modal
let modal = document.getElementById('myModal');


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
  if (keyPress === 'left') {
    this.x -= 30;
  }
  if (keyPress === 'up') {
    this.y -= 30;
  }
  if (keyPress === 'right') {
    this.x += 30;
  }
  if (keyPress === 'down') {
    this.y += 30;
  }

  //Do not need to stop player moving off top of screen as starts winGame function
  //Stops player moving off left of screen
  if (this.x <= -2) {
    this.x = -2;
  }
  //Stops player moving off right of screen
  if (this.x >= 404) {
    this.x = 404;
  }
  //Stops player moving off bottom of screen
  if (this.y >= 404) {
    this.y = 404;
  }
  /*If the player reaches the water the game should be reset by moving the play
  back to the initial location (you can write a separate
  reset Player method to handle that).*/
  //When player reaches top of screen, winGame function called
  if (this.y <= 20) {
    winGame();
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let enemyOne = new Enemy(-85, 65, (Math.floor(Math.random() * (65 - 15)) + 15));
allEnemies.push(enemyOne);
let enemyTwo = new Enemy(-105, 145, (Math.floor(Math.random() * (100 - 20)) + 20));
allEnemies.push(enemyTwo);
let enemyThree = new Enemy(-120, 230, (Math.floor(Math.random() * (80 - 20)) + 20));
allEnemies.push(enemyThree);
let enemyFour = new Enemy(-250, 65, (Math.floor(Math.random() * (100 - 20)) + 20));
allEnemies.push(enemyFour);
let enemyFive = new Enemy(-300, 145, (Math.floor(Math.random() * (90 - 20)) + 20));
allEnemies.push(enemyFive);
let enemySix = new Enemy(-350, 230, (Math.floor(Math.random() * (70 - 20)) + 20));
allEnemies.push(enemySix);
let enemySeven = new Enemy(-400, 65, (Math.floor(Math.random() * (65 - 15)) + 15));
allEnemies.push(enemySeven);
let enemyEight = new Enemy(-600, 145, (Math.floor(Math.random() * (100 - 20)) + 20));
allEnemies.push(enemyEight);
let enemyNine = new Enemy(-500, 230, (Math.floor(Math.random() * (100 - 15)) + 20));
allEnemies.push(enemyNine);


// Place the player object in a variable called player
let player = new Player(202, 400, 15);


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

//Modal functionality
//Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
  window.location.reload();
};

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    window.location.reload();
  }
};

let closeButton = document.getElementById('closeModal');
closeButton.addEventListener('click', closeModal);

//Modal play again button
function closeModal() {
  closeButton.addEventListener('click', function(e) {
    modal.style.display = 'none';
    window.location.reload();
  });
}

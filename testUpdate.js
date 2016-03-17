function update(){
  game.physics.arcade.collide(player,platforms);
  game.physics.arcade.collide(enemy,platforms);

  // Checks if player died
  game.physics.arcade.collide(player,danger,playerDeath);
  game.physics.arcade.collide(player,enemy,playerDeath);

  // Checks if player ran into a gem
  game.physics.arcade.overlap(player,gems,collectGem);

  // Adjust player/enemy size
  player.body.setSize(60,55,5,17);
  enemy.body.setSize(67,35,5,18);

  // Player movement
  player.body.velocity.x = 0;

  if(control.left.isDown){
    // Move player left
    player.body.velocity.x = -150;
    player.animations.play("left");
  } else if(control.right.isDown){
    // Move player right
    player.body.velocity.x = 150;
    player.animations.play("right");
  } else {
    player.animations.stop();
  }
  // Jumping
  if(control.up.isDown && player.body.touching.down){
    player.body.velocity.y = -200;
  }

  if(enemy.body.x <= 450){
    // Move enemy to the right
    enemy.body.velocity.x = 100;
    enemy.animations.play("right");
  }
  if(enemy.body.x >= 620){
    // Move enemy to the left
    enemy.body.velocity.x = -100;
    enemy.animations.play("left");
  }

  // Rain fishes
  rainFish();

  // Debug
  // game.debug.body(player);
  // game.debug.body(enemy);
}

function addFloor(x,y,floorType,bool){
  var ground = platforms.create(x,y,floorType);
  ground.scale.setTo(0.6,0.6);
  ground.body.immovable = bool;
}

var gemsCollected = 0;
function collectGem(player,gem){
  // Remove gem
  gem.kill();
  gemsCollected++;
}

function playerDeath(player,danger){
  // Remove player
  player.kill();
  // Add player at reset point after 0.5 seconds
  setTimeout(function(){
    player.reset(570,425);
  },500);
}

function rainFish(){
  if(gemsCollected === 4){
    for(var i=0; i < 150; i++){
      // var random = Math.floor(Math.random() * 1201);
      var randomVelocity = Math.floor(Math.random() * 500) + 50;
      var fish = decorations.create(Math.floor(Math.random() * 1201),-50,"fishGreen");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.3,0.3);

      fish = decorations.create(Math.floor(Math.random() * 1201),-50,"fishPink");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.3,0.3);

      fish = decorations.create(Math.floor(Math.random() * 1201),-50,"fishBlue");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.3,0.3);

      // Reset gems
      gemsCollected = 0;
    }
  }
}
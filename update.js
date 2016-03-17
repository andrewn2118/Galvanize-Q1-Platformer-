function update(){
  // Collision for player/enemy with platforms
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(enemy, platforms);

  // Checks if player died
  game.physics.arcade.collide(player, danger, playerReset);
  game.physics.arcade.collide(player, enemy, playerReset);

  // Checks if player ran into a gem
  game.physics.arcade.overlap(player, gems, collectGem);

  // Move background based on character movement
  background.tilePosition.y = -(game.camera.y * 0.15);
  background.tilePosition.x = (game.camera.x * 0.4);

  // // Player movement
  player.body.velocity.x = 0;

  if(cursors.left.isDown){
    // Move player left
    player.body.velocity.x = -250;
    player.animations.play("left");
  } else if(cursors.right.isDown){
    // Move player right
    player.body.velocity.x = 250;
    player.animations.play("right");
  } else {
    player.animations.stop();
  }
  // Jumping
  if(cursors.up.isDown && player.body.touching.down){
    player.body.velocity.y = -410;
  }

  if(enemy.body.x <= 685){
    // Move enemy to the right
    enemy.body.velocity.x = 100;
    enemy.animations.play("right");
  }
  if(enemy.body.x >= 1175){
    // Move enemy to the left
    enemy.body.velocity.x = -100;
    enemy.animations.play("left");
  }

  // Rain fishes
  rainFish();
  game.world.bringToTop(celebrate);

  // Debug
  // game.debug.body(player);
  // game.debug.body(enemy);
}

function playerReset(player, danger){
  // Remove player
  player.kill();
  // Add player at reset point after 0.5 seconds
  setTimeout(function(){
    player.reset(game.world.width - (tileSize * 14.5), game.world.height - (tileSize * 15));
  }, 500);
}

function collectGem(player, gem){
  // Remove gem
  gem.kill();
  collected++;
}

function rainFish(){
  if(collected === 4){
    for(var i=0; i < 200; i++){
      var randomVelocity = Math.floor(Math.random() * 500) + 50;

      var fish = celebrate.create(Math.floor(Math.random() * 2001),-20,"fishGreen");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.4, 0.4);

      fish = celebrate.create(Math.floor(Math.random() * 2001), -20, "fishPink");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.4, 0.4);

      fish = celebrate.create(Math.floor(Math.random() * 2001), -20, "fishBlue");
      game.physics.arcade.enable(fish);
      fish.body.velocity.y = randomVelocity;
      fish.scale.setTo(0.4, 0.4);

      // Reset gems
      collected = 0;
    }
  }
}
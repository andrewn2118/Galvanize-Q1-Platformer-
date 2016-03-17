function update(){
  game.physics.arcade.collide(player,platforms);

  background.tilePosition.y = -(game.camera.y * 0.1);

  // // Player movement
  player.body.velocity.x = 0;

  if(cursors.left.isDown){
    // Move player left
    player.body.velocity.x = -1500/*-150*/;
    player.animations.play("left");
  } else if(cursors.right.isDown){
    // Move player right
    player.body.velocity.x = 1500/*150*/;
    player.animations.play("right");
  } else {
    player.animations.stop();
  }
  // Jumping
  if(cursors.up.isDown/* && player.body.touching.down*/){
    player.body.velocity.y = -1500/*-200*/;
  }

  // if(enemy.body.x <= 450){
  //   // Move enemy to the right
  //   enemy.body.velocity.x = 100;
  //   enemy.animations.play("right");
  // }
  // if(enemy.body.x >= 620){
  //   // Move enemy to the left
  //   enemy.body.velocity.x = -100;
  //   enemy.animations.play("left");
  // }

  // Rain fishes
  rainFish();

  // Debug
  // game.debug.body(player);
  // game.debug.body(enemy);
}

function playerReset(player,danger){
  // Remove player
  player.kill();
  // Add player at reset point after 0.5 seconds
  setTimeout(function(){
    player.reset(570,425);
  },500);
}

function rainFish(){
  if(collected === 4){
    for(var i=0; i < 150; i++){
      var randomVelocity = Math.floor(Math.random() * 500) + 50;

      var fish = decorations.create(Math.floor(Math.random() * 1001),-50,"fishGreen");
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
      collected = 0;
    }
  }
}
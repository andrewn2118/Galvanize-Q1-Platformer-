var background, player, enemy, platforms, decorations, danger, gems, yarn, control;

function create(){
  //  Enabling game physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.world.setBounds(0,0,2000,1000);
  
  // Add background
  // game.add.sprite(0,-200,"bgd");
  background = game.add.tileSprite(0,0,1250,700,"bgd");
  background.fixedToCamera = true;


  // Create platforms group and enable physics
  platforms = game.add.group();
  platforms.enableBody = true; 

  // Create misc group
  decorations = game.add.group();
  decorations.enableBody = true;

  // Create danger group
  danger = game.add.group();
  danger.enableBody = true;

  // Arrow sign
  var sign = decorations.create(176,game.world.height - 66,"rightArrow");
  sign.scale.setTo(0.3,0.3);
  // Rock
  var rock = decorations.create(50,game.world.height - 150,"rock");
  rock.scale.setTo(0.3,0.3);
  // Cactus
  var cactus = decorations.create(165,256,"cactus");
  cactus.scale.setTo(0.3,0.3);
  // Flag
  var flag = decorations.create(600,471,"flag");
  flag.scale.setTo(0.3,0.3);

  // Left border
  for(var i=0; i < 17; i++){
    addFloor(-5,i * 42,"grass",true);
  }

  // Right border
  for(var i=0; i < 17; i++){
    addFloor(game.world.width - 37,i * 42,"grass",true);
  }
  addFloor(game.world.width - 79,336,"sandHalfMid",true);
  addFloor(game.world.width - 121,336,"sandHalfLeft",true);
  addFloor(game.world.width - 79,160,"grassLedgeRight",true);
  
  // Top border
  for(var i=0; i < 30; i++){
    addFloor(i * 42,-20,"snowMidU",true);
  }

  // Floor
  for(var i=0; i < 28; i++){
    if(i < 2){
      addFloor(i * 42 + 37,game.world.height - 28,"grass",true);
      addFloor(i * 42 + 37,game.world.height - 70,"grass",true);
      addFloor(i * 42 + 37,game.world.height - 112,"grassMid",true);
    } else if(i === 2){
      addFloor(i * 42 + 37,game.world.height - 28,"grassCR",true);
      addFloor(i * 42 + 37,game.world.height - 70,"rightGrass",true);
      addFloor(i * 42 + 37,game.world.height - 112,"grassTopRight",true);
    } else if(i === 16){
      addFloor(i * 42 + 37,game.world.height - 28,"sandTopRight",true);
    } else if(i === 20){
      addFloor(i * 42 + 37,game.world.height - 28,"sandTopLeft",true);
    }
    else if(i > 16 && i < 20){
      addFloor(i * 42 + 37,game.world.height - 1,"sandHalfMid",true);
      // Adding water to level 1
      var lake = danger.create(i * 42 + 37,game.world.height - 25,"waterHigh");
      lake.body.immovable = true;
      lake.scale.setTo(0.33,0.33);
    } 
    else {
      addFloor(i * 42 + 37,game.world.height - 28,"grassMid",true);
    }
  }
  // Floor level 2
  for(var i=0; i < 18; i++){
    if(i < 3){
      lake = danger.create(i * 42 + 37,294,"waterHigh");
      lake.body.immovable = true;
      lake.scale.setTo(0.33,0.33);
    } else if(i === 3){
      addFloor(i * 42 + 37,294,"grassTopLeft",true);
      // Floating block
      addFloor(80,120,"metalMidR",true);
    } else if(i < 8){
      addFloor(i * 42 + 37,294,"grassMid",true);
      addFloor(i * 42 + 37,252,"purpleMid",true);
      if(i > 4 && i < 8){
        addFloor(i * 42 + 37,210,"metalMid",true);
      }
    } else if (i === 17){
      addFloor(i * 42 + 37,336,"sandHalfRight",true);
    }
    if(i < 17){
      addFloor(i * 42 + 37,336,"sandHalfMid",true);
    }
  }

  // Adding cake flooring
  addFloor(331,game.world.height - 70,"chocoTopLeft",true);
  addFloor(373,game.world.height - 70,"chocoCL",true);
  addFloor(373,game.world.height - 112,"chocoTopLeft",true);
  addFloor(415,game.world.height - 112,"chocoTopRight",true);

  addFloor(415,game.world.height - 70,"cakeTopLeft",true);
  addFloor(457,game.world.height - 70,"cakeMid",true);
  addFloor(499,game.world.height - 70,"cakeMid",true);

  addFloor(541,game.world.height - 70,"leftCake",true);
  addFloor(541,game.world.height - 112,"leftCake",true);
  addFloor(541,game.world.height - 154,"leftCake",true);
  addFloor(541,game.world.height - 196,"cakeTopLeft",true);
  addFloor(583,game.world.height - 196,"cakeMid",true);
  addFloor(583,game.world.height - 154,"sandMid",true);
  addFloor(583,game.world.height - 112,"sandMid",true);
  addFloor(583,game.world.height - 70,"sandMid",true);
  addFloor(625,game.world.height - 196,"cakeTopRight",true);
  addFloor(625,game.world.height - 154,"rightCake",true);
  addFloor(625,game.world.height - 112,"rightCake",true);
  addFloor(625,game.world.height - 70,"rightCake",true);

  // Adding cake level 2
  addFloor(450,294,"leftChoco",true);
  addFloor(450, 252,"chocoTopLeft",true);
  addFloor(660,294,"rightChoco",true);
  addFloor(660,252,"chocoTopRight",true);
  for(var i=1; i < 5; i++){
    addFloor(i * 42 + 450, 294,"tundraMid",true);
    addFloor(i * 42 + 450, 252,"chocoMid",true);
  }

  // Cake layer 1
  addFloor(942,game.world.height - 70,"leftCake",true);
  addFloor(942,game.world.height - 112,"cakeTopLeft",true);
  for(var i=0; i < 4; i++){
    addFloor(i * 42 + 984,game.world.height - 70,"chocoMid",true);
    addFloor(i * 42 + 984,game.world.height - 112,"cakeMid",true);
  }
  addFloor(1152,game.world.height - 70,"rightCake",true);
  addFloor(1152,game.world.height - 112,"cakeTopRight",true);
  // Cake layer 2
  addFloor(984,game.world.height - 154,"leftCake",true);
  addFloor(984,game.world.height - 196,"cakeTopLeft",true);
  for(var i=0; i < 2; i++){
    addFloor(i * 42 + 1026,game.world.height - 154,"chocoMid",true);
    addFloor(i * 42 + 1026,game.world.height - 196,"cakeMid",true);
  }
  addFloor(1110,game.world.height - 154,"rightCake",true);
  addFloor(1110,game.world.height - 196,"cakeTopRight",true);
  // Cake layer 3
  addFloor(1026,game.world.height - 238,"leftCake",true);
  addFloor(1068,game.world.height - 238,"rightCake",true);
  addFloor(1026,game.world.height - 280,"cakeTopLeft",true);
  addFloor(1068,game.world.height - 280,"cakeTopRight",true);
  addFloor(1047,game.world.height - 238,"chocoMid",true);

  // Metal platforms
  addFloor(925,250,"grassHalfLeft",true);
  addFloor(967,250,"grassHalfRight",true);

  // Add gems to collect
  gems = game.add.group();
  gems.enableBody = true;

  var gem = gems.create(480,game.world.height - 115,"gem");
  gem = gems.create(85,75,"gem");
  gem = gems.create(790,500,"gem");
  yarn = gems.create(1180,110,"yarn");

  // Add player
  player = game.add.sprite(80,game.world.height - 200,"cat");
  player.animations.add("left",[0]);
  player.animations.add("right",[1]);

  // Enabling player physics
  game.physics.arcade.enable(player);
  player.body.gravity.y = 200;
  player.body.collideWorldBounds = true;

  // Set camera to follow player
  game.camera.follow(player);

  // Add enemy
  enemy = game.add.sprite(450,195,"racoon");
  enemy.animations.add("left",[0]);
  enemy.animations.add("right",[1]);
  // Enemy physics
  game.physics.arcade.enable(enemy);
  enemy.body.gravity.y = 200;
  enemy.body.collideWorldBounds = true;

  // Adding controls
  control = game.input.keyboard.createCursorKeys();
}
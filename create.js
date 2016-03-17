var background,
    cursors,
    player,
    enemy,
    platforms,
    gems,
    yarn,
    collected,
    decorations,
    danger,
    tileSize = 42;

function create(){
  // Enable arcade physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Increase game size
  game.world.setBounds(0, 0, 2000, 1500);
  
  // Add background
  background = game.add.tileSprite(0, 0, 1250, 700, "background");
  background.fixedToCamera = true;

  // Create groups
  gems = game.add.group();
  gems.enableBody = true;
  
  danger = game.add.group();
  danger.enableBody = true;

  decorations = game.add.group();
  decorations.enableBody = true;

  platforms = game.add.group();
  platforms.enableBody = true;

  // Create level
  generateWorld();

  var candyCane = decorations.create(tileSize * 1.3, tileSize * 2, "candyCane");
  candyCane.scale.setTo(0.6,0.6);

  // Add player and player physics
  player = game.add.sprite(700, 100/*game.world.height - 370*/, "cat");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 600;
  player.body.collideWorldBounds = true;
  // Add player animations
  player.animations.add("left", [0]);
  player.animations.add("right", [1]);
  // Set camera to follow player
  game.camera.follow(player);

  // Add enemy and enemy physics
  enemy = game.add.sprite(660, 480, "racoon");
  game.physics.arcade.enable(enemy);
  enemy.body.gravity.y = 600;
  enemy.body.collideWorldBounds = true;
  // Add enemy animations
  enemy.animations.add("left",[0]);
  enemy.animations.add("right",[1]);

  // Adjust player/enemy size
  player.body.setSize(60,55,5,17);
  enemy.body.setSize(67,35,5,18);

  // Adding controls
  cursors = game.input.keyboard.createCursorKeys();

  // Collectibles
  var yarn = gems.create(game.world.width - tileSize * 2.3, tileSize * 1.5, "yarn");
  yarn.scale.setTo(1.3, 1.3);
  var gem1 = gems.create(950, 100, "gem");
  // var gem2 = gems.create(0, 0, "gem");
  // var gem3 = gems.create(0, 0, "gem");
}

function generateWorld(){
  var gWd = game.world.width, gHt = game.world.height;

  // Adding borders
  addTile("v", 0, 0, Math.ceil(gHt / tileSize), "planetRight", true);
  addTile("v", gWd - tileSize, 0, Math.ceil(gHt / tileSize), "planetLeft", true);
  addTile("h", 0, 0, Math.ceil(gWd / tileSize), "snowMidU", true);
  addTile("h", 0, gHt - tileSize, 19, "grass", true);
  addTile("h", 0, gHt - (tileSize * 2), 19, "grass", true);
  addTile("h", 0, gHt - (tileSize * 3), 19, "grass", true);
  addTile("h", 0, gHt - (tileSize * 4), 19, "grassMid", true);
  addTile("v", (tileSize * 19), gHt - (tileSize * 3), 3, "grassRight", true);
  addTile("v", (tileSize * 19), gHt - (tileSize * 4), 1, "grassTR", true);

  addTile("h", (tileSize * 27), gHt - (tileSize), 21, "grass", true);
  addTile("h", (tileSize * 27), gHt - (tileSize * 2), 21, "grass", true);
  addTile("h", (tileSize * 27), gHt - (tileSize * 3), 21, "grass", true);
  addTile("h", (tileSize * 27), gHt - (tileSize * 4), 21, "grassMid", true);
  addTile("v", (tileSize * 26), gHt - (tileSize * 3), 3, "grassLeft", true);
  addTile("v", (tileSize * 26), gHt - (tileSize * 4), 1, "grassTL", true);

  // Water
  addWater("h", (tileSize * 20), gHt + 5 - tileSize, 6, "water", true);
  addWater("h", (tileSize * 20), gHt + 5 - (tileSize * 2), 6, "water", true);
  addWater("h", (tileSize * 20), gHt + 5 - (tileSize * 3), 6, "water", true);
  addWater("h", (tileSize * 20), gHt + 5 - (tileSize * 4), 6, "waterTop", true);

  // Level 1
  addTile("h", 0, gHt - (tileSize * 5), 4, "chocoMid", true);
  addTile("h", 0, gHt - (tileSize * 6), 4, "sandMid", true);
  addTile("h", 0, gHt - (tileSize * 7), 4, "cakeMid", true);
  addTile("h", (tileSize * 4), gHt - (tileSize * 7), 1, "cakeTR", true);
  addTile("v", (tileSize * 4), gHt - (tileSize * 6), 2, "cakeRight", true);

  // Chocolate cake
  addTile("h", (tileSize * 10), gHt - (tileSize * 5), 1, "chocoTL", true);
  addTile("h", (tileSize * 11), gHt - (tileSize * 5), 1, "chocoCL", true);
  addTile("h", (tileSize * 11), gHt - (tileSize * 6), 1, "chocoTL", true);
  addTile("h", (tileSize * 12), gHt - (tileSize * 6), 1, "chocoTR", true);

  // Ice-cream cake
  addTile("h", (tileSize * 12), gHt - (tileSize * 5), 1, "tundraTL", true);
  addTile("h", (tileSize * 13), gHt - (tileSize * 5), 2, "tundraMid", true);

  // Strawberry cake
  addTile("v", (tileSize * 15), gHt - (tileSize * 7), 3, "cakeLeft", true);
  addTile("v", (tileSize * 15), gHt - (tileSize * 8), 1, "cakeTL", true);
  addTile("v", (tileSize * 16), gHt - (tileSize * 7), 3, "sandMid", true);
  addTile("v", (tileSize * 16), gHt - (tileSize * 8), 1, "cakeMid", true);
  addTile("v", (tileSize * 17), gHt - (tileSize * 8), 1, "cakeTR", true);
  addTile("v", (tileSize * 17), gHt - (tileSize * 7), 3, "cakeRight", true);

  // Giant cake
  addTile("h", (tileSize * 30), gHt - (tileSize * 5), 1, "cakeLeft", true);
  addTile("h", (tileSize * 31), gHt - (tileSize * 5), 6, "chocoMid", true);
  addTile("h", (tileSize * 37), gHt - (tileSize * 5), 1, "cakeRight", true);
  addTile("h", (tileSize * 30), gHt - (tileSize * 6), 1, "cakeTL", true);
  addTile("h", (tileSize * 31), gHt - (tileSize * 6), 6, "cakeMid", true);
  addTile("h", (tileSize * 37), gHt - (tileSize * 6), 1, "cakeTR", true);

  addTile("h", (tileSize * 31), gHt - (tileSize * 7), 1, "cakeLeft", true);
  addTile("h", (tileSize * 32), gHt - (tileSize * 7), 4, "sandMid", true);
  addTile("h", (tileSize * 36), gHt - (tileSize * 7), 1, "cakeRight", true);
  addTile("h", (tileSize * 31), gHt - (tileSize * 8), 1, "cakeTL", true);
  addTile("h", (tileSize * 32), gHt - (tileSize * 8), 4, "cakeMid", true);
  addTile("h", (tileSize * 36), gHt - (tileSize * 8), 1, "cakeTR", true);

  addTile("h", (tileSize * 32), gHt - (tileSize * 9), 1, "cakeLeft", true);
  addTile("h", (tileSize * 33), gHt - (tileSize * 9), 2, "chocoMid", true);
  addTile("h", (tileSize * 35), gHt - (tileSize * 9), 1, "cakeRight", true);
  addTile("h", (tileSize * 32), gHt - (tileSize * 10), 1, "cakeTL", true);
  addTile("h", (tileSize * 35), gHt - (tileSize * 10), 1, "cakeTR", true);
  addTile("h", (tileSize * 33), gHt - (tileSize * 10), 2, "cakeMid", true);

  addTile("h", (tileSize * 33), gHt - (tileSize * 11), 1, "cakeLeft", true);
  addTile("h", (tileSize * 34), gHt - (tileSize * 11), 1, "cakeRight", true);
  addTile("h", (tileSize * 33), gHt - (tileSize * 12), 1, "cakeTL", true);
  addTile("h", (tileSize * 34), gHt - (tileSize * 12), 1, "cakeTR", true);
  addTile("h", (tileSize * 33) + (tileSize / 2), gHt - (tileSize * 11), 1, "sandMid", true);

  // Checkpoint
  addDecoration((tileSize * 34), gHt + 3 - (tileSize * 13), "flagYellow");

  // Level 2
  addTile("h", gWd - (tileSize * 9), gHt - (tileSize * 15), 1, "cakeHalfL", true);
  addTile("h", gWd - (tileSize * 8), gHt - (tileSize * 15), 1, "cakeHalfR", true);

  addTile("h", gWd - (tileSize * 4), gHt - (tileSize * 18), 1, "cakeHalfL", true);
  addTile("h", gWd - (tileSize * 3), gHt - (tileSize * 18), 1, "cakeHalfR", true);

  addTile("h", gWd - (tileSize * 8), gHt - (tileSize * 21), 1, "snowHalfL", true);
  addTile("h", gWd - (tileSize * 7), gHt - (tileSize * 21), 1, "snowHalfR", true);

  addTile("h", gWd - (tileSize * 13), gHt - (tileSize * 24), 1, "snowHalfL", true);
  addTile("h", gWd - (tileSize * 12), gHt - (tileSize * 24), 1, "snowHalfR", true);

  addTile("h", gWd - (tileSize * 8), gHt - (tileSize * 27), 1, "snowHalfL", true);
  addTile("h", gWd - (tileSize * 7), gHt - (tileSize * 27), 1, "snowHalfR", true);

  addTile("h", gWd - (tileSize * 3), tileSize * 6, 1, "snowHalfL", true);
  addTile("h", gWd - (tileSize * 2), tileSize * 6, 1, "snowHalfM", true);

  addTile("h", gWd - (tileSize * 3), tileSize * 3, 1, "snowLedgeR", true);
  addTile("h", gWd - (tileSize * 2), tileSize * 3, 1, "snowMid", true);

  // Tunnel
  addTile("h", tileSize, gHt - (tileSize * 15), 10, "chocoHalfM", true);
  addTile("h", (tileSize * 3), gHt - (tileSize * 18), 8, "chocoHalfM", true);

  addTile("h", tileSize * 20, gHt - (tileSize * 11), 1, "chocoHalfL", true);
  addTile("h", tileSize * 21, gHt - (tileSize * 11), 1, "chocoHalfR", true);

  addTile("h", tileSize * 15, gHt - (tileSize * 13), 1, "chocoHalfL", true);
  addTile("h", tileSize * 16, gHt - (tileSize * 13), 1, "chocoHalfR", true);

  // Left snow ledges
  addTile("h", tileSize, gHt - (tileSize * 21), 1, "cakeHalfM", true);
  addTile("h", tileSize * 2, gHt - (tileSize * 21), 1, "cakeHalfR", true);

  addTile("h", tileSize * 4, gHt - (tileSize * 24), 1, "cakeHalfL", true);
  addTile("h", tileSize * 5, gHt - (tileSize * 24), 1, "cakeHalfR", true);

  addTile("h", tileSize, gHt - (tileSize * 27), 1, "snowHalfM", true);
  addTile("h", tileSize * 2, gHt - (tileSize * 27), 1, "snowHalfR", true);

  addTile("h", tileSize * 4, gHt - (tileSize * 30), 1, "snowHalfL", true);
  addTile("h", tileSize * 5, gHt - (tileSize * 30), 1, "snowHalfR", true);

  addTile("h", tileSize, tileSize * 3, 1, "snowMid", true);
  addTile("h", tileSize * 2, tileSize * 3, 1, "snowLedgeL", true);

  // Howl's Stationary Castle
  addTile("h", tileSize * 15, tileSize * 5, 1, "chimney", true);
  addTile("h", tileSize * 30, tileSize * 5, 1, "chimney", true);
  addTile("h", tileSize * 15, tileSize * 6, 1, "houseTL", true);
  addTile("h", tileSize * 16, tileSize * 6, 14, "houseTM", true);
  addTile("h", tileSize * 30, tileSize * 6, 1, "houseTR", true);

  addCastle("h", tileSize * 16, tileSize * 7, 14, "house");
  addCastle("h", tileSize * 16, tileSize * 8, 14, "house");
  addCastle("h", tileSize * 16, tileSize * 9, 14, "house");
  addCastle("h", tileSize * 16, tileSize * 10, 14, "house");
  addCastle("h", tileSize * 16, tileSize * 11, 14, "house");
  addCastle("h", tileSize * 16, tileSize * 12, 14, "house");
  addCastle("v", tileSize * 15, tileSize * 7, 6, "houseLeft");
  addCastle("v", tileSize * 30, tileSize * 7, 6, "houseRight");

  addTile("h", tileSize * 15, tileSize * 13, 1, "houseBL", true);
  addTile("h", tileSize * 16, tileSize * 13, 14, "houseBM", true);
  addTile("h", tileSize * 30, tileSize * 13, 1, "houseBR", true);

  var door = decorations.create(tileSize * 21.5, tileSize * 10, "doorLock");
  door.scale.setTo(1.8, 1.8);
  var doorTop = decorations.create(tileSize * 21.5, tileSize * 7, "doorTop");
  doorTop.scale.setTo(1.8, 1.8);

  var stick = decorations.create(tileSize * 16, tileSize * 11.5, "lolliStick");
  var lolli = platforms.create(tileSize * 16, tileSize * 9.9, "lolliGreen");

  stick = decorations.create(tileSize * 19, tileSize * 11.5, "lolliStick");
  lolli = platforms.create(tileSize * 19, tileSize * 9.9, "lolliGreen");

  stick = decorations.create(tileSize * 25.4, tileSize * 11.5, "lolliStick");
  lolli = platforms.create(tileSize * 25.4, tileSize * 9.9, "lolliGreen");

  stick = decorations.create(tileSize * 28.4, tileSize * 11.5, "lolliStick");
  lolli = platforms.create(tileSize * 28.4, tileSize * 9.9, "lolliGreen");

  var cherry = decorations.create(tileSize * 15.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 17.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 19.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 21.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 23.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 25.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 27.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);

  cherry = decorations.create(tileSize * 29.5, tileSize * 7, "cherry");
  cherry.scale.setTo(0.5, 0.5);
}

function addTile(direction, startX, startY, num, floorType, bool){
  if(direction === "h"){
    for(var i=0; i < num; i++){
      var tile = platforms.create(startX + (i * tileSize), startY, floorType);
      tile.scale.setTo(0.6, 0.6);
      tile.body.immovable = bool;
    }
  } else if(direction === "v"){
    for(var i=0; i < num; i++){
      tile = platforms.create(startX, startY + (i * tileSize), floorType);
      tile.scale.setTo(0.6, 0.6);
      tile.body.immovable = bool;
    }
  }
}

function addCastle(direction, startX, startY, num, floorType){
  if(direction === "h"){
    for(var i=0; i < num; i++){
      var tile = decorations.create(startX + (i * tileSize), startY, floorType);
      tile.scale.setTo(0.6, 0.6);
    }
  } else if(direction === "v"){
    for(var i=0; i < num; i++){
      tile = decorations.create(startX, startY + (i * tileSize), floorType);
      tile.scale.setTo(0.6, 0.6);
    }
  }
}

function addWater(direction, startX, startY, num, floorType, bool){
  if(direction === "h"){
    for(var i=0; i < num; i++){
      var tile = danger.create(startX + (i * tileSize), startY, floorType);
      tile.scale.setTo(0.33, 0.33);
      tile.body.immovable = bool;
    }
  } else if(direction === "v"){
    for(var i=0; i < num; i++){
      tile = danger.create(startX, startY + (i * tileSize), floorType);
      tile.scale.setTo(0.33, 0.33);
      tile.body.immovable = bool;
    }
  }
}

function addDecoration(startX, startY, item){
  var el = decorations.create(startX, startY, item);
  el.scale.setTo(0.3,0.3);
}
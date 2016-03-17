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
  game.world.setBounds(0, 0, 2000, 2000);
  
  // Add background
  background = game.add.tileSprite(0, 0, 1250, 700, "background");
  background.fixedToCamera = true;

  // Add player and player physics
  player = game.add.sprite(50, game.world.height - 300, "cat");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 2000/*200*/;
  player.body.collideWorldBounds = true;
  // Add player animations
  player.animations.add("left", [0]);
  player.animations.add("right", [1]);
  // Set camera to follow player
  game.camera.follow(player);

  // Adjust player/enemy size
  player.body.setSize(60,55,5,17);
  // enemy.body.setSize(67,35,5,18);

  // Adding controls
  cursors = game.input.keyboard.createCursorKeys();

  // Create groups
  gems = game.add.group();
  gems.enableBody = true;

  platforms = game.add.group();
  platforms.enableBody = true;
  
  danger = game.add.group();
  danger.enableBody = true;

  decorations = game.add.group();
  decorations.enableBody = true;

  // Create level
  generateWorld();
}

function generateWorld(){
  var gWd = game.world.width, gHt = game.world.height;

  // Adding borders
  addTile("v", 0, 0, Math.ceil(gHt / tileSize), "planetRight", true);
  addTile("v", gWd - tileSize, 0, Math.ceil(gHt / tileSize), "planetLeft", true);
  addTile("h", 0, gHt - tileSize, Math.ceil(gWd / tileSize), "grassMid", true);
  addTile("h", 0, 0, Math.ceil(gWd / tileSize), "snowMidU", true);

  // Level 1
  addTile("h", 0, gHt - (tileSize * 2), 4, "chocoMid", true);
  addTile("h", 0, gHt - (tileSize * 3), 4, "sandMid", true);
  addTile("h", 0, gHt - (tileSize * 4), 4, "cakeMid", true);
  addTile("h", (tileSize * 4), gHt - (tileSize * 4), 1, "cakeTR", true);
  addTile("v", (tileSize * 4), gHt - (tileSize * 3), 2, "cakeRight", true);

  // Chocolate cake
  addTile("h", (tileSize * 10), gHt - (tileSize * 2), 1, "chocoTL", true);
  addTile("h", (tileSize * 11), gHt - (tileSize * 2), 1, "chocoCL", true);
  addTile("h", (tileSize * 11), gHt - (tileSize * 3), 1, "chocoTL", true);
  addTile("h", (tileSize * 12), gHt - (tileSize * 3), 1, "chocoTR", true);

  // Ice-cream cake
  addTile("h", (tileSize * 12), gHt - (tileSize * 2), 1, "tundraTL", true);
  addTile("h", (tileSize * 13), gHt - (tileSize * 2), 2, "tundraMid", true);

  // Strawberry cake
  addTile("v", (tileSize * 15), gHt - (tileSize * 4), 3, "cakeLeft", true);
  addTile("v", (tileSize * 15), gHt - (tileSize * 5), 1, "cakeTL", true);
  addTile("v", (tileSize * 16), gHt - (tileSize * 4), 3, "sandMid", true);
  addTile("v", (tileSize * 16), gHt - (tileSize * 5), 1, "cakeMid", true);
  addTile("v", (tileSize * 17), gHt - (tileSize * 5), 1, "cakeTR", true);
  addTile("v", (tileSize * 17), gHt - (tileSize * 4), 3, "cakeRight", true);
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

function addDecoration(startX, startY, item){
  var el = decorations.create(startX, startY, item);
  el.scale.setTo(0.3,0.3);
}
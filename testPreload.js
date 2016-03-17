function preload(){
  // Load contents of game
  game.load.image("bgd","./assets/background.png");
  game.load.image("gem","./assets/gemCopy.png");
  game.load.image("yarn","./assets/yarnCopy.png");
  game.load.spritesheet("racoon","./assets/racoonSprite.png",77,57,2);
  game.load.spritesheet("cat","./assets/catSprite.png",68,75,2);

  // Load grass tiles
  game.load.image("grassMid","./assets/ground/grass/slice03_03.png");
  game.load.image("leftGrass","./assets/ground/grass/slice23_23.png");
  game.load.image("rightGrass","./assets/ground/grass/slice24_24.png");
  game.load.image("grassTopRight","./assets/ground/grass/slice20_20.png");
  game.load.image("grassTopLeft","./assets/ground/grass/slice19_19.png");
  game.load.image("grass","./assets/ground/grass/slice33_33.png");
  game.load.image("grassCR","./assets/ground/grass/slice22_22.png");
  game.load.image("grassLedgeRight","./assets/ground/grass/slice14_14.png");
  game.load.image("grassHalfLeft","./assets/ground/grass/grassHalfLeft.png");
  game.load.image("grassHalfRight","./assets/ground/grass/grassHalfRight.png");
  
  // Load cake tiles
  game.load.image("cakeMid","./assets/ground/cake/slice03_03.png");
  game.load.image("leftCake","./assets/ground/cake/slice27_27.png");
  game.load.image("rightCake","./assets/ground/cake/slice28_28.png");
  game.load.image("cakeTopLeft","./assets/ground/cake/slice23_23.png");
  game.load.image("cakeTopRight","./assets/ground/cake/slice24_24.png");
  // Load choco tiles
  game.load.image("chocoMid","./assets/ground/choco/slice03_03.png");
  game.load.image("leftChoco","./assets/ground/choco/slice27_27.png");
  game.load.image("rightChoco","./assets/ground/choco/slice28_28.png");
  game.load.image("chocoTopLeft","./assets/ground/choco/slice23_23.png");
  game.load.image("chocoTopRight","./assets/ground/choco/slice24_24.png");
  game.load.image("chocoCL","./assets/ground/choco/slice22_22.png");
  // Tundra tiles
  game.load.image("tundraMid","./assets/ground/tundra/slice03_03.png");
  // Load purple tiles
  game.load.image("purpleMid","./assets/ground/purple/slice03_03.png");
  // Load water tiles
  game.load.image("waterHigh","./assets/ground/tiles/waterTop_high.png");
  // Load sand tiles
  game.load.image("sandMid","./assets/ground/sand/slice03_03.png");
  game.load.image("sandHalfMid","./assets/ground/sand/sandHalfMid.png");
  game.load.image("sandHalfLeft","./assets/ground/sand/sandHalfLeft.png");
  game.load.image("sandHalfRight","./assets/ground/sand/sandHalfRight.png");
  game.load.image("sandTopLeft","./assets/ground/sand/slice19_19.png");
  game.load.image("sandTopRight","./assets/ground/sand/slice20_20.png");
  // Load metal tiles
  game.load.image("metalMidR","./assets/ground/metal/slice01_01.png");
  game.load.image("metalMid","./assets/ground/metal/slice03_03.png");
  // Load snow tiles
  game.load.image("snowMidU","./assets/ground/snow/slice32_32.png");
  // Fishies
  game.load.image("fishGreen","./assets/fishGreen.png");
  game.load.image("fishBlue","./assets/fishBlue.png");
  game.load.image("fishPink","./assets/fishPink.png");
  // Load misc tiles
  game.load.image("flag","./assets/ground/tiles/flagYellow.png");
  game.load.image("rightArrow","./assets/ground/tiles/signRight.png");
  game.load.image("cactus","./assets/ground/tiles/cactus.png");
  game.load.image("rock","./assets/ground/tiles/rock.png");
  game.load.image("bush","./assets/ground/tiles/bush.png");
  game.load.image("grassPlant","./assets/ground/tiles/grass.png");
  game.load.image("spikes","./assets/ground/tiles/spikes.png");
}
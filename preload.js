function preload(){
  // Background
  game.load.image("background", "./assets/background.png");

  // Player, enemy
  game.load.spritesheet("cat","./assets/catSprite.png",68,75,2);
  game.load.spritesheet("racoon","./assets/racoonSprite.png",77,57,2);

  // Collectibles
  game.load.image("gem", "./assets/gem.png");
  game.load.image("yarn", "./assets/yarn.png");

  // Fish
  game.load.image("fishBlue", "./assets/fishBlue.png");
  game.load.image("fishGreen", "./assets/fishGreen.png");
  game.load.image("fishPink", "./assets/fishPink.png");

  // Decorations
  game.load.image("flagYellow", "./assets/tile/decoration/flagYellow.png");
  game.load.image("bridge", "./assets/tile/decoration/bridgeA.png");
  game.load.image("bush", "./assets/tile/decoration/bush.png");
  game.load.image("cactus", "./assets/tile/decoration/cactus.png");
  game.load.image("plant", "./assets/tile/decoration/grass.png");
  game.load.image("grassPurple", "./assets/tile/decoration/plantPurple.png");
  game.load.image("signRight", "./assets/tile/decoration/signRight.png");
  game.load.image("signLeft", "./assets/tile/decoration/signLeft.png");
  game.load.image("signExit", "./assets/tile/decoration/signExit.png");
  game.load.image("spikes", "./assets/tile/decoration/spikes.png");

  // Water
  game.load.image("water", "./assets/tile/decoration/waterTop_high.png");

  // Grass tiles
  game.load.image("grassMid", "./assets/tile/grass/slice03_03.png");

  // Planet tiles
  game.load.image("planetMid", "./assets/tile/planet/slice03_03.png");
  game.load.image("planetLeft", "./assets/tile/planet/slice23_23.png");
  game.load.image("planetRight", "./assets/tile/planet/slice24_24.png");

  // Cake tiles
  game.load.image("cake", "./assets/tile/cake/slice31_31.png");
  game.load.image("cakeMidR", "./assets/tile/cake/slice01_01.png");
  game.load.image("cakeMid", "./assets/tile/cake/slice03_03.png");
  game.load.image("cakeMidU", "./assets/tile/cake/slice36_36.png");
  game.load.image("cakeLeft", "./assets/tile/cake/slice27_27.png");
  game.load.image("cakeRight", "./assets/tile/cake/slice28_28.png");
  game.load.image("cakeTL", "./assets/tile/cake/slice23_23.png");
  game.load.image("cakeTR", "./assets/tile/cake/slice24_24.png");
  game.load.image("cakeBL", "./assets/tile/cake/slice32_32.png");
  game.load.image("cakeBR", "./assets/tile/cake/slice33_33.png");

  game.load.image("cakeCR", "./assets/tile/cake/slice21_21.png");
  game.load.image("cakeCL", "./assets/tile/cake/slice22_22.png");
  game.load.image("cakeAltCR", "./assets/tile/cake/slice26_26.png");
  game.load.image("cakeAltCL", "./assets/tile/cake/slice25_25.png");

  game.load.image("cakeLedgeR", "./assets/tile/cake/slice16_16.png");
  game.load.image("cakeLedgeL", "./assets/tile/cake/slice17_17.png");
  game.load.image("cakeLedgeAltR", "./assets/tile/cake/slice18_18.png");
  game.load.image("cakeLedgeAltL", "./assets/tile/cake/slice19_19.png");

  game.load.image("cakeHalf", "./assets/tile/cake/cakeHalfAlt.png");
  game.load.image("cakeHalfM", "./assets/tile/cake/cakeHalfAltMid.png");
  game.load.image("cakeHalfL", "./assets/tile/cake/cakeHalfAltLeft.png");
  game.load.image("cakeHalfR", "./assets/tile/cake/cakeHalfAltRight.png");

  // Choco tiles
  game.load.image("choco", "./assets/tile/choco/slice31_31.png");
  game.load.image("chocoMidR", "./assets/tile/choco/slice01_01.png");
  game.load.image("chocoMid", "./assets/tile/choco/slice03_03.png");
  game.load.image("chocoMidU", "./assets/tile/choco/slice36_36.png");
  game.load.image("chocoLeft", "./assets/tile/choco/slice27_27.png");
  game.load.image("chocoRight", "./assets/tile/choco/slice28_28.png");
  game.load.image("chocoTL", "./assets/tile/choco/slice23_23.png");
  game.load.image("chocoTR", "./assets/tile/choco/slice24_24.png");
  game.load.image("chocoBL", "./assets/tile/choco/slice32_32.png");
  game.load.image("chocoBR", "./assets/tile/choco/slice33_33.png");

  game.load.image("chocoCR", "./assets/tile/choco/slice21_21.png");
  game.load.image("chocoCL", "./assets/tile/choco/slice22_22.png");

  game.load.image("chocoLedgeR", "./assets/tile/choco/slice16_16.png");
  game.load.image("chocoLedgeL", "./assets/tile/choco/slice17_17.png");
  game.load.image("chocoLedgeAltR", "./assets/tile/choco/slice18_18.png");
  game.load.image("chocoLedgeAltL", "./assets/tile/choco/slice19_19.png");

  game.load.image("chocoHalf", "./assets/tile/choco/chocoHalfAlt.png");
  game.load.image("chocoHalfM", "./assets/tile/choco/chocoHalfAltMid.png");
  game.load.image("chocoHalfL", "./assets/tile/choco/chocoHalfAltLeft.png");
  game.load.image("chocoHalfR", "./assets/tile/choco/chocoHalfAltRight.png");

  // Sand tiles
  game.load.image("sand", "./assets/tile/sand/slice27_27.png");
  game.load.image("sandMidR", "./assets/tile/sand/slice01_01.png");
  game.load.image("sandMid", "./assets/tile/sand/slice03_03.png");
  game.load.image("sandMidU", "./assets/tile/sand/slice32_32.png");
  game.load.image("sandLeft", "./assets/tile/sand/slice23_23.png");
  game.load.image("sandRight", "./assets/tile/sand/slice24_24.png");
  game.load.image("sandTL", "./assets/tile/sand/slice19_19.png");
  game.load.image("sandTR", "./assets/tile/sand/slice20_20.png");
  game.load.image("sandBL", "./assets/tile/sand/slice28_28.png");
  game.load.image("sandBR", "./assets/tile/sand/slice29_29.png");

  game.load.image("sandCR", "./assets/tile/sand/slice22_22.png");
  game.load.image("sandCL", "./assets/tile/sand/slice21_21.png");

  game.load.image("sandLedgeR", "./assets/tile/sand/slice12_12.png");
  game.load.image("sandLedgeL", "./assets/tile/sand/slice13_13.png");
  game.load.image("sandLedgeAltR", "./assets/tile/sand/slice14_14.png");
  game.load.image("sandLedgeAltL", "./assets/tile/sand/slice15_15.png");

  // Tundra tiles
  game.load.image("tundra", "./assets/tile/tundra/slice27_27.png");
  game.load.image("tundraMidR", "./assets/tile/tundra/slice01_01.png");
  game.load.image("tundraMid", "./assets/tile/tundra/slice03_03.png");
  game.load.image("tundraMidU", "./assets/tile/tundra/slice32_32.png");
  game.load.image("tundraLeft", "./assets/tile/tundra/slice23_23.png");
  game.load.image("tundraRight", "./assets/tile/tundra/slice24_24.png");
  game.load.image("tundraTL", "./assets/tile/tundra/slice19_19.png");
  game.load.image("tundraTR", "./assets/tile/tundra/slice20_20.png");
  game.load.image("tundraBL", "./assets/tile/tundra/slice28_28.png");
  game.load.image("tundraBR", "./assets/tile/tundra/slice29_29.png");

  game.load.image("tundraCR", "./assets/tile/tundra/slice22_22.png");
  game.load.image("tundraCL", "./assets/tile/tundra/slice21_21.png");

  game.load.image("tundraLedgeR", "./assets/tile/tundra/slice12_12.png");
  game.load.image("tundraLedgeL", "./assets/tile/tundra/slice13_13.png");
  game.load.image("tundraLedgeAltR", "./assets/tile/tundra/slice14_14.png");
  game.load.image("tundraLedgeAltL", "./assets/tile/tundra/slice15_15.png");

  // Candy tiles
  game.load.image("cookieBrown", "./assets/tile/candy/Tiles/cookieBrown.png");
  game.load.image("cookieChoco", "./assets/tile/candy/Tiles/cookieChoco.png");
  game.load.image("cookiePink", "./assets/tile/candy/Tiles/cookiePink.png");

  game.load.image("creamChoco", "./assets/tile/candy/Tiles/creamChoco.png");
  game.load.image("creamMocca", "./assets/tile/candy/Tiles/creamMocca.png");
  game.load.image("creamPink", "./assets/tile/candy/Tiles/creamPink.png");
  game.load.image("creamVanilla", "./assets/tile/candy/Tiles/creamVanilla.png");
  game.load.image("cupCake", "./assets/tile/candy/Tiles/cupCake.png");
  
  game.load.image("waffleChoco", "./assets/tile/candy/Tiles/waffleChoco.png");
  game.load.image("wafflePink", "./assets/tile/candy/Tiles/wafflePink.png");
  game.load.image("waffleWhite", "./assets/tile/candy/Tiles/waffleWhite.png");

  // Snow tiles
  game.load.image("snowMidU", "./assets/tile/snow/slice32_32.png");
}
function preload(){
  // Player, enemy
  game.add.spriteSheet("cat", "assets/catSprite.png");
  game.add.spriteSheet("racoon", "assets/racoonSprite.png");

  // Collectibles
  game.add.image("gem", "assets/gem.png");
  game.add.image("yarn", "assets/yarn.png");

  // Fish
  game.add.image("fishBlue", "assets/fishBlue.png");
  game.add.image("fishGreen", "assets/fishGreen.png");
  game.add.image("fishPink", "assets/fishPink.png");

  // Decorations
  game.add.image("flagYellow", "assets/tiles/decorations/flagYellow.png");
  game.add.image("bridge", "assets/tiles/decorations/bridgeA.png");
  game.add.image("bush", "assets/tiles/decorations/bush.png");
  game.add.image("cactus", "assets/tiles/decorations/cactus.png");
  game.add.image("plant", "assets/tiles/decorations/grass.png");
  game.add.image("grassPurple", "assets/tiles/decorations/plantPurple.png");
  game.add.image("signRight", "assets/tiles/decorations/signRight.png");
  game.add.image("signLeft", "assets/tiles/decorations/signLeft.png");
  game.add.image("signExit", "assets/tiles/decorations/signExit.png");
  game.add.image("spikes", "assets/tiles/decorations/spikes.png");

  // Water
  game.add.image("water", "assets/tiles/decorations/waterTop_high.png");

  // Cake tiles
  game.add.image("cakeMidR", "assets/tile/cake/slice01_01.png");
  game.add.image("cakeMid", "assets/tile/cake/slice03_03.png");
  game.add.image("cakeMidU", "assets/tile/cake/slice36_36.png");
  game.add.image("cakeLeft", "assets/tile/cake/slice27_27.png");
  game.add.image("cakeRight", "assets/tile/cake/slice28_28.png");
  game.add.image("cakeTL", "assets/tile/cake/slice23_23.png");
  game.add.image("cakeTR", "assets/tile/cake/slice24_24.png");
  game.add.image("cakeBL", "assets/tile/cake/slice32_32.png");
  game.add.image("cakeBR", "assets/tile/cake/slice33_33.png");

  game.add.image("cakeCR", "assets/tile/cake/slice21_21.png");
  game.add.image("cakeCL", "assets/tile/cake/slice22_22.png");
  game.add.image("cakeAltCR", "assets/tile/cake/slice26_26.png");
  game.add.image("cakeAltCL", "assets/tile/cake/slice25_25.png");

  game.add.image("cakeLedgeR", "assets/tile/cake/slice16_16.png");
  game.add.image("cakeLedgeL", "assets/tile/cake/slice17_17.png");
  game.add.image("cakeLedgeAltR", "assets/tile/cake/slice18_18.png");
  game.add.image("cakeLedgeAltL", "assets/tile/cake/slice19_19.png");

  game.add.image("cakeHalf", "assets/tile/cake/cakeHalfAlt.png");
  game.add.image("cakeHalfM", "assets/tile/cake/cakeHalfAltMid.png");
  game.add.image("cakeHalfL", "assets/tile/cake/cakeHalfAltLeft.png");
  game.add.image("cakeHalfR", "assets/tile/cake/cakeHalfAltRight.png");

  // Choco tiles
  game.add.image("chocoMidR", "assets/tile/choco/slice01_01.png");
  game.add.image("chocoMid", "assets/tile/choco/slice03_03.png");
  game.add.image("chocoMidU", "assets/tile/choco/slice36_36.png");
  game.add.image("chocoLeft", "assets/tile/choco/slice27_27.png");
  game.add.image("chocoRight", "assets/tile/choco/slice28_28.png");
  game.add.image("chocoTL", "assets/tile/choco/slice23_23.png");
  game.add.image("chocoTR", "assets/tile/choco/slice24_24.png");
  game.add.image("chocoBL", "assets/tile/choco/slice32_32.png");
  game.add.image("chocoBR", "assets/tile/choco/slice33_33.png");

  game.add.image("chocoCR", "assets/tile/choco/slice21_21.png");
  game.add.image("chocoCL", "assets/tile/choco/slice22_22.png");

  game.add.image("chocoLedgeR", "assets/tile/choco/slice16_16.png");
  game.add.image("chocoLedgeL", "assets/tile/choco/slice17_17.png");
  game.add.image("chocoLedgeAltR", "assets/tile/choco/slice18_18.png");
  game.add.image("chocoLedgeAltL", "assets/tile/choco/slice19_19.png");

  game.add.image("chocoHalf", "assets/tile/choco/chocoHalfAlt.png");
  game.add.image("chocoHalfM", "assets/tile/choco/chocoHalfAltMid.png");
  game.add.image("chocoHalfL", "assets/tile/choco/chocoHalfAltLeft.png");
  game.add.image("chocoHalfR", "assets/tile/choco/chocoHalfAltRight.png");

  // Sand tiles
  game.add.image("sandMidR", "assets/tile/sand/slice01_01.png");
  game.add.image("sandMid", "assets/tile/sand/slice03_03.png");
  game.add.image("sandMidU", "assets/tile/sand/slice32_32.png");
  game.add.image("sandLeft", "assets/tile/sand/slice23_23.png");
  game.add.image("sandRight", "assets/tile/sand/slice24_24.png");
  game.add.image("sandTL", "assets/tile/sand/slice19_19.png");
  game.add.image("sandTR", "assets/tile/sand/slice20_20.png");
  game.add.image("sandBL", "assets/tile/sand/slice28_28.png");
  game.add.image("sandBR", "assets/tile/sand/slice29_29.png");

  game.add.image("sandCR", "assets/tile/sand/slice22_22.png");
  game.add.image("sandCL", "assets/tile/sand/slice21_21.png");

  game.add.image("sandLedgeR", "assets/tile/sand/slice12_12.png");
  game.add.image("sandLedgeL", "assets/tile/sand/slice13_13.png");
  game.add.image("sandLedgeAltR", "assets/tile/sand/slice14_14.png");
  game.add.image("sandLedgeAltL", "assets/tile/sand/slice15_15.png");

  // Candy tiles
  game.add.image("candyCane", "assets/tiles/decorations/canePinkSmall.png");
  game.add.image("cookieBrown", "assets/tiles/decorations/cookieBrown.png");
  game.add.image("cookieChoco", "assets/tiles/decorations/cookieChoco.png");
  game.add.image("cookiePink", "assets/tiles/decorations/cookiePink.png");
  game.add.image("creamChoco", "assets/tiles/decorations/creamChoco.png");
  game.add.image("creamMocca", "assets/tiles/decorations/creamMocca.png");
  game.add.image("creamPink", "assets/tiles/decorations/creamPink.png");
  game.add.image("creamVanilla", "assets/tiles/decorations/creamVanilla.png");
  game.add.image("cupCake", "assets/tiles/decorations/cupCake.png");
  game.add.image("waffleChoco", "assets/tiles/decorations/waffleChoco.png");
  game.add.image("wafflePink", "assets/tiles/decorations/wafflePink.png");
  game.add.image("waffleWhite", "assets/tiles/decorations/waffleWhite.png");
}
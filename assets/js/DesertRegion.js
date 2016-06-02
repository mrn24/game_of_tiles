var desertEntrances = [];
var desertCollisions = [];
var desertEntranceChecking;
var desertMapWidth = 40;
var desertMap;
var Fountain;
var desertNpcArray = [];
var desertNpcRangeArray = [];
var desertNpcMessageArray = [];

function FirstDesertLoader(){
  var desertMap = desert.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < desertMap.length; i++) {
  	if (desertMap[i] != 0) {
  		desertCollisions.push(i);
  	}
  }
  //Loading entrances
  var entrances = desert.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      desertEntrances.push(i);
    }
  }



  var FountainArray = [];
  FountainArray.push(PIXI.Texture.fromImage('./assets/Desert/Sprites/Fountain1.png'));
  FountainArray.push(PIXI.Texture.fromImage('./assets/Desert/Sprites/Fountain2.png'));
  FountainArray.push(PIXI.Texture.fromImage('./assets/Desert/Sprites/Fountain3.png'));
  Fountain = new PIXI.extras.MovieClip(FountainArray);
  Fountain.animationSpeed = 0.1;
  Fountain.x = 640;
  Fountain.y = 181;
  Fountain.play();
  desertContainer.addChild(Fountain);

  npcArray = [];
  npcRangeArray = [];

  LoadNPC(260, 4, './assets/Desert/Sprites/DesertWoman', 4, "Have you seen the oasis to the south east?  It's beautiful but it was recently taken over by bandits.");
  desertContainer.addChild(npcArray[0]);
  desertNpcArray.push(npcArray[0]);
  desertNpcRangeArray.push(npcRangeArray[0]);
  desertNpcMessageArray.push(npcMessageArray[0]);

  LoadNPC(340, 2, './assets/Desert/Sprites/DesertWoman', 4, "It's hot!");
  desertContainer.addChild(npcArray[1]);
  desertNpcArray.push(npcArray[1]);
  desertNpcRangeArray.push(npcRangeArray[1]);
  desertNpcMessageArray.push(npcMessageArray[1]);

  LoadNPC(180, 0, './assets/Desert/Sprites/DesertKing', 4, "Go do your quest.");
  desertContainer.addChild(npcArray[2]);
  desertNpcArray.push(npcArray[2]);
  desertNpcRangeArray.push(npcRangeArray[2]);
  desertNpcMessageArray.push(npcMessageArray[2]);

  LoadNPC(306, 1, './assets/Desert/Sprites/DesertMan', 4, "It's the desert!");
  desertContainer.addChild(npcArray[3]);
  desertNpcArray.push(npcArray[3]);
  desertNpcRangeArray.push(npcRangeArray[3]);
  desertNpcMessageArray.push(npcMessageArray[3]);

  // LoadNPC(1037, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  // desertContainer.addChild(npcArray[4]);

  // LoadNPC(1113, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  // desertContainer.addChild(npcArray[5]);

  // LoadNPC(525, 3, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  // desertContainer.addChild(npcArray[6]);

  // LoadNPC(484, 2, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  // desertContainer.addChild(npcArray[7]);

  // LoadNPC(1082, 0, './assets/Dungeon/monsters/SandGolem/Roaming/SandGolem', 4);
  // desertContainer.addChild(npcArray[8]);

  //call loadnpc with map.
  mapContainer.addChild(desertContainer);
  desertContainer.visible = false;
}

function DesertLoader(){
  desertContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to forestCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////



if (previousMap == plains){
  startX = 688;
  startY = 903;

}
else if (previousMap == plains){
  startX = 1232;
  startY = 487;

}
else if (previousMap == desertDungeon){
  startX = 80;
  startY = 871;
}



 
  collisionsIndex = desertCollisions;
  mapWidth = desertMapWidth;
  world = desert;

  

  NPCMovement();

  mapArray = desertMap;
  currentmap = desert;
  var characterLayer = desert.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  SetCharacterPosition();
  SetPosition();




  //Use passed in parameter to load character in the right spot
  desertEntranceChecking = setInterval(DesertEntranceChecker, 500);
}

function DesertEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), desertEntrances)){
    clearInterval(desertEntranceChecking);
    console.log("found entrance in desert");

    if (mainCharacter.x == 1264){
      console.log("going to forest");
      MapTransition(forest);
      desertContainer.visible = false;
    }

    else if (mainCharacter.x == 688){
      console.log("going to plains");
      MapTransition(plains);
      desertContainer.visible = false;
    }

    else if (mainCharacter.x == 80){
      MapTransition(desertDungeon)
      desertContainer.visible = false;
    } 

  }
}

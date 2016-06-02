var desertEntrances = [];
var desertCollisions = [];
var desertNPCArray = [];
var desertEntranceChecking;
var desertMapWidth = 40;
var desertMap;
var Fountain;

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



  switch(previousMap){
    case plains:
      startX = 688;
      startY = 903;
      break;
    case forest:
      startX = 1232;
      startY = 487;
      break;
  }



  npcArray = desertNPCArray;
  collisionsIndex = desertCollisions;
  mapWidth = desertMapWidth;
  world = desert;

  LoadNPC(260, 4, './assets/Desert/Sprites/DesertWoman', 4);
  desertContainer.addChild(npcArray[0]);

  LoadNPC(340, 2, './assets/Desert/Sprites/DesertWoman', 4);
  desertContainer.addChild(npcArray[1]);

  LoadNPC(180, 0, './assets/Desert/Sprites/DesertKing', 4);
  desertContainer.addChild(npcArray[2]);

  LoadNPC(306, 1, './assets/Desert/Sprites/DesertMan', 4);
  desertContainer.addChild(npcArray[3]);

  LoadNPC(1037, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertContainer.addChild(npcArray[4]);

  LoadNPC(1113, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertContainer.addChild(npcArray[5]);

  LoadNPC(525, 3, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertContainer.addChild(npcArray[6]);

  LoadNPC(484, 2, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertContainer.addChild(npcArray[7]);

  LoadNPC(1082, 0, './assets/Dungeon/monsters/SandGolem/Roaming/SandGolem', 4);
  desertContainer.addChild(npcArray[8]);

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
    console.log("VICTORY");

    switch(mainCharacter.x){
      case 1264:
        console.log("going to forest");
        MapTransition(forest);
        break;
      case 688:
        console.log("going to plains");
        MapTransition(plains);
        break;
    }
    desertContainer.visible = false;
  }
}

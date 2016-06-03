var desertEntrances = [];
var desertCollisions = [];
var desertEntranceChecking;
var desertMapWidth = 40;
var desertMap;
var Fountain;
var desertNpcArray = [];
var desertNpcRangeArray = [];
var desertNpcMessageArray = [];
var desertNpcStartArray = [];

var desertEnemyArray = [];
var desertEnemyRangeArray = [];
var desertEnemyStartArray = [];

function FirstDesertLoader(){

  world = desert;
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

  mapWidth = desertMapWidth;
  npcArray = [];
  npcRangeArray = [];
  npcMessageArray = [];
  npcStartArray = [];

  var characterLayer = desert.getObject("CharacterLayer");

  LoadNPC(260, 4, './assets/Desert/Sprites/DesertWoman', 4, "Have you seen the oasis to the south\n east?  It's beautiful but it \nwas recently taken over by bandits.");
  //desertContainer.addChild(npcArray[0]);
  desertNpcArray.push(npcArray[0]);
  desertNpcStartArray.push(npcStartArray[0]);
  desertNpcRangeArray.push(npcRangeArray[0]);
  desertNpcMessageArray.push(npcMessageArray[0]);
  characterLayer.addChild(npcArray[0]);

  LoadNPC(338, 2, './assets/Desert/Sprites/DesertWoman', 4, "It's hot!");
  //desertContainer.addChild(npcArray[1]);
  desertNpcArray.push(npcArray[1]);
  desertNpcStartArray.push(npcStartArray[1]);
  desertNpcRangeArray.push(npcRangeArray[1]);
  desertNpcMessageArray.push(npcMessageArray[1]);
  characterLayer.addChild(npcArray[1]);

  LoadNPC(180, 0, './assets/Desert/Sprites/DesertKing', 4, "Go do your quest.");
  //desertContainer.addChild(npcArray[2]);
  desertNpcArray.push(npcArray[2]);
  desertNpcStartArray.push(npcStartArray[2]);
  desertNpcRangeArray.push(npcRangeArray[2]);
  desertNpcMessageArray.push(npcMessageArray[2]);
  characterLayer.addChild(npcArray[2]);

  LoadNPC(346, 1, './assets/Desert/Sprites/DesertMan', 4, "It's the desert!");
  //desertContainer.addChild(npcArray[3]);
  desertNpcArray.push(npcArray[3]);
  desertNpcStartArray.push(npcStartArray[3]);
  desertNpcRangeArray.push(npcRangeArray[3]);
  desertNpcMessageArray.push(npcMessageArray[3]);
  characterLayer.addChild(npcArray[3]);

  NPCMovement();
  EnemyMovement();
  mapContainer.addChild(desertContainer);
  desertContainer.visible = false;

  enemyArray = [];
  enemyRangeArray = [];
  enemyStartArray = [];


  LoadEnemy(1037, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertEnemyArray.push(enemyArray[0]);
  desertEnemyStartArray.push(enemyStartArray[0]);
  desertEnemyRangeArray.push(enemyRangeArray[0]);
  characterLayer.addChild(enemyArray[0]);

  LoadEnemy(1113, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertEnemyArray.push(enemyArray[1]);
  desertEnemyStartArray.push(enemyStartArray[1]);
  desertEnemyRangeArray.push(enemyRangeArray[1]);
  characterLayer.addChild(enemyArray[1]);

  LoadEnemy(525, 3, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertEnemyArray.push(enemyArray[2]);
  desertEnemyStartArray.push(enemyStartArray[2]);
  desertEnemyRangeArray.push(enemyRangeArray[2]);
  characterLayer.addChild(enemyArray[2]);

  LoadEnemy(484, 2, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertEnemyArray.push(enemyArray[3]);
  desertEnemyStartArray.push(enemyStartArray[3]);
  desertEnemyRangeArray.push(enemyRangeArray[3]);
  characterLayer.addChild(enemyArray[3]);

  LoadEnemy(1082, 0, './assets/Dungeon/monsters/SandGolem/Roaming/SandGolem', 4);
  desertEnemyArray.push(enemyArray[4]);
  desertEnemyStartArray.push(enemyStartArray[4]);
  desertEnemyRangeArray.push(enemyRangeArray[4]);
  characterLayer.addChild(enemyArray[4]);

  //call loadnpc with map.
  
  
}

function DesertLoader(){
  mapWidth = desertMapWidth;
  desertContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to forestCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = desertCollisions;
  mapArray = desertMap;
  npcArray = desertNpcArray;
  npcRangeArray = desertNpcRangeArray;
  npcMessageArray = desertNpcMessageArray;
  npcStartArray = desertNpcStartArray;

  enemyArray = desertEnemyArray;
  enemyRangeArray = desertEnemyRangeArray;
  enemyStartArray = desertEnemyStartArray;

  enemyArray = 
  //currentmap = desert;

  
  
  world = desert;
  



if (previousMap == plains){
  startX = 688;
  startY = 839;

}
else if (previousMap == forest){
  startX = 1104;
  startY = 487;

}
else if (previousMap == desertDungeon){
  startX = 240;
  startY = 743;
}

  

  
  characterLayer = desert.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  SetCharacterPosition();
  SetPosition();
  //NPCMovement();




  //Use passed in parameter to load character in the right spot
  desertEntranceChecking = setInterval(DesertEntranceChecker, 500);
}

function DesertEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), desertEntrances)){
    if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
      clearInterval(desertEntranceChecking);
      console.log("found entrance in desert");

      if (mainCharacter.x == 1232){
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
}

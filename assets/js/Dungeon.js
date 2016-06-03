var characterLayer;
var shieldSprite;




var DesertDungeonEntrances = [];
var DesertDungeonCollisions = [];
var DesertDungeonEntranceChecking;
var DesertDungeonMapWidth = 30;
var DesertDungeonMap;

var desertDungeonEnemyArray = [];
var desertDungeonEnemyRangeArray = [];
var desertDungeonEnemyStartArray = [];


function FirstDesertDungeonLoader(){
  world = desertDungeon;
  DesertDungeonMap = desertDungeon.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < DesertDungeonMap.length; i++) {
		if (DesertDungeonMap[i] != 0) {
			DesertDungeonCollisions.push(i);
		}
	}
  //Loading entrances
  var entrances = desertDungeon.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      DesertDungeonEntrances.push(i);
    }
  }
  //call loadnpc with map.
  mapContainer.addChild(desertDungeonContainer);
  desertDungeonContainer.visible = false;

  enemyArray = [];
  enemyRangeArray = [];
  enemyStartArray = [];

  characterLayer = desertDungeon.getObject("CharacterLayer");
  LoadEnemy(290, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertDungeonEnemyArray.push(enemyArray[0]);
  desertDungeonEnemyStartArray.push(enemyStartArray[0]);
  desertDungeonEnemyRangeArray.push(enemyRangeArray[0]);
  characterLayer.addChild(enemyArray[0]);

  LoadEnemy(461, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  desertDungeonEnemyArray.push(enemyArray[1]);
  desertDungeonEnemyStartArray.push(enemyStartArray[1]);
  desertDungeonEnemyRangeArray.push(enemyRangeArray[1]);
  characterLayer.addChild(enemyArray[1]);

  LoadEnemy(755, 3, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertDungeonEnemyArray.push(enemyArray[2]);
  desertDungeonEnemyStartArray.push(enemyStartArray[2]);
  desertDungeonEnemyRangeArray.push(enemyRangeArray[2]);
  characterLayer.addChild(enemyArray[2]);

  LoadEnemy(764, 2, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  desertDungeonEnemyArray.push(enemyArray[3]);
  desertDungeonEnemyStartArray.push(enemyStartArray[3]);
  desertDungeonEnemyRangeArray.push(enemyRangeArray[3]);
  characterLayer.addChild(enemyArray[3]);

  LoadEnemy(592, 0, './assets/Dungeon/monsters/SandGolem/Roaming/SandGolem', 4);
  desertDungeonEnemyArray.push(enemyArray[4]);
  desertDungeonEnemyStartArray.push(enemyStartArray[4]);
  desertDungeonEnemyRangeArray.push(enemyRangeArray[4]);
  characterLayer.addChild(enemyArray[4]);

  //call loadnpc with map.


}

function desertDungeonLoader(){
  world = desertDungeon;
  console.log("loading desertDungeon!")
  mapWidth = DesertDungeonMapWidth;
  desertDungeonContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to DesertDungeonCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = DesertDungeonCollisions;
  mapArray = DesertDungeonMap;

  characterLayer = desertDungeon.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  startX = 80;
  startY = 295;
  SetCharacterPosition();
  SetPosition();
  //Use passed in parameter to load character in the right spot
  DesertDungeonEntranceChecking = setInterval(desertDungeonEntranceChecker, 500);

    enemyArray = desertDungeonEnemyArray;
    enemyRangeArray = desertDungeonEnemyRangeArray;
    enemyStartArray = desertDungeonEnemyStartArray;



}


function desertDungeonEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), DesertDungeonEntrances)){
      if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
    clearInterval(DesertDungeonEntranceChecking);
    MapTransition(desert);
    console.log("Found Entrance!");

    desertDungeonContainer.visible = false;
  }
}
}


/////////////////////////////////////////////////////////////////////////////////////////////

//Spawn Points
//x = 80
//y = 103

var ForestDungeonEntrances = [];
var ForestDungeonCollisions = [];
var ForestDungeonEntranceChecking;
var ForestDungeonMapWidth = 30;
var ForestDungeonMap;


var forestDungeonEnemyArray = [];
var forestDungeonEnemyRangeArray = [];
var forestDungeonEnemyStartArray = [];

function FirstForestDungeonLoader(){
  world = forestDungeon;
  ForestDungeonMap = forestDungeon.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < ForestDungeonMap.length; i++) {
		if (ForestDungeonMap[i] != 0) {
			ForestDungeonCollisions.push(i);
		}
	}
  //Loading entrances
  var entrances = forestDungeon.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      ForestDungeonEntrances.push(i);
    }
  }
  //Spawning shield
  var shield = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/Shield/shield1.png");
  shieldSprite = new PIXI.Sprite(shield);
  shieldSprite.anchor.x = 0.5;
  shieldSprite.anchor.y = 0.5;
  shieldSprite.position.x = 752;
  shieldSprite.position.y = 839;

  forestDungeonContainer.addChild(shieldSprite);


  //call loadnpc with map.
  mapContainer.addChild(forestDungeonContainer);
  forestDungeonContainer.visible = false;

  enemyArray = [];
  enemyRangeArray = [];
  enemyStartArray = [];

  characterLayer = forestDungeon.getObject("CharacterLayer");
  LoadEnemy(290, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  forestDungeonEnemyArray.push(enemyArray[0]);
  forestDungeonEnemyStartArray.push(enemyStartArray[0]);
  forestDungeonEnemyRangeArray.push(enemyRangeArray[0]);
  characterLayer.addChild(enemyArray[0]);

  LoadEnemy(461, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  forestDungeonEnemyArray.push(enemyArray[1]);
  forestDungeonEnemyStartArray.push(enemyStartArray[1]);
  forestDungeonEnemyRangeArray.push(enemyRangeArray[1]);
  characterLayer.addChild(enemyArray[1]);

  LoadEnemy(755, 3, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  forestDungeonEnemyArray.push(enemyArray[2]);
  forestDungeonEnemyStartArray.push(enemyStartArray[2]);
  forestDungeonEnemyRangeArray.push(enemyRangeArray[2]);
  characterLayer.addChild(enemyArray[2]);

  LoadEnemy(764, 2, './assets/Dungeon/monsters/Skeleton/Roaming/Skeleton', 4);
  forestDungeonEnemyArray.push(enemyArray[3]);
  forestDungeonEnemyStartArray.push(enemyStartArray[3]);
  forestDungeonEnemyRangeArray.push(enemyRangeArray[3]);
  characterLayer.addChild(enemyArray[3]);

  LoadEnemy(592, 0, './assets/Dungeon/monsters/SandGolem/Roaming/SandGolem', 4);
  forestDungeonEnemyArray.push(enemyArray[4]);
  forestDungeonEnemyStartArray.push(enemyStartArray[4]);
  forestDungeonEnemyRangeArray.push(enemyRangeArray[4]);
  characterLayer.addChild(enemyArray[4]);

  //call loadnpc with map.

}

function forestDungeonLoader(){
  world = forestDungeon;
  console.log("loading desertDungeon!")
  mapWidth = ForestDungeonMapWidth;
  forestDungeonContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to DesertDungeonCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = ForestDungeonCollisions;
  mapArray = ForestDungeonMap;


  characterLayer = forestDungeon.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  startX = 80;
  startY = 103;
  SetCharacterPosition();
  SetPosition();
  //Use passed in parameter to load character in the right spot
  ForestDungeonEntranceChecking = setInterval(forestDungeonEntranceChecker, 500);

  enemyArray = forestDungeonEnemyArray;
  enemyRangeArray = forestDungeonEnemyRangeArray;
  enemyStartArray = forestDungeonEnemyStartArray;

  //
  // var textureArray2 = [];
	// for (var i = 1; i < 5; i++) {
	// 	texture2 = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSwordShield/CharacterSwordShield"+i+".png");
	// 	textureArray2.push(texture2);
	// }
  //
  //
	// mainCharacter = new PIXI.extras.MovieClip(textureArray2);



}

function forestDungeonEntranceChecker(){

  //Grab shield
  if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 803 && !hasShield){
    console.log("Grabbed shield");
    characterLayer.removeChild(mainCharacter);
    LoadSwordShield();
    characterLayer = forestDungeon.getObject("CharacterLayer");
    characterLayer.addChild(mainCharacter);
    forestDungeonContainer.removeChild(shieldSprite);
    hasShield = true;
    textHandler("You've grabbed the\nshield", 20);
  }



  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), ForestDungeonEntrances)){
      if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
    clearInterval(ForestDungeonEntranceChecking);
    MapTransition(forest);
    console.log("Found Entrance!")

    forestDungeonContainer.visible = false;
  }
}
}

///////////////////////////////////////////////////////////////////////////////////

var PlainsDungeonEntrances = [];
var PlainsDungeonCollisions = [];
var PlainsDungeonEntranceChecking;
var PlainsDungeonMapWidth = 18;
var PlainsDungeonMap;

var plainsDungeonEnemyArray = [];
var plainsDungeonEnemyRangeArray = [];
var plainsDungeonEnemyStartArray = [];

function FirstPlainsDungeonLoader(){
  world = plainsDungeon;
  PlainsDungeonMap = plainsDungeon.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < PlainsDungeonMap.length; i++) {
		if (PlainsDungeonMap[i] != 0) {
			PlainsDungeonCollisions.push(i);
		}
	}
  //Loading entrances
  var entrances = plainsDungeon.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      PlainsDungeonEntrances.push(i);
    }
  }
  //call loadnpc with map.
  mapContainer.addChild(plainsDungeonContainer);
  plainsDungeonContainer.visible = false;

  enemyArray = [];
  enemyRangeArray = [];
  enemyStartArray = [];

  characterLayer = plainsDungeon.getObject("CharacterLayer");
  LoadEnemy(188, 1, './assets/Dungeon/monsters/Raider/Roaming/raider', 4);
  plainsDungeonEnemyArray.push(enemyArray[0]);
  plainsDungeonEnemyStartArray.push(enemyStartArray[0]);
  plainsDungeonEnemyRangeArray.push(enemyRangeArray[0]);
  characterLayer.addChild(enemyArray[0]);

}

function plainsDungeonLoader(){
  world = plainsDungeon;
  console.log("loading desertDungeon!")
  mapWidth = PlainsDungeonMapWidth;
  plainsDungeonContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to DesertDungeonCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = PlainsDungeonCollisions;
  mapArray = PlainsDungeonMap;

  characterLayer = plainsDungeon.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  startY = 80;
  startX = 71;
  SetCharacterPosition();
  SetPosition();
  //Use passed in parameter to load character in the right spot
  PlainsDungeonEntranceChecking = setInterval(plainsDungeonEntranceChecker, 500);

  enemyArray = plainsDungeonEnemyArray;
  enemyRangeArray = plainsDungeonEnemyRangeArray;
  enemyStartArray = plainsDungeonEnemyStartArray;
}

function plainsDungeonEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), PlainsDungeonEntrances)){
      if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
    clearInterval(PlainsDungeonEntranceChecking);
    MapTransition(plains);
    console.log("Found Entrance!")

    plainsDungeonContainer.visible = false;
  }
}
}

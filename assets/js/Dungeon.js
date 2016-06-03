var characterLayer;
var shieldSprite;




var DesertDungeonEntrances = [];
var DesertDungeonCollisions = [];
var DesertDungeonEntranceChecking;
var DesertDungeonMapWidth = 30;
var DesertDungeonMap;

function FirstDesertDungeonLoader(){
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
}

function desertDungeonLoader(){
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

function FirstForestDungeonLoader(){
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
}

function forestDungeonLoader(){
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

function FirstPlainsDungeonLoader(){
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
}

function plainsDungeonLoader(){
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

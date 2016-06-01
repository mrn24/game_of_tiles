var desertEntrances = [];
var desertCollisions = [];
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
  collisionsIndex = desertCollisions;
  mapWidth = desertMapWidth;

  mapArray = desertMap;
  currentmap = desert;
  var characterLayer = desert.getObject("CharacterLayer");
  LoadCharacter();
  characterLayer.addChild(mainCharacter);




  //Use passed in parameter to load character in the right spot
  desertEntranceChecking = setInterval(DesertEntranceChecker, 500);
}

function DesertEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), desertEntrances)){
    clearInterval(desertEntranceChecking);
    //Which entrance?, send to transition function
  }
}

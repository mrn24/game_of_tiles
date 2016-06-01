var desertEntrances = [];
var desertCollisions = [];
var desertEntranceChecking;
var desertMapWidth = 40;
var desertMap;

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

var plainsEntrances = [];
var plainsCollisions = [];
var plainsEntranceChecking;
var plainsMapWidth = 30;

function FirstPlainsLoader(){
  var plainsMap = plains.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < plainsMap.length; i++) {
		if (plainsMap[i] != 0) {
			plainsCollisions.push(i);
		}
	}
  //Loading entrances
  var entrances = plains.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      plainsEntrances.push(i);
    }
  }
  //call loadnpc with map.
  stage.addChild(plainsContainer);
  plainsContainer.visible = false;
}

function PlainsLoader(){
  plainsContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to plainsCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = plainsCollisions;
  mapWidth = plainsMapWidth;
  //Use passed in parameter to load character in the right spot
  plainsEntranceChecking = setInverval(PlainsEntranceChecker, 500);
}

function PlainsEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), plainsEntrances)){
    clearInterval(plainsEntranceChecking);
    //Which entrance?, send to transition function
  }
}

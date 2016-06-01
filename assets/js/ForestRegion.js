var forestEntrances = [];
var forestCollisions = [];
var forestEntranceChecking;
var forestMapWidth = 30;

function FirstForestLoader(){
  var forestMap = forest.getObject("CollisionLayer").data;
  //Loading Collisions
  for (var i = 0; i < forestMap.length; i++) {
		if (forestMap[i] != 0) {
			forestCollisions.push(i);
		}
	}
  //Loading entrances
  var entrances = forest.getObject("EntranceLayer").data;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] != 0){
      forestEntrances.push(i);
    }
  }
  //call loadnpc with map.
  stage.addChild(forestContainer);
  forestContainer.visible = false;
}

function ForestLoader(){
  forestContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to forestCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = forestCollisions;
  mapWidth = forestMapWidth;
  //Use passed in parameter to load character in the right spot
  forestEntranceChecking = setInverval(ForestEntranceChecker, 500);
}

function ForestEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), forestEntrances)){
    clearInterval(forestEntranceChecking);
    //Which entrance?, send to transition function
  }
}

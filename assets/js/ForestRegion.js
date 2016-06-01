var forestEntrances = [];
var forestCollisions = [];
var forestEntranceChecking;
var forestMapWidth = 30;
var forestMap;

function FirstForestLoader(){
  forestMap = forest.getObject("CollisionLayer").data;
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
  mapContainer.addChild(forestContainer);
  forestContainer.visible = false;
}

function ForestLoader(){
  console.log("loading Forest!")
  mapWidth = forestMapWidth;
  forestContainer.visible = true;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to forestCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = forestCollisions;
  mapArray = forestMap;

  previousMap = desert;
  currentMap = forest;

  switch(previousMap){
    case desert:
      startX = 48;
      startY = 391;
      break;
    case plains:
      startX = 496;
      startY = 903;
      break;
  }
  var characterLayer = forest.getObject("CharacterLayer");
  LoadCharacter();
  characterLayer.addChild(mainCharacter);
  SetPosition();
  //Use passed in parameter to load character in the right spot
  forestEntranceChecking = setInterval(ForestEntranceChecker, 500);
}

function ForestEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), forestEntrances)){
    clearInterval(forestEntranceChecking);
    console.log("Found Entrance!")
    characterLayer.removeChild(mainCharacter);
    //Which entrance?, send to transition function
    switch(mainCharacter.x){
      case 496:
        console.log("Going to plains");
        MapTransition(plains);
        break;
      case 16:
        console.log("going to desert");
        MapTransition(desert);
        break;
    }
  }
}

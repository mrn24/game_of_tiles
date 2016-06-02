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

  if (previousMap == desert){
    startX = 80;
    startY = 391;
  }else if(previousMap == plains){
    startX = 496;
    startY = 871;
  }else if(previousMap == forestDungeon){
    startX = 656;
    startY = 839;
  }else{
    console.log("broken");
  }
  var characterLayer = forest.getObject("CharacterLayer");
  characterLayer.addChild(mainCharacter);
  SetCharacterPosition();
  SetPosition();
  //Use passed in parameter to load character in the right spot
  forestEntranceChecking = setInterval(ForestEntranceChecker, 500);
}

function ForestEntranceChecker(){
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), forestEntrances)){
    clearInterval(forestEntranceChecking);
    console.log("Found Entrance!");
    //Which entrance?, send to transition function
    //Plains leave 855
    //Forest dungeon 770
    //Desert 361
    if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 361) {
        console.log("Going to Desert");
  	  MapTransition(desert);
      }
  	else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 855) {
  		console.log("Going to Plains");
  		MapTransition(plains);
  	} else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 770) {
  		console.log("Going to Dungeon");
  		MapTransition(forestDungeon);
  	} else {
  		console.log("Dead");
  	}
    forestContainer.visible = false;
  }
}

var plainsEntrances = [];
var plainsCollisions = [];
var plainsEntranceChecking;
var plainsMapWidth = 50;
var plainsNpcArray = [];

function FirstPlainsLoader(){
	world = plains;
	currentMap = plains;
	previousMap = desert;
  //Loading entrances
  var plainsMap = plains.getObject("CollisionLayer").data;
  //Loading Collisions
	for (var i = 0; i < plainsMap.length; i++) {
		if (plainsMap[i] != 0) {
			plainsCollisions.push(i);
		}
	}
	var entrances = plains.getObject("EntranceLayer").data;
    for (var i = 0; i < entrances.length; i++) {
		if (entrances[i] != 0){
		  plainsEntrances.push(i);
		}
	}
  //call loadnpc with map.
  //function LoadNPC(index, range, fileLocation, numSprites) {
	  //LoadNPC(260, 4, './assets/Desert/Sprites/DesertWoman', 4);
	  LoadNPC(540,4,"./assets/Characters/NPCs/Enemy", 4);
	  var characterLayer = plains.getObject("CharacterLayer");
	  plainsNpcArray.push(npcArray[0]);
	characterLayer.addChild(npcArray[0]);
	  //LoadNPC(535,4,"./assets/Characters/NPCs/Enemy", 4);
	  //LoadNPC(535,4,"./assets/Characters/NPCs/Enemy", 4);
	  //LoadNPC(535,4,"./assets/Characters/NPCs/Enemy", 4);
	  
	  NPCMovement();
  mapContainer.addChild(plainsContainer);
  plainsContainer.visible = false;
}

function PlainsLoader(){
  console.log("Loading Plains");
  plainsContainer.visible = true;
  mapWidth = plainsMapWidth;
  world = plains;
  //////////////////////////////
  //Risk! collisionsIndex is a//
  //pointer to plainsCollisions//
  //Never set collisionsIndex to []//
  ///////////////////////////////////
  collisionsIndex = plainsCollisions;
  mapWidth = plainsMapWidth;
  npcArray = plainsNpcArray;
  if (previousMap == plains) {
	  	startX = 592;
		startY = 1159;
  } else if (previousMap == desert) {
	  	startX = 1360;
		startY = 39;
  } else if (previousMap == forest) {
	  console.log("Coming from Forest");
	  	startX = 1552;
		startY = 295;
  }

	var characterLayer = plains.getObject("CharacterLayer");
	characterLayer.addChild(mainCharacter);
	SetCharacterPosition();
	SetPosition();
  //Use passed in parameter to load character in the right spot
  plainsEntranceChecking = setInterval(PlainsEntranceChecker, 100);
  
}

function PlainsEntranceChecker(){
	console.log("Checking Entrance Collisions.");
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), plainsEntrances)){
	if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
	clearInterval(plainsEntranceChecking);
	console.log("Found Entrance!");
    //Which entrance?, send to transition function
	if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 499) {
      console.log("Going to Forest");
	  MapTransition(forest);
    }
	else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 42) {
		console.log("Going to Desert");
		MapTransition(desert);
	} else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 176) {
		console.log("Going to Dungeon");
		MapTransition(plainsDungeon);
	} else {
		console.log("Dead");
	}
	plainsContainer.visible = false;
  }
  }
}
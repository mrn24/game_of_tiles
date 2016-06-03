var forestEntrances = [];
var forestCollisions = [];
var forestNpcArray = [];
var forestRangeArray = [];
var forestMessageArray = [];
var forestStartArray = [];
var forestEntranceChecking;
var forestMapWidth = 30;
var forestMap;

function FirstForestLoader(){
  world = forest;
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
  mapWidth = forestMapWidth;
  npcArray = [];
  npcRangeArray = [];
  npcMessageArray = [];
  npcStartArray = [];

  var characterLayer = forest.getObject("CharacterLayer");
  LoadNPC(172, 0, "./assets/Forest/img/hoegarth", 1, "There is a monster in the Dungeon to\nthe South! We need him gone before my\nelves can drink their tea! I heard\nthere might also be a mighty shield\nsomewhere down there!");
  LoadNPC(385, 4, "./assets/Forest/img/elf1", 3, "I kind of hate you.");
  LoadNPC(193, 4, "./assets/Forest/img/elf2", 3, "Why are you in our forest?!");
  LoadNPC(439, 4, "./assets/Forest/img/elf3", 3, "We don't appreciate your kind here!");

  characterLayer.addChild(npcArray[0]);
  characterLayer.addChild(npcArray[1]);
  characterLayer.addChild(npcArray[2]);
  characterLayer.addChild(npcArray[3]);

  forestRangeArray = npcRangeArray.slice(0, 4);
  forestNpcArray = npcArray.slice(0, 4);
  forestMessageArray = npcMessageArray.slice(0, 4);
  forestStartArray = npcStartArray.slice(0, 4);



  forestNpcArray[0].scale.x = .2;
  forestNpcArray[0].scale.y = .2;

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
  mapArray = [];
  npcArray = [];
  npcRangeArray = [];
  npcStartArray = [];

  mapArray = forestMap;
  npcArray = forestNpcArray;
  npcRangeArray = forestRangeArray;
  npcStartArray = forestStartArray;

  if(hasShield){
    forestMessageArray[0] = "Thank you so much for handling that\nfor us! Your next destination is the\ndesert to the east!";
    forestMessageArray[1] = "Yipee!!!";
    forestMessageArray[2] = "You have saved us all!";
    forestMessageArray[3] = "Thank you!";
  }
  npcMessageArray = forestMessageArray;

  if (previousMap == desert){
    startX = 144;
    startY = 391;
  }else if(previousMap == plains){
    startX = 496;
    startY = 807;
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
    if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
      console.log("Found Entrance!");
      //Which entrance?, send to transition function
      //Plains leave 855
      //Forest dungeon 770
      //Desert 361
      if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 361) {

          if(hasShield){
            console.log("Going to Desert");
    	       MapTransition(desert);
             clearInterval(forestEntranceChecking);
             forestContainer.visible = false;
           }else{
             console.log("No desert possible!");
             createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
             textHandler("You still need something from the Forest!", 10);
           }
        }
    	else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 855) {
    		console.log("Going to Plains");
    		MapTransition(plains);
        clearInterval(forestEntranceChecking);
        forestContainer.visible = false;
    	} else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 770) {
    		console.log("Going to Dungeon");
    		MapTransition(forestDungeon);
        clearInterval(forestEntranceChecking);
        forestContainer.visible = false;
    	} else {
    		console.log("Dead");
    	}

    }
  }
}

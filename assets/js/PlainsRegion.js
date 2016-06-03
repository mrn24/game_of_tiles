var plainsCharacterLayer;
var swordSprite;



var plainsEntrances = [];
var plainsCollisions = [];
var plainsEntranceChecking;
var plainsMapWidth = 50;
var plainsNpcArray = [];
var plainsNpcRangeArray = [];
var plainsNpcMessageArray = [];
var plainsNpcStartArray = [];

function FirstPlainsLoader(){
	world = plains;
	currentMap = plains;
	previousMap = plains;
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
	var sword = PIXI.Texture.fromImage("./assets/Dungeon/MainChar/Sword/sword.png");
	swordSprite = new PIXI.Sprite(sword);
	swordSprite.anchor.x = 0.5;
	swordSprite.anchor.y = 0.5;
	swordSprite.position.x = 528;
	swordSprite.position.y = 1383;
	plainsContainer.addChild(swordSprite);



	//call loadnpc with map.
	//function LoadNPC(index, range, fileLocation, numSprites) {
	//LoadNPC(260, 4, './assets/Desert/Sprites/DesertWoman', 4);
	npcArray = [];
	npcRangeArray = [];
	npcMessageArray = [];
	npcStartArray = [];

	var characterLayer = plains.getObject("CharacterLayer");

	/*
	LoadNPC(314,6,"./assets/Characters/NPCs/Enemy", 4, "I'm NPC one.");
	plainsNpcArray.push(npcArray[0]);
	plainsNpcRangeArray.push(npcRangeArray[0]);
	plainsNpcMessageArray.push(npcMessageArray[0]);
	characterLayer.addChild(plainsNpcArray[0]);
	*/

	LoadNPC(1552,2,"./assets/Desert/Sprites/DesertWoman", 4, "I'm NPC two.");
	plainsNpcArray.push(npcArray[0]);
	plainsNpcRangeArray.push(npcRangeArray[0]);
	plainsNpcMessageArray.push(npcMessageArray[0]);
	plainsNpcStartArray.push(npcStartArray[0]);
	characterLayer.addChild(plainsNpcArray[0]);
	LoadNPC(1553,2,"./assets/Desert/Sprites/DesertWoman", 4, "I'm NPC three.");
	plainsNpcArray.push(npcArray[1]);
	plainsNpcRangeArray.push(npcRangeArray[1]);
	plainsNpcMessageArray.push(npcMessageArray[1]);
	plainsNpcStartArray.push(npcStartArray[1]);
	characterLayer.addChild(plainsNpcArray[1]);
	LoadNPC(1551,2,"./assets/Desert/Sprites/DesertWoman", 4, "I'm NPC four.");
	plainsNpcArray.push(npcArray[2]);
	plainsNpcRangeArray.push(npcRangeArray[2]);
	plainsNpcMessageArray.push(npcMessageArray[2]);
	plainsNpcStartArray.push(npcStartArray[2]);
	characterLayer.addChild(plainsNpcArray[2]);


	LoadNPC(1663,2,"./assets/Character/Uncle", 4, "Uncle Benjin:"
	+ "\nNow that you've grown."
	+ "\nI must tell you, your mother and"
	+ "\nfather were killed by our King."
	+ "\nGo to your old home(South)"
	+ "\nand inside on the floor, you will see"
	+ "\nyour father's sword. Take it and"
	+ "\nfind the answers that haunt our town.");
	plainsNpcArray.push(npcArray[3]);
	plainsNpcRangeArray.push(npcRangeArray[3]);
	plainsNpcMessageArray.push(npcMessageArray[3]);
	plainsNpcStartArray.push(npcStartArray[3]);
	characterLayer.addChild(plainsNpcArray[3]);








	/*
	LoadNPC(2006,8,"./assets/Characters/NPCs/Enemy", 4, "I'm NPC three.");
	plainsNpcArray.push(npcArray[2]);
	plainsNpcRangeArray.push(npcRangeArray[2]);
	plainsNpcMessageArray.push(npcMessageArray[2]);
	characterLayer.addChild(plainsNpcArray[2]);
	LoadNPC(2264,0,"./assets/Forest/img/elf", 1, "I'm NPC four.");
	plainsNpcArray.push(npcArray[3]);
	plainsNpcRangeArray.push(npcRangeArray[3]);
	plainsNpcMessageArray.push(npcMessageArray[3]);
	characterLayer.addChild(plainsNpcArray[3]);
	*/

  mapContainer.addChild(plainsContainer);
  plainsContainer.visible = false;
}

function PlainsLoader(){
  //console.log("Loading Plains");
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
  npcRangeArray = plainsNpcRangeArray;
  npcMessageArray = plainsNpcMessageArray;
  npcStartArray = plainsNpcStartArray;


  if (previousMap == plains) {
	  	startX = 592;
		startY = 1159;
  } else if (previousMap == desert) {
	  	startX = 1360;
		startY = 71;
  } else if (previousMap == forest) {
	  //console.log("Coming from Forest");
	  	startX = 1422;
		startY = 295;
  } else if (previousMap == plainsDungeon) {
	  //console.log("Coming from Forest");
	  	startX = 816;
		startY = 103;
  }

  plainsCharacterLayer = plains.getObject("CharacterLayer");
	plainsCharacterLayer.addChild(mainCharacter);
	SetCharacterPosition();
	SetPosition();
  //Use passed in parameter to load character in the right spot
  plainsEntranceChecking = setInterval(PlainsEntranceChecker, 100);

}

function PlainsEntranceChecker(){

	//Grab sword
  if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 2166 && !hasSword){
    console.log("Grabbed sword");
    LoadSword();
    hasSword = true;
	plainsContainer.removeChild(swordSprite);
    textHandler("Father's sword...", 20);


  }



	//console.log("Checking Entrance Collisions.");
  if(CollisionDetection(tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth), plainsEntrances)){
	if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0){
	//console.log("Found Entrance!");
    //Which entrance?, send to transition function
	if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 495) {
      //console.log("Going to Forest");
			if(hasSword){
	  		MapTransition(forest);
				plainsContainer.visible = false;
				clearInterval(plainsEntranceChecking);
			}else{
				console.log("No forest possible!");
				createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x - 32}, 250);
				textHandler("You need to be able to protect yourself\nbefore going to the forest!", 10);
			}
    }
	else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 92) {
		//console.log("Going to Desert");
		if(hasSword && hasShield){
			MapTransition(desert);
			plainsContainer.visible = false;
			clearInterval(plainsEntranceChecking);
		}else{
			console.log("No desert possible!");
			createjs.Tween.get(mainCharacter).to({y: mainCharacter.position.y + 32}, 250);
			textHandler("You still have some things to do\nbefore entering the desert!", 10);
		}
	} else if (tu.getIndex(mainCharacter.x, mainCharacter.y, tileWidth, tileHeight, mapWidth) == 176) {
		//console.log("Going to Dungeon");
		if(hasSword){
			MapTransition(plainsDungeon);
			plainsContainer.visible = false;
			clearInterval(plainsEntranceChecking);
		}else{
			console.log("No dungeon possible!");
			createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
			createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x - 32}, 250);
			textHandler("You need to be able to protect yourself\nbefore going to the dungeon!", 10);
	}
}else {
		console.log("Dead");
	}

  }
  }
}

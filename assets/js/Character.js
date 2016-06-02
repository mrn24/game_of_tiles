function LoadCharacter() {
	//console.log("Loading Character");
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Characters/MainCharacter/Character"+i+".png");
		textureArray.push(texture);
	}

	var textureArray2 = [];
	for (var i = 1; i < 5; i++) {
		texture2 = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSwordShield/CharacterSwordShield"+i+".png");
		textureArray2.push(texture2);
	}


	mainCharacter = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.anchor.x = 0.5;
	mainCharacter.anchor.y = 0.5;
	//var point = tu.getTile(index, mapArray, currentMap);
	mainCharacter.position.x = startX;
	mainCharacter.position.y = startY;
	mainCharacter.scale.x = mainCharacterScale;
	mainCharacter.scale.y = mainCharacterScale;
	mainCharacter.play();
	mainCharacter.animationSpeed = 0.075;
	//return mainCharacter;
}

function LoadSwordShield() {

	//mainCharacter.visible = false;

	var textureArray2 = [];
	for (var i = 1; i < 5; i++) {
		texture2 = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSwordShield/CharacterSwordShield"+i+".png");
		textureArray2.push(texture2);
	}


	mainCharacter = new PIXI.extras.MovieClip(textureArray2);
	mainCharacter.anchor.x = 0.5;
	mainCharacter.anchor.y = 0.5;
	//var point = tu.getTile(index, mapArray, currentMap);
	mainCharacter.position.x = 752;
	mainCharacter.position.y = 839;
	mainCharacter.scale.x = mainCharacterScale;
	mainCharacter.scale.y = mainCharacterScale;
	mainCharacter.play();
	mainCharacter.animationSpeed = 0.075;
	//return mainCharacter;
}






function SetCharacterPosition(){
	mainCharacter.position.x = startX;
	mainCharacter.position.y = startY;
}

function SetPosition() {
  mapContainer.x = -mainCharacter.x*mapScale + width/2 - mainCharacter.width/2*mapScale + 70;
  mapContainer.y = -mainCharacter.y*mapScale + height/2 + mainCharacter.height/2*mapScale;
  mapContainer.x = -Math.max(0, Math.min(currentMap.worldWidth*mapScale - width, -mapContainer.x));
  mapContainer.y = -Math.max(0, Math.min(currentMap.worldHeight*mapScale - height, -mapContainer.y));
}

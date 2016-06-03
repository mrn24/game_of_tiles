
//Character player's health bar with sword and shield
var textures = [];
for (var i = 1; i < 8; i++) {
	var texture = new PIXI.Texture.fromImage("./assets/img/exhealthbar" + i + ".png");
	textures.push(texture);
}
var largeHealth = PIXI.extras.MovieClip(textures);

function LoadCharacter() {
	//console.log("Loading Character");
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Character/Character"+i+".png");
		textureArray.push(texture);
	}
	var movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.addChild(movie);
	textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Character/CharacterBack"+i+".png");
		textureArray.push(texture);
	}
	movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.addChild(movie);
	mainCharacter.position.x = startX;
	mainCharacter.position.y = startY;
	mainCharacter.scale.x = mainCharacterScale;
	mainCharacter.scale.y = mainCharacterScale;
	mainCharacter.children[0].play();
	mainCharacter.children[1].play();
	mainCharacter.children[0].animationSpeed = 0.075;
	mainCharacter.children[1].animationSpeed = 0.075;
	mainCharacter.addChild(movie);
	mainCharacter.children[1].visible = false;
	mainCharacter.children[0].anchor.x = 0.5;
	mainCharacter.children[0].anchor.y = 0.5;
	mainCharacter.children[1].anchor.x = 0.5;
	mainCharacter.children[1].anchor.y = 0.5;
	mainCharacter.children[0].scale.x = mainCharacterScale;
	mainCharacter.children[0].scale.y = mainCharacterScale;
	mainCharacter.children[1].scale.x = mainCharacterScale;
	mainCharacter.children[1].scale.y = mainCharacterScale;
	
	//Small Health MovieClip
	textureArray = [];
		var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/img/healthbar"+i+".png");
		textureArray.push(texture);
	}
	movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.addChild(movie);
	mainCharacter.children[2].anchor.x = 0.5;
	mainCharacter.children[2].anchor.y = 0.5;
	mainCharacter.children[2].y -= 5;
	
	//mainCharacter.children[0].visible = false;
}

function LoadSwordShield() {
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSwordShield/CharacterSwordShield"+i+".png");
		textureArray.push(texture);
	}
	var movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.removeChildAt(0);
	mainCharacter.addChildAt(movie, 0);
	mainCharacter.children[0].animationSpeed = 0.075;
	mainCharacter.children[0].anchor.x = 0.5;
	mainCharacter.children[0].anchor.y = 0.5;
	mainCharacter.children[0].play();
	mainCharacter.children[0].scale.x = mainCharacterScale;
	mainCharacter.children[0].scale.y = mainCharacterScale;
	
	textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Character/CharacterBackSwordShield"+i+".png");
		textureArray.push(texture);
	}
	movie = new PIXI.extras.MovieClip(textureArray);
	
	mainCharacter.removeChildAt(1);
	mainCharacter.addChildAt(movie, 1);
	mainCharacter.children[1].animationSpeed = 0.075;
	mainCharacter.children[1].anchor.x = 0.5;
	mainCharacter.children[1].anchor.y = 0.5;
	mainCharacter.children[1].play();
	mainCharacter.children[1].visible = false;
	mainCharacter.children[1].scale.x = mainCharacterScale;
	mainCharacter.children[1].scale.y = mainCharacterScale;
	console.log("MORE HEALTH!");

	textureArray = [];
	textureArray = [];
	for (var i = 1; i < 8; i++) {
		texture = new PIXI.Texture.fromImage("./assets/img/exhealthbar"+i+".png");
		textureArray.push(texture);
	}
	movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.removeChildAt(2);
	mainCharacter.addChildAt(movie,2);
	mainCharacter.children[2].anchor.x = 0.5;
	mainCharacter.children[2].anchor.y = 0.5;
	mainCharacter.children[2].y -= 5;
	//return mainCharacter;
}

function LoadSword() {
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSword/CharacterSword"+i+".png");
		textureArray.push(texture);
	}
	var movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.removeChildAt(0);
	mainCharacter.addChildAt(movie, 0);
	mainCharacter.children[0].animationSpeed = 0.075;
	mainCharacter.children[0].anchor.x = 0.5;
	mainCharacter.children[0].anchor.y = 0.5;
	mainCharacter.children[0].scale.x = mainCharacterScale;
	mainCharacter.children[0].scale.y = mainCharacterScale;
	mainCharacter.children[0].play();
	
	textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Character/CharacterBackSword"+i+".png");
		textureArray.push(texture);
	}
	movie = new PIXI.extras.MovieClip(textureArray);
	mainCharacter.removeChildAt(1);
	mainCharacter.addChildAt(movie, 1);
	mainCharacter.children[1].animationSpeed = 0.075;
	mainCharacter.children[1].anchor.x = 0.5;
	mainCharacter.children[1].anchor.y = 0.5;
	mainCharacter.children[1].play();
	mainCharacter.children[1].scale.x = mainCharacterScale;
	mainCharacter.children[1].scale.y = mainCharacterScale;
	mainCharacter.children[1].visible = false;
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

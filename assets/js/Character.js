
//Character player's health bar with sword and shield


var exhealth1 = new PIXI.Texture.fromImage("./assets/img/exhealthbar1.png");
var exhealthSprite1 = new PIXI.Sprite(exhealth1);
exhealthSprite1.anchor.x = 0.5;
exhealthSprite1.anchor.y = 0.5;
exhealthSprite1.position.y = 0;

var exhealth2 = new PIXI.Texture.fromImage("./assets/img/exhealthbar2.png");
var exhealthSprite2 = new PIXI.Sprite(exhealth2);
exhealthSprite2.anchor.x = 0.5;
exhealthSprite2.anchor.y = 0.5;
exhealthSprite2.position.y = 0;

var exhealth3 = new PIXI.Texture.fromImage("./assets/img/exhealthbar3.png");
var exhealthSprite3 = new PIXI.Sprite(exhealth3);
exhealthSprite3.anchor.x = 0.5;
exhealthSprite3.anchor.y = 0.5;
exhealthSprite3.position.y = 0;

var exhealth4 = new PIXI.Texture.fromImage("./assets/img/exhealthbar4.png");
var exhealthSprite4 = new PIXI.Sprite(exhealth4);
exhealthSprite4.anchor.x = 0.5;
exhealthSprite4.anchor.y = 0.5;
exhealthSprite4.position.y = 0;

var exhealth5 = new PIXI.Texture.fromImage("./assets/img/exhealthbar5.png");
var exhealthSprite5 = new PIXI.Sprite(exhealth5);
exhealthSprite5.anchor.x = 0.5;
exhealthSprite5.anchor.y = 0.5;
exhealthSprite5.position.y = 0;

var exhealth6 = new PIXI.Texture.fromImage("./assets/img/exhealthbar6.png");
var exhealthSprite6 = new PIXI.Sprite(exhealth6);
exhealthSprite6.anchor.x = 0.5;
exhealthSprite6.anchor.y = 0.5;
exhealthSprite6.position.y = 0;

var exhealth7 = new PIXI.Texture.fromImage("./assets/img/exhealthbar7.png");
var exhealthSprite7 = new PIXI.Sprite(exhealth7);
exhealthSprite7.anchor.x = 0.5;
exhealthSprite7.anchor.y = 0.5;
exhealthSprite7.position.y = 0;




//Character player's healthbar with sword

var health1 = new PIXI.Texture.fromImage("./assets/img/healthbar1.png");
var healthSprite1 = new PIXI.Sprite(health1);
healthSprite1.anchor.x = 0.5;
healthSprite1.anchor.y = 0.5;
healthSprite1.position.y = 0;

var health2 = new PIXI.Texture.fromImage("./assets/img/healthbar2.png");
var healthSprite2 = new PIXI.Sprite(health2);
healthSprite2.anchor.x = 0.5;
healthSprite2.anchor.y = 0.5;
healthSprite2.position.y = 0;

var health3 = new PIXI.Texture.fromImage("./assets/img/healthbar3.png");
var healthSprite3 = new PIXI.Sprite(health3);
healthSprite3.anchor.x = 0.5;
healthSprite3.anchor.y = 0.5;
healthSprite3.position.y = 0;

var health4 = new PIXI.Texture.fromImage("./assets/img/healthbar4.png");
var healthSprite4 = new PIXI.Sprite(health4);
healthSprite4.anchor.x = 0.5;
healthSprite4.anchor.y = 0.5;
healthSprite4.position.y = 0;








function LoadCharacter() {
	//console.log("Loading Character");
	var textureArray = [];
	for (var i = 1; i < 5; i++) {
		texture = new PIXI.Texture.fromImage("./assets/Characters/MainCharacter/Character"+i+".png");
		textureArray.push(texture);
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
	mainCharacter.addChild(exhealthSprite1);
	console.log("MORE HEALTH!");
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


function LoadSword() {

	//mainCharacter.visible = false;

	var textureArray3 = [];
	for (var i = 1; i < 5; i++) {
		texture3 = new PIXI.Texture.fromImage("./assets/Dungeon/MainChar/CharSword/CharacterSword"+i+".png");
		textureArray3.push(texture3);
	}


	mainCharacter = new PIXI.extras.MovieClip(textureArray3);
	console.log("I NEED MORE!");
	mainCharacter.addChild(healthSprite1);
	mainCharacter.anchor.x = 0.5;
	mainCharacter.anchor.y = 0.5;
	//var point = tu.getTile(index, mapArray, currentMap);
	mainCharacter.position.x = 528;
	mainCharacter.position.y = 1383;
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

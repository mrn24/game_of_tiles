//LoadNPC takes 4 arguments as described below.
//It creates a movieClip object for the sprite and
//begins moving them within boundaries and other collision detection.
//Arguments:
//index = GID number on map. Grid ID number
//range = distance from starting point it can roam
//fileLocation = file location of sprites, without the number or .png
//				 i.e. "./assets/Characters/NPCs/Enemy"
//numSprites = the number of sprites for npc to make a movieClip of.
//Example Function Call:
//  LoadNPC(50, 2, "./assets/Characters/NPCs/Enemy", 4);
var npcMessageArray = [];
function LoadNPC(index, range, fileLocation, numSprites, message) {
	//console.log("Loading Character");
	var textureArray = [];
	var npc;
	for (var i = 1; i < numSprites + 1; i++) {
		texture = new PIXI.Texture.fromImage(fileLocation+i+".png");
		textureArray.push(texture);
	}
	npc = new PIXI.extras.MovieClip(textureArray);
	npc.anchor.x = 0.5;
	npc.anchor.y = 0.5;
	var point = tu.getTile(index, mapArray, world);
	npc.position.x = point.centerX;
	npc.position.y = point.centerY - yOffset;
	npc.scale.x = mainCharacterScale;
	npc.scale.y = mainCharacterScale;
	npc.play();
	npc.animationSpeed = 0.075;
	npcArray.push(npc);
	npcStartArray.push(index);
	npcRangeArray.push(range);
	npcMessageArray.push(message);
	//return npc;
}

function LoadEnemy(index, range, fileLocation, numSprites) {
	//console.log("Loading Character");
	var textureArray = [];
	var enemy;
	for (var i = 1; i < numSprites + 1; i++) {
		texture = new PIXI.Texture.fromImage(fileLocation+i+".png");
		textureArray.push(texture);
	}
	enemy = new PIXI.extras.MovieClip(textureArray);
	enemy.anchor.x = 0.5;
	enemy.anchor.y = 0.5;
	var point = tu.getTile(index, mapArray, world);
	enemy.position.x = point.centerX;
	enemy.position.y = point.centerY - yOffset;
	enemy.scale.x = mainCharacterScale;
	enemy.scale.y = mainCharacterScale;
	enemy.play();
	enemy.animationSpeed = 0.075;
	enemyArray.push(enemy);
	enemyStartArray.push(index);
	enemyRangeArray.push(range);
	//return enemy;
}

function LoadDyingEnemy(fileLocation, numSprites){
	var textureArray = [];
	var enemyDying;
	for (var i = 1; i < numSprites + 1; i++) {
		texture = new PIXI.Texture.fromImage(fileLocation+i+".png");
		textureArray.push(texture);
	}
	enemyDying = new PIXI.extras.MovieClip(textureArray);
	enemyDying.anchor.x = 0.5;
	enemyDying.anchor.y = 0.5;
	//enemyDying.play();
	enemyDying.animationSpeed = 0.075;
	enemyDyingArray.push(enemyDying);

}

function LoadAttackingEnemy(fileLocation, numSprites){
	var textureArray = [];
	var enemyAttacking;
	for (var i = 1; i < numSprites + 1; i++) {
		texture = new PIXI.Texture.fromImage(fileLocation+i+".png");
		textureArray.push(texture);
	}
	enemyAttacking = new PIXI.extras.MovieClip(textureArray);
	enemyAttacking.anchor.x = 0.5;
	enemyAttacking.anchor.y = 0.5;
	//enemyDying.play();
	enemyAttacking.animationSpeed = 1.0;
	enemyAttackingArray.push(enemyAttacking);
}

function EnemyMovement() {
	//var characterLayer = world.getObject('CharacterLayer').data;
	for (var i = 0; i < enemyArray.length; i++) {

		var ind1 = tu.getIndex(enemyArray[i].x - 32, enemyArray[i].y, 32, 32, mapWidth);
		var ind2 = tu.getIndex(enemyArray[i].x, enemyArray[i].y - 32, 32, 32, mapWidth);
		var ind3 = tu.getIndex(enemyArray[i].x + 32, enemyArray[i].y, 32, 32, mapWidth);
		var ind4  = tu.getIndex(enemyArray[i].x, enemyArray[i].y + 32, 32, 32, mapWidth);

		if (CollisionDetection(ind1, mainCharacterIndex())){
			MonsterAttack(i, 1);
			
		}
		if (CollisionDetection(ind2, mainCharacterIndex())){
			MonsterAttack(i, 1);
		}
		if (CollisionDetection(ind3, mainCharacterIndex())){
			MonsterAttack(i, -1);
		}
		if (CollisionDetection(ind4, mainCharacterIndex())){
			MonsterAttack(i, 1);
		}






		var direction = Math.floor(Math.random() * 4);
		if (direction == 0) { //Left
			var index = tu.getIndex(enemyArray[i].x - 32, enemyArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())){
				if (Math.abs(enemyStartArray[i]%mapWidth - index%mapWidth) <= enemyRangeArray[i]){
					createjs.Tween.get(enemyArray[i]).to({x: enemyArray[i].x - 32}, 250);
				}
				else {
					//console.log("Hit left bounds");
				}
			}
			else {
				//console.log("Collision Left");
			}
			enemyArray[i].scale.x = -enemyArray[i].scale.x;
		}
		else if (direction == 1) { //Up
			index = tu.getIndex(enemyArray[i].x, enemyArray[i].y - 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(Math.floor(enemyStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= enemyRangeArray[i]){
					createjs.Tween.get(enemyArray[i]).to({y: enemyArray[i].y - 32}, 250);
				}
				else {
					//console.log("Hit Up bounds");
				}
			}
			else {
				//console.log("Collision Up");
			}
		}
		else if (direction == 2) { //Right
		index = tu.getIndex(enemyArray[i].x + 32, enemyArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(enemyStartArray[i]%mapWidth - index%mapWidth) <= enemyRangeArray[i]){
					createjs.Tween.get(enemyArray[i]).to({x: enemyArray[i].x + 32}, 250);
				}
				else {
					//console.log("Hit Right bounds");
				}
			}
			else {
				//console.log("Collision Right");
			}
			enemyArray[i].scale.x = -enemyArray[i].scale.x;
		}
		else if (direction == 3) { //Down
			var index = tu.getIndex(enemyArray[i].x, enemyArray[i].y + 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(Math.floor(enemyStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= enemyRangeArray[i]){
					createjs.Tween.get(enemyArray[i]).to({y: enemyArray[i].y + 32}, 250);
				}
				else {
					//console.log("Hit Down bounds");
				}
			}
			else {
				//console.log("Collision Down");
			}
		}
	}
	setTimeout(EnemyMovement, 2000);
}

function NPCMovement() {
	for (var i = 0; i < npcArray.length; i++) {
		var direction = Math.floor(Math.random() * 4);
		if (direction == 0) { //Left
			var index = tu.getIndex(npcArray[i].x - 32, npcArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())){
				if (Math.abs(npcStartArray[i]%mapWidth - index%mapWidth) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({x: npcArray[i].x - 32}, 250);
				}
				else {
					//console.log("Hit left bounds");
				}
			}
			else {
				//console.log("Collision Left");
			}
			npcArray[i].scale.x = -npcArray[i].scale.x;
		}
		else if (direction == 1) { //Up
			index = tu.getIndex(npcArray[i].x, npcArray[i].y - 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(Math.floor(npcStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({y: npcArray[i].y - 32}, 250);
				}
				else {
					//console.log("Hit Up bounds");
				}
			}
			else {
				//console.log("Collision Up");
			}
		}
		else if (direction == 2) { //Right
		index = tu.getIndex(npcArray[i].x + 32, npcArray[i].y, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(npcStartArray[i]%mapWidth - index%mapWidth) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({x: npcArray[i].x + 32}, 250);
				}
				else {
					//console.log("Hit Right bounds");
				}
			}
			else {
				//console.log("Collision Right");
			}
			npcArray[i].scale.x = -npcArray[i].scale.x;
		}
		else if (direction == 3) { //Down
			var index = tu.getIndex(npcArray[i].x, npcArray[i].y + 32, 32, 32, mapWidth);
			if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, mainCharacterIndex())) {
				if (Math.abs(Math.floor(npcStartArray[i]/mapWidth) - Math.floor(index/mapWidth)) <= npcRangeArray[i]){
					createjs.Tween.get(npcArray[i]).to({y: npcArray[i].y + 32}, 250);
				}
				else {
					//console.log("Hit Down bounds");
				}
			}
			else {
				//console.log("Collision Down");
			}
		}
	}
	//setTimeout(NPCMovement, 7000);
}

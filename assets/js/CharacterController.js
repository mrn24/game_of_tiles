/////////////////////////////////////////////
// Keyboard Handlers                       //
/////////////////////////////////////////////
var keyEnterUp = true;
var talking = false;
var attacking = false;
function checkKeyPressed(key) {
	//console.log(key.keyCode);
	//console.log(keyEnterUp);
	key.preventDefault();
	if (key.keyCode == 65) {
		//console.log("A pressed");
        keyA = true;
    }
    if (key.keyCode == 68) {
		//console.log("D pressed");
		keyD = true;
    }
	if (key.keyCode == 87) {
		//console.log("W pressed");
		keyW = true;
	}
	if (key.keyCode == 83) {
		//console.log("S pressed");
		keyS = true;
	}
	if (key.keyCode == 13 && keyEnterUp) {
		//console.log("Enter pressed");
		keyEnter = true;
		keyEnterUp = false;
	}
	if (key.keyCode == 32){
		keySpace = true;
	}
}

function checkKeyReleased(key) {
	if (key.keyCode == 68) {
		//console.log("D released");
        keyD = false;
    }
    if (key.keyCode == 65) {
		//console.log("A released");
		keyA = false;
    }
	if (key.keyCode == 87) {
		//console.log("W released");
		keyW = false;
	}
	if (key.keyCode == 83) {
		//console.log("S released");
		keyS = false;
	}
	if (key.keyCode == 13) {
		//console.log("Enter released");
		keyEnter = false;
		keyEnterUp = true;
	}
	if (key.keyCode ==32){
		keySpace = false;
	}
}

function mainCharacterController() {
	if (keySpace){
		//toIndex();
		if(!attacking) {
			keySpace = false;
			var currentPosition = tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, mapWidth);

			for (var i = 0; i < enemyArray.length; i++) {
				if ((facing == 2) && currentPosition == tu.getIndex(enemyArray[i].x - 32, enemyArray[i].y, 32, 32, mapWidth)) {
					attacking = true;
					//  CHARACTER ATTACK CharacterAttack(i);
					CharacterAttack(i);

				} else if ((facing == 4) && currentPosition == tu.getIndex(enemyArray[i].x + 32, enemyArray[i].y, 32, 32, mapWidth)) {
					talking = true;
					// CHARACTER ATTACK textHandler(enemyArray[i]);
					CharacterAttack(i);
				}
				else {

				}
			}
		} else if(attacking) {
			keySpace = false;
			attacking = false;
		}

	}

	if (keyEnter) {
		toIndex();
		//console.log("Attempting talking/Exiting");
		if(!talking) {
			//console.log("Attempting Talking");
			keyEnter = false;
			//console.log("Attempt to talk");
			//console.log("Number of NPCs " + npcArray.length);
			var currentPosition = tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, mapWidth);
			//console.log("Current position: " + currentPosition);
			//console.log("Facing " + facing);
			for (var i = 0; i < npcArray.length; i++) {
				//console.log(tu.getIndex(npcArray[i].x, npcArray[i].y, 32, 32, mapWidth));
				if ((facing == 2) && currentPosition == tu.getIndex(npcArray[i].x - 32, npcArray[i].y, 32, 32, mapWidth)) {
					//console.log("Started talking to the right.");
					talking = true;
					//console.log("Found an NPC");
					//console.log("NPC message: " + npcMessageArray[i]);
					textHandler(npcMessageArray[i], 12);
				} else if ((facing == 4) && currentPosition == tu.getIndex(npcArray[i].x + 32, npcArray[i].y, 32, 32, mapWidth)) {
					//console.log("Started talking to the left.");
					//console.log("Found an NPC");
					//console.log("NPC message: " + npcMessageArray[i]);
					talking = true;
					textHandler(npcMessageArray[i], 12);
				} else if ((facing == 3) && currentPosition == tu.getIndex(npcArray[i].x, npcArray[i].y - 32, 32, 32, mapWidth)) {
					//console.log("Started talking above.");
					//console.log("Found an NPC");
					//console.log("NPC message: " + npcMessageArray[i]);
					talking = true;
					textHandler(npcMessageArray[i], 12);
				}
				else if ((facing == 1) && currentPosition == tu.getIndex(npcArray[i].x, npcArray[i].y + 32, 32, 32, mapWidth)) {
					//console.log("Started talking below.");
					//console.log("Found an NPC");
					//console.log("NPC message: " + npcMessageArray[i]);
					talking = true;
					textHandler(npcMessageArray[i], 12);
				}else {
					//console.log("No one to talk to here.");
					//console.log("No Collision");
					//console.log("Current: " + currentPosition + " NPC " + tu.getIndex(npcArray[i].x, npcArray[i].y, 32, 32, mapWidth));
				}
			}
		} else if(talking) {
			//console.log("Ending Conversation");
			keyEnter = false;
			talking = false;
		}
	}

	if (moving == true){
		if ((mainCharacter.position.x - startX) % 32 == 0 && (mainCharacter.position.y - startY) % 32 == 0) {
			if (keyA && keyW && !keyD && !keyS) {
				var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y - 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
					if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
					}
					if (Math.floor(index/(mapWidth)) > 4 && Math.floor(index/(mapWidth)) < (world.height/32) - 4) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
				}
				mainCharacter.children[0].visible = false;
				mainCharacter.children[1].visible = true;
				mainCharacter.children[0].scale.x = mainCharacterScale;
				mainCharacter.children[1].scale.x = mainCharacterScale;
				facing = 4;
			}
			else if (keyW && keyD && !keyA && !keyS) {
				var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y - 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
					if (Math.floor(index/(mapWidth)) > 4 && Math.floor(index/(mapWidth)) < (world.height/32) - 5) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
					}
					if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
				}
				mainCharacter.children[0].visible = false;
				mainCharacter.children[1].visible = true;
				mainCharacter.children[0].scale.x = -mainCharacterScale;
				mainCharacter.children[1].scale.x = -mainCharacterScale;
				facing = 2;
			}
			else if (keyD && keyS && !keyA && !keyW) {
				var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y + 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
					if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
					}
					if (Math.floor(index/(mapWidth)) > 5 && Math.floor(index/(mapWidth)) < (world.height/32) - 4) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
				}
				mainCharacter.children[0].visible = true;
				mainCharacter.children[1].visible = false;
				mainCharacter.children[0].scale.x = -mainCharacterScale;
				mainCharacter.children[1].scale.x = -mainCharacterScale;
				facing = 2;
			}
			else if (keyS && keyA && !keyW && !keyD) {
				var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y + 32, 32, 32, mapWidth);
				if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
					if (Math.floor(index/(mapWidth)) > 5 && Math.floor(index/(mapWidth)) < (world.height/32) - 4) {
						createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
					}
					if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
						createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
					}
					createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
					createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
				}
				mainCharacter.children[0].visible = true;
				mainCharacter.children[1].visible = false;
				mainCharacter.children[0].scale.x = mainCharacterScale;
				mainCharacter.children[1].scale.x = mainCharacterScale;
				facing = 4;
			}
			else {
				if (keyA) {
					var index = tu.getIndex(mainCharacter.x - 32, mainCharacter.y, 32, 32, mapWidth);
					if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
						if (index%mapWidth > 4 && index%mapWidth < mapWidth - 5) {
							createjs.Tween.get(mapContainer).to({x: mapContainer.x + mapScale*32}, 250);
						}
						createjs.Tween.get(mainCharacter).to({x: mainCharacter.x - 32}, 250);
					}
					mainCharacter.children[0].visible = true;
					mainCharacter.children[1].visible = false;
					mainCharacter.children[0].scale.x = mainCharacterScale;
					mainCharacter.children[1].scale.x = mainCharacterScale;
					facing = 4;
				}
				else if (keyD) {
					var index = tu.getIndex(mainCharacter.x + 32, mainCharacter.y, 32, 32, mapWidth);
					if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
						if (index%mapWidth > 5 && index%mapWidth < mapWidth - 4) {
							createjs.Tween.get(mapContainer).to({x: mapContainer.x - mapScale*32}, 250);
						}
						createjs.Tween.get(mainCharacter).to({x: mainCharacter.position.x + 32}, 250);
					}
					facing = 2;
					mainCharacter.children[0].visible = true;
					mainCharacter.children[1].visible = false;
					mainCharacter.children[0].scale.x = -mainCharacterScale;
					mainCharacter.children[1].scale.x = -mainCharacterScale;
				}
				else if (keyS) {
					var index = tu.getIndex(mainCharacter.x, mainCharacter.y + 32, 32, 32, mapWidth);
					if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
						if (Math.floor(index/(mapWidth)) > 5 && Math.floor(index/(mapWidth)) < (world.height/32) - 4) {
							createjs.Tween.get(mapContainer).to({y: mapContainer.y - mapScale*32}, 250);
						}
						createjs.Tween.get(mainCharacter).to({y: mainCharacter.y + 32}, 250);
					}
					mainCharacter.children[0].visible = true;
					mainCharacter.children[1].visible = false;
					facing = 3;
				}
				else if (keyW) {
					var index = tu.getIndex(mainCharacter.x, mainCharacter.y - 32, 32, 32, mapWidth);
					if (!CollisionDetection(index, collisionsIndex) && !CollisionDetection(index, toIndex()) && !CollisionDetection(index, enemyToIndex())) {
						if (Math.floor(index/(mapWidth)) > 4 && Math.floor(index/(mapWidth)) < (world.height/32) - 5) {
							createjs.Tween.get(mapContainer).to({y: mapContainer.y + mapScale*32}, 250);
						}
						createjs.Tween.get(mainCharacter).to({y: mainCharacter.y - 32}, 250);
					}
					facing = 1;
					mainCharacter.children[0].visible = false;
					mainCharacter.children[1].visible = true;
				}
			}
		}
	}
}
function toIndex() {
	var indexArray = [];
	//console.log(npcArray.length);
	for (var i = 0; i < npcArray.length; i++) {
		//console.log("Loading " + i);
		indexArray.push(tu.getIndex(npcArray[i].x, npcArray[i].y, 32, 32, mapWidth));
		//console.log(indexArray[i]);
	}
	return indexArray;
}

function enemyToIndex() {
	var indexArray = [];
	//console.log(npcArray.length);
	for (var i = 0; i < enemyArray.length; i++) {
		//console.log("Loading " + i);
		indexArray.push(tu.getIndex(enemyArray[i].x, enemyArray[i].y, 32, 32, mapWidth));
		//console.log(indexArray[i]);
	}
	return indexArray;
}


function mainCharacterIndex() {
	var temp = [];
	temp.push(tu.getIndex(mainCharacter.x, mainCharacter.y, 32, 32, mapWidth));
	return temp;
}

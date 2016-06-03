var tempx;
var tempy;

function CharacterAttack (index) {
	CharacterAttacking = true;

	// if (facing == 2){
	// 	mainCharacter.children[3].scale = -mainCharacter.children[3].scale;
	// 	setTimeout(function(){mainCharacter.children[3].scale = -mainCharacter.children[3].scale;}, 1000);
	// }

	var characterLayer = world.getObject("CharacterLayer");
	console.log("trying to attack");
	tempx = enemyArray[index].x;
	tempy = enemyArray[index].y;
	//enemyArray[0].destroy();
	characterLayer.removeChild(enemyArray[index]);

	enemyDyingArray[index].x = tempx;
	enemyDyingArray[index].y = tempy;
	characterLayer.addChild(enemyDyingArray[index]);
	enemyDyingArray[index].gotoAndPlay(0);
	setTimeout(function(){characterLayer.removeChild(enemyDyingArray[index]);}, 2700);
	setTimeout(function(){CharacterAttacking = false;}, 1000);




}

function MonsterAttack (index, scaleswitch) {
	var characterLayer = world.getObject("CharacterLayer");
	if ((CharacterAttacking == false) && (enemyArray[index].parent === characterLayer) ){
		mainCharacter.getChildAt(2)
		tempx = enemyArray[index].x;
		tempy = enemyArray[index].y;
		characterLayer.removeChild(enemyArray[index]);

		//Decrement health
		if (mainCharacter.getChildAt(2).currentFrame <  mainCharacter.getChildAt(2).totalFrames - 1) {
			mainCharacter.getChildAt(2).gotoAndStop(mainCharacter.getChildAt(2).currentFrame + 1);
		} else if (!dead){
			dead = true;
			CharacterDead();
		}

		if (scaleswitch == -1){
			enemyAttackingArray[index].scale.x = -enemyAttackingArray[index].scale.x;
			setTimeout(function(){enemyAttackingArray[index].scale.x = -enemyAttackingArray[index].scale.x;}, 1000);
		}

		enemyAttackingArray[index].x = tempx;
		enemyAttackingArray[index].y = tempy;
		characterLayer.addChild(enemyAttackingArray[index]);
		console.log("trying to add enemy attacking animation");


		enemyAttackingArray[index].gotoAndPlay(0);

		setTimeout(function(){enemyArray[index].x = tempx;}, 1000);
		setTimeout(function(){enemyArray[index].y = tempy;}, 1000);
		setTimeout(function(){characterLayer.removeChild(enemyAttackingArray[index]);}, 1000);
		setTimeout(function(){characterLayer.addChild(enemyArray[index]);}, 1000);
	}

}

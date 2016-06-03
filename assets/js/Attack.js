var tempx;
var tempy;

function CharacterAttack (index) {
	
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



}

function MonsterAttack (index) {

	var characterLayer = world.getObject("CharacterLayer");
	tempx = enemyArray[index].x;
	tempy = enemyArray[index].y;
	characterLayer.removeChild(enemyArray[index]);

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

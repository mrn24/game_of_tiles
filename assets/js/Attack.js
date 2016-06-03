function CharacterAttack (index) {
	
	var characterLayer = world.getObject("CharacterLayer");
	console.log("trying to attack");
	var tempx = enemyArray[index].x;
	var tempy = enemyArray[index].y;
	//enemyArray[0].destroy();
	characterLayer.removeChild(enemyArray[index]);

	enemyDyingArray[index].x = tempx;
	enemyDyingArray[index].y = tempy;
	characterLayer.addChild(enemyDyingArray[index]);
	enemyDyingArray[index].gotoAndPlay(0);
	setTimeout(function(){characterLayer.removeChild(enemyDyingArray[index]);}, 2700);



}

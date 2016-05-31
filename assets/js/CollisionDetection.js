//Two input arguments are index you are checking for a collision on,
//  and the array of collision index's you are caring about.
//  For example, the array of mountain indexes.
//  Returns true if collision.

function CollisionDetection(index, collisionsIndex) {
	for (var i = 0; i < collisionsIndex.length; i++) {
		if (index == collisionsIndex[i]) {
			//console.log("Collision " + index + " " + i);
			return true;
		}
	}
	return false;
}

function CharacterCollisionDetection(index, collisionsIndex) {
	for (var i = 0; i < collisionsIndex.length; i++) {
		if (index == charactersIndex[i]) {
			//console.log("Collision " + index + " " + i);
			return true;
		}
	}
	return false;
}
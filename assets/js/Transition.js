//Move from map to map
//Inputs = Where are you going.
//Changes the map

function MapTransition(destination){
  previousMap = currentMap;
  currentMap = destination;
	if (currentMap == desert) {
	  //console.log("Transitioning to Desert");
    DesertLoader();
	} else if (currentMap == plains) {
	  //console.log("Transitioning to Plains");
	  PlainsLoader();
	} else if (currentMap == forest) {
	  //console.log("Transitioning to Forest");
    ForestLoader();
	} else if (currentMap == forestDungeon) {
		forestDungeonLoader();
	} else if (currentMap == desertDungeon) {
		desertDungeonLoader();
	} else if (currentMap == plainsDungeon) {
    plainsDungeonLoader();
	}
}

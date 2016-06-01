//Move from map to map
//Inputs = Where are you going.
//Changes the map

function MapTransition(destination){
  previousMap = currentMap;
  currentMap = destination;
  switch(currentMap){
    case desert:
      DesertLoader();
      break;
    case plains:
      PlainsLoader();
      break;
    case forest:
      ForestLoader();
      break;
    }
  }
}

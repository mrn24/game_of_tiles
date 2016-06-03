function EndGame(){
  SetPosition();
  Moving = false;
  textHandler("So you've come! Now you must decide.\nDo we fight? Do I die?", 12);
  var choiceKill = new PIXI.Text("Kill", {font: "24px Arial", fill: "black"});
  choiceKill.anchor.x = 1;
  choiceKill.anchor.y = 0;
  choiceKill.position.x = 335;
  choiceKill.position.y = 100;
  choiceKill.interactive = true;
  choiceKill.on("mousedown", ChoiceKill);
  mapContainer.addChild(choiceKill);
  var choiceLive = new PIXI.Text("Let Live", {font: "24px Arial", fill: "black"});
  choiceLive.anchor.x = 1;
  choiceLive.anchor.y = 0;
  choiceLive.position.x = 570;
  choiceLive.position.y = 100;
  choiceLive.interactive = true;
  choiceLive.on("mousedown", ChoiceLive);
  mapContainer.addChild(choiceLive);
}

function ChoiceKill(){
  console.log("You choose to kill!");
}

function ChoiceLive(){
  console.log("You chose to let him live!");
}

//declaring the variables
var bg,sheep,sheepImg,wool,woolImg,bags,bagsImg,one,oneImg,ones,onesImg,oness,onessImg,down,downImg,lane,laneImgnext,nextImg;
//declaring and initialising gameStates

var gameState = 0; ;
var preAndPostStrings = {"sheep": [["Baa, baa "], ["Baa, baa, black sheep "]],
                         "wool": [["Have you any "], ["Have you any wool"]],
                         "bags":[["Yes sir, yes sir"], ["Yes sir, yes sir, three bags full"]],
                         "one":[["for the master"],["One for the master"]]  , 
                         "ones":[["for the dame"],["One for the dame"]]  ,   
                         "oness":[["And         for the little boy"], ["And   One for the little boy"]] ,
                         "down":[["Who lives               "], ["Who lives  down     "]]  ,
                         "lane":[["   the        "], ["    the lane "]]    ,         
                         };

var states = { "sheep": 0 ,
                "wool": 0 ,
                "bags" : 0,
                "one" : 0,
                "ones" : 0,
                "oness" : 0,
                "down" : 0,
                "lane" : 0
              };

function preload(){
  //loading the images
  bg = loadImage('rhymebg.png');
  sheepImg = loadImage('blacksheep.png');
  woolImg = loadImage('wool.png');
  bagsImg = loadImage('bags.png');
  oneImg = loadImage('one.png');
  onesImg = loadImage('one.png');
  onessImg = loadImage('one.png')
  nextImg = loadImage('next.png');
  downImg = loadImage('down.png');
  laneImg = loadImage('lane.png');


}

function setup() {
  createCanvas(1600,900);
  //createSprite and add Images
 gameState = 0;

  //next button
  next = createButton("NEXT");
  next.position(1100, 600);
  next.size(100,50);
 
  //sheep 
  sheep = createSprite(750,100,200,200)
  sheep.visible = true;
  sheep.addImage('s',sheepImg);
  sheep.scale = 0.05;

  //wool
  wool = createSprite(850,180,200,200)
  wool.visible = true;
  wool.addImage('w',woolImg);
  wool.scale = 0.05;

  //bags
  bags = createSprite(850,300,200,200)
  bags.visible = true;
  bags.addImage('w',bagsImg);
  bags.scale = 0.45;
 
  //one
  one = createSprite(520,400,200,200);
  one.visible = true;
  one.addImage('o', oneImg);
  one.scale = 0.5;

  //ones
  ones = createSprite(600,500,200,200);
  ones.visible = true;
  ones.addImage('o', onesImg);
  ones.scale = 0.5;

  //oness
  oness = createSprite(670,580,200,200);
  oness.visible = true;
  oness.addImage('o', onessImg);
  oness.scale = 0.5;

  //down
  down = createSprite(720,700,200,200);
  down.visibe = true;
  down.addImage('d', downImg);
  down.scale = 0.5;

  //lane
  lane = createSprite(870,700,200,200);
  lane.visibe = true;
  lane.addImage('l', laneImg);
  lane.scale = 0.35;


  //Prinitng The 1st line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("Baa Baa  " , 500, 100);
  

  //Prinitng The 2nd line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("Have you any  " , 500, 200);
  

  //Prinitng The 3rd line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("Yes sir, yes sir,  " , 500, 300);

  //Prinitng The 4th line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("  for the master " , 450, 400);

  //Prinitng The 5th line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["ones"][ states["ones"] ] , 650, 500);
  
  //Prinitng The 6th line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("  And        for the little boy " , 650, 500);

  //Prinitng The 7th line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text("Who lives                " , 500, 700);

  //Prinitng The 7part line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(35);
  strokeWeight(104);
  text(" the          " , 750, 700);

}

function draw() {
  
  background(bg);  
  next.mousePressed(textDisplay);

  drawSprites();

  //Prinitng The 1st line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(35);
  strokeWeight(104);
  text(preAndPostStrings["sheep"][ states["sheep"] ] , 500, 100);
  
  //Prinitng The 2nd line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(35);
  strokeWeight(104);
  text(preAndPostStrings["wool"][ states["wool"] ] , 500, 200);

 //Prinitng The 3rd line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["bags"][ states["bags"] ] , 500, 300);

 //Prinitng The 4th line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["one"][ states["one"] ] , 550, 400);

 //Prinitng The 5th line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["ones"][ states["ones"] ] , 650, 500);

 //Prinitng The 6th line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["oness"][ states["oness"] ] , 550, 600);

 //Prinitng The 7th line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["down"][ states["down"] ] , 500, 700);

 //Prinitng The 7part line
 fill("blue");
 textStyle(BOLDITALIC)
 textSize(35);
 strokeWeight(104);
 text(preAndPostStrings["lane"][ states["lane"] ] , 750, 700);


}

function textDisplay(){
  if( gameState == 0 ){

    gameState += 1;
    removeSprite(sheep);
    states["sheep"]+= 1;

  }else if(gameState == 1){
    gameState+= 1;
    removeSprite(wool);
    states["wool"]+= 1;
    
  }
  else if(gameState == 2){
    gameState+= 1;
    removeSprite(bags);
    states["bags"]+=1;
   
  }
  else if(gameState == 3){
    gameState+=1;
    removeSprite(one);
    states['one']+=1;
   
  }
  else if(gameState == 4){
    gameState+=1;
    removeSprite(ones);
    states["ones"]+=1;
  }
  else if(gameState == 5){
    gameState+=1;
    removeSprite(oness);
    states["oness"]+=1;
    }

    else if(gameState == 6){
      gameState+=1;
      removeSprite(down);
      states["down"]+=1;
    }

    else if(gameState == 7){
      gameState+=1;
    removeSprite(lane);
    states["lane"]+=1;
    
    }
  
}


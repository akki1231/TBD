var wraith3,W3IMG
var wraith2,W2IMG
var wraith1,W1IDLE
var minotaur1,M1IMG
var minotaur2,M2IMG
var knight1,K1IMG
var knight2,K2IMG
var knight3,K3IMG
var W1WALKING
var W1SPELL;
var W1DYING;
var form;
var playerCount;
var allPlayers;
var player; 

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var AllPlayers;
var distance = 0;
var database;

var form, player, game;


function preload(){
  W1IDLE=loadAnimation("Images/Wraith-1/Idle/Wraith_01_idle_000.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_001.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_002.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_003.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_004.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_005.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_006.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_007.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_008.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_009.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_010.png",
                      "Images/Wraith-1/Idle/Wraith_01_idle_011.png");
  
  
  W1WALKING=loadAnimation("Images/Wraith-1/Walking/Wraith_01_Moving Forward_000.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_001.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_002.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_003.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_004.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_005.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_006.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_007.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_008.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_009.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_010.png",
                      "Images/Wraith-1/Walking/Wraith_01_Moving Forward_011.png");
  
W1SPELL=loadAnimation("Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_000.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_001.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_002.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_003.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_004.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_005.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_006.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_007.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_008.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_009.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_010.png",
                      "Images/Wraith-1/Casting Spells/Wraith_01_Casting Spells_011.png");
                      
W1DYING=loadAnimation("Images/Wraith-1/Dying/Wraith_01_Dying_000.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_001.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_002.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_003.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_004.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_005.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_006.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_007.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_008.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_009.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_010.png",
                      "Images/Wraith-1/Dying/Wraith_01_Dying_011.png");

  W2IMG=loadAnimation("Images/Wraith-2/Idle/Wraith_02_idle_000.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_001.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_002.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_003.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_004.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_005.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_006.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_007.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_008.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_009.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_010.png",
                      "Images/Wraith-2/Idle/Wraith_02_idle_011.png");

  W3IMG=loadAnimation("Images/Wraith-3/Idle/Wraith_03_Idle_000.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_001.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_002.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_003.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_004.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_005.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_006.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_007.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_008.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_009.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_010.png",
                        "Images/Wraith-3/Idle/Wraith_03_Idle_011.png");
}
/*M1IMG=loadAnimation("Images/Minotaur_01/Idle/Minotaur_01_Idle_000.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_001.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_002.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_003.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_004.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_005.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_006.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_007.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_008.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_009.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_010.png",
                    "Images/Minotaur_01/Idle/Minotaur_01_Idle_011.png");*/
 
/*M2IMG=loadAnimation("Images/Minotaur_02/Idle/Minotaur_02_Idle_000.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_001.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_002.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_003.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_004.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_005.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_006.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_007.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_008.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_009.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_010.png",
                    "Images/Minotaur_02/Idle/Minotaur_02_Idle_011.png");

K1IMG=loadAnimation("Images/Knight-1/Knight_01__IDLE_000.png",
                    "Images/Knight-1/Knight_01__IDLE_001.png",
                    "Images/Knight-1/Knight_01__IDLE_002.png",
                    "Images/Knight-1/Knight_01__IDLE_003.png",
                    "Images/Knight-1/Knight_01__IDLE_004.png",
                    "Images/Knight-1/Knight_01__IDLE_005.png",
                    "Images/Knight-1/Knight_01__IDLE_006.png",
                    "Images/Knight-1/Knight_01__IDLE_007.png",
                    "Images/Knight-1/Knight_01__IDLE_008.png",
                    "Images/Knight-1/Knight_01__IDLE_009.png",
                    "Images/Knight-1/Knight_01__IDLE_010.png",
                    "Images/Knight-1/Knight_01__IDLE_011.png");

K2IMG=loadAnimation("Images/Knight-2/Knight_02__IDLE_000.png",
                    "Images/Knight-2/Knight_02__IDLE_001.png",
                    "Images/Knight-2/Knight_02__IDLE_002.png",
                    "Images/Knight-2/Knight_02__IDLE_003.png",
                    "Images/Knight-2/Knight_02__IDLE_004.png",
                    "Images/Knight-2/Knight_02__IDLE_005.png",
                    "Images/Knight-2/Knight_02__IDLE_006.png",
                    "Images/Knight-2/Knight_02__IDLE_007.png",
                    "Images/Knight-2/Knight_02__IDLE_008.png",
                    "Images/Knight-2/Knight_02__IDLE_009.png",
                    "Images/Knight-2/Knight_02__IDLE_010.png",
                    "Images/Knight-2/Knight_02__IDLE_011.png");

K3IMG=loadAnimation("Images/Knight-3/Knight_03__IDLE_000.png",
                    "Images/Knight-3/Knight_03__IDLE_001.png",
                    "Images/Knight-3/Knight_03__IDLE_002.png",
                    "Images/Knight-3/Knight_03__IDLE_003.png",
                    "Images/Knight-3/Knight_03__IDLE_004.png",
                    "Images/Knight-3/Knight_03__IDLE_005.png",
                    "Images/Knight-3/Knight_03__IDLE_006.png",
                    "Images/Knight-3/Knight_03__IDLE_007.png",
                    "Images/Knight-3/Knight_03__IDLE_008.png",
                    "Images/Knight-3/Knight_03__IDLE_009.png",
                    "Images/Knight-3/Knight_03__IDLE_010.png",
                    "Images/Knight- 3/Knight_03__IDLE_011.png");  */               
        
function setup(){
  createCanvas(5000,4000);
  form = new Form()
  form.display();
  wraith1=createSprite(100,100,50,50);
  wraith1.addAnimation("W1Image",W1DYING);
  wraith2=createSprite(600,200,50,50);
  wraith2.addAnimation("W2Image",W2IMG);
  wraith3=createSprite(400,400,50,50);
  wraith3.addAnimation("W3Image",W3IMG);
  /*minotaur1=createSprite(150,150,50,50);
  minotaur1.addAnimation("M1Image",M1IMG)
  minotaur2=createSprite(300,300,50,50);
  minotaur2.addAnimation("M2Image",M2IMG);
  knight1=createSprite(400,300,50,50);
  knight1.addAnimation("K1Image",K1IMG);
  knight2=createSprite(500,400,50,50);
  knight2.addAnimation("K2Image",K2IMG);
  knight3=createSprite(200,250,50,50);
  knight3.loadAnimation("K3Image",K3IMG);*/
  if(keyIsDown(UP_ARROW))
  {
      wraith1.x=wraith1.x+50;
  }

}
      
function draw(){
  form.display();
  background(255,255,5);
  drawSprites();
}
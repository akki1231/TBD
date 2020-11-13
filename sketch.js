var wraith3,W3IMG
var wraith2,W2IMG
var wraith1,W1IMG
var form;
var playerCount;
var allPlayers;
var player; 
function preload(){
  W1IMG=loadAnimation("Images/Wraith-1/Idle/Wraith_01_idle_000.png",
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
function setup(){
  createCanvas(5000,4000);
  form = new Form()
  wraith1=createSprite(100,100,50,50);
  wraith1.addAnimation("W1Image",W1IMG);
  wraith2=createSprite(600,200,50,50);
  wraith2.addAnimation("W2Image",W2IMG);
  wraith3=createSprite(400,400,50,50);
  wraith3.addAnimation("W3Image",W3IMG);
}
function draw(){
  form.display();
  background(0);
  drawSprites();
}
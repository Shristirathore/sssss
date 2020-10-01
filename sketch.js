//Declaring the global variables
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score ;
var chances  ;
var survivaltime =0 ;
var textdisplay =4;
var START =1;
//the new state of playing
var AI=3;
var PLAY =2;
var END =0;
var gameState = START;

    function preload(){

    //loading all the images
      monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

      bananaImage = loadImage("banana.png");
      obstacleImage = loadImage("obstacle.png");

    }



    function setup() {
      //creating canvas with extensions
      createCanvas(600,400);

      //declaring as new groups
      bananaGroup = new Group();
      obstacleGroup = new Group();

      //creating the monkey appearance
      monkey = createSprite(40,360,10,10);
      monkey.addAnimation("running",monkey_running);
      monkey.scale = 0.1;

     //creating the ground sprites
      ground = createSprite(300,385,600,10);
      ground.shapeColor = "black";
      
      //the values of some functions
      score =0;
      chances =3;
      survivaltime=0;
    }


    function draw() {
      //the color of the background
      background("lightyellow");
  
      //when the gamestate is start
      if(gameState === START){
        //the background color
        background("azure");
        //invisible items
        score.visible =false;
        chances.visible =false;
        monkey.visible = false;
        //destroying both
        obstacleGroup.destroyEach();
        bananaGroup.destroyEach();
        ground.visible =false;
         //when the space key is pressed
       
        //with the text
        fill("black");
        textSize(25);
        text("Welcome to monkey go happy game",100,50);
         fill("darkred");
        textSize(20);
        text("Read all the instructions before playing:-",100,90);

         fill("darkblue");
        textSize(18);
        text("1)Press L for long jump",100,120);
        text("2)Press S for short jump",100,160);
        text("3)Press T for increasing the speed",100,200);
        text("4)Press space if you don't want to control",100,240);
        text("5)Survival time indicates the seconds you have existed till now in the game",100,280);
        text("6)Score indicates the banana you Caughtup",100,320);
         text("in the whole game",100,300);
        text("7)Chances tells how many chances are left",100,360);
      fill("black");
        textSize(30);
        text("Press space to continue",150,390);
        
        if(keyDown("space")){
          gameState = textdisplay;
        }
      


        /* //when monkey is touching banana
         if(monkey.isTouching(bananaGroup))
        {
          bananaGroup.destroyEach();
          score=score+1;

        }  */ 

        

      }
      if(gameState === textdisplay){
        background("black");
        fill("white");
        textSize(25);
        text("**Press C if U wanted to play by ur own",150,180);
        text("**Press A if you wanted to play by AI",150,240);
      
      if(keyDown("c")){
        gameState = PLAY;
      }
      if(keyDown ("A")){
      gameState = AI;   
      }
      }
      if(gameState === AI){
         monkey.collide(ground);
        monkey.setCollider("rectangle",250,250,600,monkey.height);
  monkey.debug = false;
        if(obstacleGroup.isTouching(monkey)){
          monkey.velocityY=-7;
        }
         monkey.visible =true;
        ground.visible =true;
        monkey.visible = true;
        score.visible =true;
        chances.visible =true;
      //collision property
     
        //when some of the buttons are pressed
     

      //involving the gravity
      monkey.velocityY = monkey.velocityY+0.3;

      survivaltime = Math.round(frameCount/30);
  
       //calling the functions for execution 
      bananas();
      obstacles();






        // changing the background when the score is....
         if(score%10===0)
        {
          background("yellow");
        }else if(score%27===0)
        {
          background("lightgreen");
        }else if(score%19===0)
        {
          background("pink");
        }else if(score%15===0)
        {
          background("lightorange");
        }else if(score%7===0)
        {
          background("lightgrey");
        }else if(score%100===0)
        {
          background("lightred");
        }else if(score%99===0)
        {
          background("lightyellow");
        }
        //when the monkey is touching obstacles
      if(obstacleGroup.isTouching(monkey))
      {


        obstacleGroup.velocityXEach = 0;
        bananaGroup.velocityXEach = -7;
        bananaGroup.lifetimeEach = -1;
        obstacleGroup.lifetimeEach = -1;
        
        
      }
        //when the monkey gets bananas
        if(bananaGroup.isTouching(monkey)){

          score = score +1;
          bananaGroup.destroyEach();

        }

      //changing the gamestate when no chances left
    
      }
      //when the gamestate is end
      if(gameState === END){
        monkey.collide(ground);
        bananaGroup.destroyEach();
        obstacleGroup.destroyEach();
        fill("black");
        textSize(29);
        text("You lose ",200,200)
        textSize(19);
        text("Press R to restart game",170,250)
         //reseting the game
       if(keyDown("r")){
         reset();

        }
     
      }
     //enabling to draw the sprites
    
      //all about the text appearance
     fill("black");
      textSize(18);
      text("score: "+score,20,35);
      text("Survival time: "+survivaltime,450,35);
      text("Chances: "+chances,250,35);
      



     //when the gamestate is play
      if(gameState === PLAY){
       //making them visible
        monkey.visible =true;
        ground.visible =true;
        monkey.visible = true;
        score.visible =true;
        chances.visible =true;
      //collision property
      monkey.collide(ground);
        //when some of the buttons are pressed
      if(keyDown("l")&&monkey.y===349.3)
      {
         monkey.velocityY = -12;
      }
        if(keyDown("s")&&monkey.y===349.3)
      {
         monkey.velocityY = -7;
      }

      //involving the gravity
      monkey.velocityY = monkey.velocityY+0.3;

      survivaltime = Math.round(frameCount/30);
  
       //calling the functions for execution 
      bananas();
      obstacles();






        // changing the background when the score is....
         if(score%10===0)
        {
          background("yellow");
        }else if(score%27===0)
        {
          background("lightgreen");
        }else if(score%19===0)
        {
          background("pink");
        }else if(score%15===0)
        {
          background("lightorange");
        }else if(score%7===0)
        {
          background("lightgrey");
        }else if(score%100===0)
        {
          background("lightred");
        }else if(score%99===0)
        {
          background("lightyellow");
        }
        //when the monkey is touching obstacles
      if(obstacleGroup.isTouching(monkey))
      {


        obstacleGroup.velocityXEach = 0;
        bananaGroup.velocityXEach = -7;
        bananaGroup.lifetimeEach = -1;
        obstacleGroup.lifetimeEach = -1;
        chances =chances -1;
        obstacleGroup.destroyEach();
      }
        //when the monkey gets bananas
        if(bananaGroup.isTouching(monkey)){

          score = score +1;
          bananaGroup.destroyEach();

        }

      //changing the gamestate when no chances left
      if(chances === 0 ){
        gameState = END;
      }
      }
      //when the gamestate is end
      if(gameState === END){
        monkey.collide(ground);
        bananaGroup.destroyEach();
        obstacleGroup.destroyEach();
        fill("black");
        textSize(29);
        text("You lose ",200,200)
        textSize(19);
        text("Press R to restart game",170,250)
         //reseting the game
       if(keyDown("r")){
         reset();

        }
      }
     
      
     //enabling to draw the sprites
      drawSprites();
      //all about the text appearance
     fill("black");
      textSize(18);
      text("score: "+score,20,35);
      text("Survival time: "+survivaltime,450,35);
      text("Chances: "+chances,250,35);
      }
    
    
    //creating bananas
    function bananas()
    {
      if(frameCount%80==0)
      {
        //creating the banana sprite
        banana = createSprite(650,Math.round(random(180,260)),10,10);
        //giving it a velocity
        banana.velocityX = -7;
        //adding the image
        banana.addImage(bananaImage);
        //making small the image
        banana.scale = 0.1;
        //preventing the memory leak
        banana.lifetime = 100;
        //one above the other function
        banana.depth = monkey.depth;
        monkey.depth = banana.depth+2;

        bananaGroup.add(banana);
      }
    }
    //creating the obstacles
    function obstacles()
    {
      //in the framecount of 100 multiplier
      if(frameCount%100==0)
      {
        obstacle = createSprite(650,365,10,10);
        //velocity of the obstacles
        obstacle.velocityX = -10;
        //adding images for the obstacles
        obstacle.addImage(obstacleImage);
        //preventing memory leak
        obstacle.lifetime = 100;
        obstacle.scale = 0.1;

        obstacleGroup.add(obstacle);
      }

    }
    //reseting the whole game
    function reset()
    {
      //Initial 

      gameState=PLAY;
      score=0;
      chances=3;
      survivaltime= 0;
        text("Survival time: "+survivaltime,450,35);
         survivaltime = Math.round(frameCount/30);

    }











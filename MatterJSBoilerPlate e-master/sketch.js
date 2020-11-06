
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girlImg,confettiImg,medalImg,scoreImg,amazedImg;
var girl,confetti,medal,score,amazed;
var quotes1, questions1;
var radio, radioOutput;
var result=[];
var output, average;
var displayMessage;
function preload()
{
	girlImg=loadImage("images/girl-walking.png");
	confettiImg=loadImage("images/confetti.png");
	medalImg=loadImage("images/gold-medal.png");
	scoreImg=loadImage("images/score.png");
	amazedImg=loadImage("images/amazed.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	
	
	girl=createSprite(windowWidth/2, windowHeight/2+50);
	girl.addImage(girlImg);
	girl.scale=3;

	quotes1=new Quotes  ();
	quotes1.displayQuotes();

	questions1=new Questions();
	questions1.displayQuestions();
   
	radio = createRadio();
		radio.option('yes',5);
		radio.option('no',1);
		radio.option('maybe',2);
		radio.option('sometimes',3);
		radio.style('width', '400px');
		radio.position(windowWidth/2-100,windowHeight/2+200);
		textAlign(CENTER);
		fill(255, 0, 0);
	
		output=createElement("h1");
		displayMessage=createElement("h2");
		
}

function mouseClicked(){

	radioOutput=radio.selected();
	console.log(radioOutput);

	if(radioOutput==1||radioOutput==2||radioOutput==3||radioOutput==4||radioOutput==5){
	    var num=parseInt(radioOutput);
		result.push(num);
		console.log(result);
	}
	if(result.length===3){
		var total=0;
		for(var i=0; i<result.length; i++){
			total+=result[i];
		}
	    average=+(total/result.length);
		output.html(average);
		output.position(200,200);
		result=[];

	}
	if(average<=3){
		displayMessage.html("you should stay happy!");
		displayMessage.position(100,100);
        console.log(3);
	}
	else if(average<=6&&average>3){
		displayMessage.html("you are great!!!");
		displayMessage.position(100,100);
		console.log(3);
	}else if(average>6&&average<10){
		displayMessage.html("stay happy alwaysss!!!");
		displayMessage.position(100,100);
		console.log(3);

	}
     
}

function draw() {
  rectMode(CENTER);
  background("white");

  let val = radio.value();
  background(val);
  text(val, width / 2, height / 2);
  drawSprites();
 
}





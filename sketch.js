const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder_img1, thunder_img2, thunder_img3, thunder_img4;
var maxDrops = 100;
var drops = [];
var thunderCreatedFrame = 0;
var thunder;

function preload(){
    thunder_img1 = loadImage("thunderbolt/1.png")
    thunder_img2 = loadImage("thunderbolt/2.png")
    thunder_img3 = loadImage("thunderbolt/3.png")
    thunder_img4 = loadImage("thunderbolt/4.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 700);
    umbrella = new Umbrella(200, 500);

    if(frameCount % 100 == 0){
        for(var i = 0; i < maxDrops; i++){
           drops.push(new Drops(random(0, 800), random(0, 800)));
        }   
    }
}

function draw(){
    Engine.update(engine);
    background("black");

    var rand = Math.round(random(1,4));

    if(frameCount % 80 == 0){
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        thunderCreatedFrame = frameCount;
        switch(rand){
            case 1: thunder.addImage(thunder_img1);
                    break;
            case 2: thunder.addImage(thunder_img2);
                    break;
            case 3: thunder.addImage(thunder_img3);
                    break;
            case 4: thunder.addImage(thunder_img4);
                    break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if(thunderCreatedFrame + 10 == frameCount && thunder){
        thunder.destroy();
        console.log("destroyed");
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   
class Drops{
    constructor(x, y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.x = x;
        this.y = y;

        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}
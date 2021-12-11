class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 0.002
        }

        this.snowflake = loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y, 14,14, options);
        World.add(world, this.body);
        this.width=14;
        this.height=14;

    }

    display() {
        imageMode(CENTER);
        image(this.snowflake, this.body.position.x, this.body.position.y, this.width, this.height);
    }

    update() {
        if(this.body.position.y > 600){
            Body.setPosition(this.body, {x: random(0, 700), y: random(-10, 0)});
        }
    }
}


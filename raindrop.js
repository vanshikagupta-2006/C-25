class rd{
    constructor() {
        var options = {
            gravity=2.0,
            isStatic= false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.position.x = randomNumber;
        this.position.y = randomNumber;
        this.width = 5;
        this.height=20;
        
        World.add(world, this.body);
      }
      display(){
        rect.display();
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(center);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
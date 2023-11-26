class Attractor {
    constructor(x, y) {
      this.position = createVector(x, y);
    
      this.power = 250;
    }
  
    show() {
      stroke(0);
      strokeWeight(2);
      fill(255,0,0);
      circle(this.position.x, this.position.y, 32);
    }
  
    attract(particle) {
      //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 5, 50);
      let strength = (1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  
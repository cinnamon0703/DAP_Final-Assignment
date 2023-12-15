class Cup {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 600;
  }

  setPower(value) {
    this.power = value;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255);

    // 변경된 부분: 컵 모양 그  리기
    beginShape();
    vertex(this.position.x - 10, this.position.y - 5);
    bezierVertex(this.position.x - 20, this.position.y + 40, this.position.x + 30, this.position.y + 40, this.position.x + 20, this.position.y - 5);
    endShape(OPEN);
  }

  attract(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}

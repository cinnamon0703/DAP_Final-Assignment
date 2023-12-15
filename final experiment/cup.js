class Cup {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 600;
    this.size = 100;
  }

  setPower(value) {
    this.power = value;
  }

  cupSize(value) {
    this.size -= value;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);

    // 변경된 부분: 컵 모양 그리기
    beginShape();
    vertex(this.position.x - this.size / 2, this.position.y);
    bezierVertex(this.position.x - this.size / 2, this.position.y + this.size, this.position.x + this.size / 2, this.position.y + this.size, this.position.x + this.size / 2, this.position.y);
    endShape(CLOSE);
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

// One ParticleSystem
let emitters = [];
let attractor;

function setup() {
  createCanvas(1000, 1000);
  
  for (let i = 0; i < 20; i++) {
    emitters.push(new Emitter(random(width), 50));
  }

  attractor = new Attractor(width/2, height/2);
}

function draw() {
  background(0);
  
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
    let gravity = createVector(0, 0.1);
    emitters[i].applyForce(gravity);
    emitters[i].applyAttractor(attractor);
    emitters[i].run();
  }

  attractor.show();
}

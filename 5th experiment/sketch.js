// One ParticleSystem
let emitters = [];
let attractors = [];

function setup() {
  createCanvas(1000, 1000);
  
  for (let i = 0; i < 20; i++) {
    emitters.push(new Emitter(random(width), random(height)));
  }

  for (let i = 0; i < 5; i++) {
    attractors.push(new Attractor(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
    let gravity = createVector(0, 0.1);
    emitters[i].applyForce(gravity);
    
    // Apply attractors
    for (let j = 0; j < attractors.length; j++) {
      emitters[i].applyAttractor(attractors[j]);
    }

    emitters[i].run();
  }

  for (let i = 0; i < attractors.length; i++) {
    attractors[i].show();
  }
}

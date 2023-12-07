// One ParticleSystem
let slider;
let emitter;
let repeller;
let attractors = [];

function setup() {
  createCanvas(640, 240);
  emitter = new Emitter(width / 2, 20);
  repeller = new Repeller(width / 2, 200);

  slider = createSlider(0, 10, 1, 1);
  slider.position(10, height + 10);


  updateAttractors();

  slider.changed(sliderChanged);
}

function draw() {
  background(255);
  emitter.addParticle();
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  emitter.applyRepeller(repeller);

  // Applying all attractors
  for (let i = 0; i < attractors.length; i++) {
    emitter.applyAttractor(attractors[i]);
    attractors[i].show();
  }

  emitter.run();
  repeller.show();
}

function updateAttractors() {
  attractors = []; 


  for (let i = 0; i < slider.value(); i++) {
    attractors.push(new Attractor(random(0, 640), random(0, 240)));
  }
}


function sliderChanged() {
  updateAttractors();
}

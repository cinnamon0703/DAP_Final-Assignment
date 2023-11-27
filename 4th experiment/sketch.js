// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;

let attractor;


function setup() {
  createCanvas(2000, 1000);
  emitter = new Emitter(width / 2, 50);
  repeller = new Repeller(width / 2, 150);
  attractor = new Attractor(width/2, 200);
 

}

function draw() {
  background(255);
  emitter.addParticle();
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}

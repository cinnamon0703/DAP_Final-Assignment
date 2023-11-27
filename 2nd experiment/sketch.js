// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;

let attractor;

let attractor1;

let attractor2;

let attractor3;

function setup() {
  createCanvas(2000, 1000);
  emitter = new Emitter(width / 2, 20);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width/2, 100);
  attractor1 = new Attractor(500, 600);
  attractor2 = new Attractor(1000, 600);
  attractor3 = new Attractor(1500, 600);

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
  attractor1.show();
  attractor2.show();
  attractor3.show();
}

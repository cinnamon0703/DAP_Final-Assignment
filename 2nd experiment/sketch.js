// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;

let attractor;

let classifior;

let classifior1;

let classifior2;

function setup() {
  createCanvas(2000, 1000);
  emitter = new Emitter(width / 2, 20);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width/2, 100);
  classifior = new Classifior(500, 600);
  classifior1= new Classifior(1000, 600);
  classifior2 = new Classifior(1500, 600);

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
  emitter.applyClassifior(classifior);
  emitter.applyClassifior(classifior1);
  emitter.applyClassifior(classifior2);
  emitter.run();

  repeller.show();
  attractor.show();
  classifior.show();
  classifior1.show();
  classifior2.show();
}

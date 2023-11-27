// One ParticleSystem
let emitter;


//{!1} One repeller

let attractor;


function setup() {
  createCanvas(1000, 1000);
  emitter = new Emitter(width / 2, 50);
  attractor = new Attractor(width/2, height/2);
 

}

function draw() {
  background(0);
  emitter.addParticle();
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyAttractor(attractor);
  emitter.run();
  attractor.show();
}

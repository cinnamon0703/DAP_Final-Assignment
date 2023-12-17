
let tValue = 1;
let tValueMin = 0;
let tValueMax = 3000;
let tValueStep = 1;
let tVal = 1;
let tValMin = 0;
let tValMax = 3000;
let tValStep = 1;
let tAmount = 1;
let tAmountMin = 0;
let tAmountMax = 10;
let tAmountStep = 1;
let gui;

let params = {
  testValue : 1,
  testValueMin : 0,
  testValueMax : 3000,
  testValueStep : 1,
  testVal : 1,
  testValMin : 0,
  testValMax : 3000,
  testValStep : 1,
  testAmount : 1,
  testAmountMin : 0,
  testAmountMax : 10,
  testAmountStep : 1,
  tColor : [200, 0, 0],
}

let emitter;
let repeller;
let attractor;
let Valueframe = 0;
let Valframe = 0;
let Amountframe = 0;
let Colorframe = 0;



function setup() {
  createCanvas(2000, 1000);
  emitter = new Emitter(width / 2, 50);
  repeller = new Repeller(width / 2, 150);
  attractor = new Attractor(width/2, 200);

  gui = createGui('test slider');

  gui.addObject(params);
  gui.setPosition(310, 10);
}

function draw() {
  background(255);

  attractor.setPower(params.testValue);
  repeller.setPower(params.testVal);

  for (let i = 0; i < params.testAmount; i++) {
    emitter.addParticle(params.tColor);
  }
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();

 
  if (frameCount - Valueframe >= 60) {
    params.testValue = random(params.testValueMin, params.testValueMax);
    Valueframe = frameCount;
  }

  if (frameCount - Valframe >= 60) {
    params.testVal = random(params.testValMin, params.testValMax);
    Valframe = frameCount;
  }

 
  if (frameCount - Amountframe >= 120) {
    params.testAmount = random(params.testAmountMin, params.testAmountMax);
    Amountframe = frameCount;
  }


  if (frameCount - Colorframe >= 180) {
    params.tColor = [random(0, 255), random(0, 255), random(0, 255)];
    Colorframe = frameCount;
  }
} 
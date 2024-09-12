import {Map} from './map.js';

let groundImg;


function preload() {

  groundImg = loadImage('../image/ground.png');

}

function setup() {
  const cnv = createCanvas(windowWidth-40,  (windowHeight-40)/1.2);
  cnv.parent('poseContainer');
}

function draw() {
  background(256);
}

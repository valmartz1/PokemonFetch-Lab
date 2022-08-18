let canvas;

let firstURL = 'https://pokeapi.co/api/v2/pokemon/1/'
let bulbasaur = null; 
let imageBulbasaur;

let secondURL = 'https://pokeapi.co/api/v2/pokemon/2/'
let ivisaur = null;
let imageIvisaur; 

let thirdURL = 'https://pokeapi.co/api/v2/pokemon/3/'
let venusaur = null;
let imageVenusaur; 

let fourthURL = 'https://pokeapi.co/api/v2/pokemon/4/'
let charmander = null;
let imageCharmander; 

let fifthURL = 'https://pokeapi.co/api/v2/pokemon/5/'
let charmeleon = null;
let imageCharmeleon; 

let sixthURL = 'https://pokeapi.co/api/v2/pokemon/6/'
let charizard = null;
let imageCharizard; 

let seventhURL = 'https://pokeapi.co/api/v2/pokemon/7/'
let squirtle = null;
let imageSquirtle;

let eighthURL = 'https://pokeapi.co/api/v2/pokemon/8/'
let wartortle = null;
let imageWartortle;

let ninthURL = 'https://pokeapi.co/api/v2/pokemon/9/'
let blastoise = null;
let imageBlastoise;




function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    //1
    console.log(fetch(firstURL).then(response => response.json()));
    fetch(firstURL)
      .then(response => response.json())
      .then(data => {
        bulbasaur = data
        imageBulbasaur = loadImage(bulbasaur.sprites.front_default)
        console.log(bulbasaur.name);
    });

    //2 
    
    fetch(secondURL)
      .then(response => response.json())
      .then(data => {
        ivisaur = data
        imageIvisaur = loadImage(ivisaur.sprites.front_default)
        console.log(ivisaur.name);
    });

    //3
    
    fetch(thirdURL)
      .then(response => response.json())
      .then(data => {
        venusaur = data
        imageVenusaur = loadImage(venusaur.sprites.front_default)
        console.log(venusaur.name);
    });

    //4
    
    fetch(fourthURL)
      .then(response => response.json())
      .then(data => {
        charmander = data
        imageCharmander = loadImage(charmander.sprites.front_default)
        console.log(charmander.name);
    });

    //5
    
    fetch(fifthURL)
      .then(response => response.json())
      .then(data => {
        charmeleon = data
        imageCharmeleon = loadImage(charmeleon.sprites.front_default)
        console.log(charmeleon.name);
    });

    //6
    
    fetch(sixthURL)
      .then(response => response.json())
      .then(data => {
        charizard = data
        imageCharizard = loadImage(charizard.sprites.front_default)
        console.log(charizard.name);
    });

    //7 
    
    fetch(seventhURL)
      .then(response => response.json())
      .then(data => {
        squirtle = data
        imageSquirtle = loadImage(squirtle.sprites.front_default)
        console.log(squirtle.name);
    });

    //8
    
    fetch(eighthURL)
      .then(response => response.json())
      .then(data => {
        wartortle = data
        imageWartortle = loadImage(wartortle.sprites.front_default)
        console.log(wartortle.name);
    });
    
    //9 

    fetch(ninthURL)
      .then(response => response.json())
      .then(data => {
        blastoise = data
        imageBlastoise = loadImage(blastoise.sprites.front_default)
        console.log(blastoise.name);
    });
    
}

function draw() {
    //background(0, 50);
    background(0);
    // newCursor();
    textSize(50);
    text(bulbasaur.name, 50, 50, 300);
    image(imageBulbasaur, 50, 50, 500, 500);
    
}

function mouseClicked(){

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function newCursor() {
//     noStroke();
//     fill(255);
//     ellipse(pmouseX, pmouseY, 10, 10);
// }
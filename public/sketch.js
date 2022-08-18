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

let pokes = [];
let pokeImgs = [];

let namep = 'Name: ';
let weight = 'Weight: ';
let abilities = 'Abilities:';


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    //1
    fetch(firstURL)
      .then(response => response.json())
      .then(data => {
        bulbasaur = data
        imageBulbasaur = loadImage(bulbasaur.sprites.front_default);
        
        pokes.push(bulbasaur);
        pokeImgs.push(imageBulbasaur);
    });

    //2 
    
    fetch(secondURL)
      .then(response => response.json())
      .then(data => {
        ivisaur = data
        imageIvisaur = loadImage(ivisaur.sprites.front_default);

        pokes.push(ivisaur);
        pokeImgs.push(imageIvisaur);
    });

    //3
    
    fetch(thirdURL)
      .then(response => response.json())
      .then(data => {
        venusaur = data
        imageVenusaur = loadImage(venusaur.sprites.front_default);

        pokes.push(venusaur);
        pokeImgs.push(imageVenusaur);
    });

    //4
    
    fetch(fourthURL)
      .then(response => response.json())
      .then(data => {
        charmander = data
        imageCharmander = loadImage(charmander.sprites.front_default)
        
        pokes.push(charmander);
        pokeImgs.push(imageCharmander);
    });

    //5
    
    fetch(fifthURL)
      .then(response => response.json())
      .then(data => {
        charmeleon = data
        imageCharmeleon = loadImage(charmeleon.sprites.front_default)
        
        pokes.push(charmeleon);
        pokeImgs.push(imageCharmeleon);
    });

    //6
    
    fetch(sixthURL)
      .then(response => response.json())
      .then(data => {
        charizard = data
        imageCharizard = loadImage(charizard.sprites.front_default)
       
        pokes.push(charizard);
        pokeImgs.push(imageCharizard);
    });

    //7 
    
    fetch(seventhURL)
      .then(response => response.json())
      .then(data => {
        squirtle = data
        imageSquirtle = loadImage(squirtle.sprites.front_default)
        
        pokes.push(squirtle);
        pokeImgs.push(imageSquirtle);
    });

    //8
    
    fetch(eighthURL)
      .then(response => response.json())
      .then(data => {
        wartortle = data
        imageWartortle = loadImage(wartortle.sprites.front_default)
        
        pokes.push(wartortle);
        pokeImgs.push(imageWartortle);
    });
    
    //9 

    fetch(ninthURL)
      .then(response => response.json())
      .then(data => {
        blastoise = data
        imageBlastoise = loadImage(blastoise.sprites.front_default)
        
        pokes.push(blastoise);
        pokeImgs.push(imageBlastoise);
    });

    pokes.reverse();
    pokeImgs.reverse();
    
}

function draw() {
    background(0);
    textSize(40);
    text(namep, 300, 80, 500);
    text(weight, 300, 160, 300);
    text(abilities, 300, 240, 500);

    textSize(15);
    for(let i = 0; i < pokes.length; i++){
      if(pokes[i]!=null){
        text(pokes[i].name, 140, i*80+40, 80);
        image(pokeImgs[i], 50, i*80 , 80, 80);
      }
    }

    newCursor();    
}

function mouseClicked(){
  for(let i = 0; i < pokes.length; i++){
    if(mouseX > 50 && mouseX < 130 && mouseY > i*80 && mouseY < (i*80)+80){
      namep = 'Name: '+ pokes[i].name;
      weight = 'Weight: ' + pokes[i].weight;
      abilities = 'Abilities: \n';
      for(let j = 0; j < pokes[i].abilities.length; j ++){
        abilities += ' - ' + pokes[i].abilities[j].ability.name + '\n';
      }
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
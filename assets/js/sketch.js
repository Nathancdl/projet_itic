var particles = [];
var maxLife;

var type;
var options ={  
  Background : '#0a0a0a',
  Color1 : '#ffd541',
  Color2 : '#404040',
  Color3 : '#404040',
  Length : 10,
  Nums : 50,
  MaxRadius : 2,
  MinRadius : 2,
  noiseScale: 2000,
  ColorMode : 'Normal',
  Random: function () { 
          background(options.Background);
          options.Color1 = [random(0,255),random(0,255),random(0,255)];
          options.Color2 = [random(0,255),random(0,255),random(0,255)];
          options.Color3 = [random(0,255),random(0,255),random(0,255)];
          options.Length = random(1,50); 
          options.Nums = random(200,1000); 
          options.noiseScale = random(200,4000); 
          options.MaxRadius = random(1,10); 
          options.MinRadius = random(1,10); 
          options.ColorMode = random(['Normal','Linera Gradient','Splice']);
        },
};

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function simpleParallax(intensity, element) {
    window.addEventListener('scroll', function() {
        let scrollTop = document.documentElement.scrollTop;
        let imgPos = scrollTop / intensity + 'px';
        element.style.transform ='translateY(' + imgPos + ')';
    });
}

window.addEventListener('resize', debounce(setup, 1000));

function setup(){
    backgroundColor = color(options.Background);
    let element = document.getElementById('perlin');
    let canvas = createCanvas(element.clientWidth, element.clientHeight);
    canvas.parent(perlin);
    background(options.Background);
    for(var i = 0; i < 2500; i++){
        particles[i] = new Particle();
    }
    simpleParallax(2, element);
}

function draw(){
    noStroke();
    smooth();  
 
    maxLife = options.Length;
    for(var i = 1; i < options.Nums; i++){
        var iterations = map(i,0,options.Nums,5,1);
        var radius = map(i,0,options.Nums,options.MinRadius,options.MaxRadius);
        
        particles[i].move(iterations);
        particles[i].checkEdge();
        
        var alpha = 255;
        var particleColor;
        var fadeRatio;
        fadeRatio = min(particles[i].life * 5 / maxLife, 1);
        fadeRatio = min((maxLife - particles[i].life) * 5 / maxLife, fadeRatio);
        var lifeRatioGrayscale = min(255, (255 * particles[i].life / maxLife) + red(backgroundColor));
        if(options.ColorMode == 'Normal'){     
            if(i%3==0)particleColor = options.Color1;
            if(i%3==1)particleColor = options.Color2;
            if(i%3==2)particleColor = options.Color3;
        }

        if(options.ColorMode == 'Linera Gradient'){
             var percent1 = norm(particles[i].pos.x,0,width/2);
             var percent2 = norm(particles[i].pos.x,width/2,width);
             from = color(options.Color1);
             middle = color(options.Color2);
             to = color(options.Color3);
             between1 = lerpColor(from, middle, percent1);
             between2 = lerpColor(middle, to, percent2);
             if(particles[i].pos.x > 0 && particles[i].pos.x <width/2){
                particleColor = between1;
            }else{
                particleColor = between2;   
            }    
        }  

        if(options.ColorMode == 'Radial Gradient'){
             var distance = dist(particles[i].pos.x ,particles[i].pos.y, width/2, height/2);
             var percent1 = norm(distance,0,400);
             var percent2 = norm(distance,400,width/2);
             from = color(options.Color1);
             middle = color(options.Color2);
             to = color(options.Color3);
             between1 = lerpColor(from, middle, percent1);
             between2 = lerpColor(middle, to, percent2);
             if(distance < 400){
                particleColor = between1;
            }else{
                particleColor = between2;   
            }    
        }  

        if(options.ColorMode == 'Splice'){ 
            if(particles[i].pos.x >=width/3 && particles[i].pos.x <= width/3*2){
                if(i%3==0)particleColor = options.Color1;
                if(i%3==1)particleColor = options.Color2;
                if(i%3==2)particleColor = options.Color3;
            }else if(particles[i].pos.x < width/3 ){
                if(i%3==0)particleColor = 20;
                if(i%3==1)particleColor = 100;
                if(i%3==2)particleColor = 220;
            }else if(particles[i].pos.x > width/3*2 ){
                if(i%3==0)particleColor = color(255-red(options.Color1),255-green(options.Color1),255-blue(options.Color1));
                if(i%3==1)particleColor = color(255-red(options.Color2),255-green(options.Color2),255-blue(options.Color2));
                if(i%3==2)particleColor = color(255-red(options.Color3),255-green(options.Color3),255-blue(options.Color3));
            }
        }

        fill(red(particleColor), green(particleColor), blue(particleColor), alpha * fadeRatio);
        particles[i].display(radius);
    } 
}

function Particle(){
    this.vel = createVector(0, 0);
    this.pos = createVector(random(-50, width+50), random(-50, height+50));
    this.life = random(0, maxLife);    
    this.move = function(iterations){
        if((this.life -= 0.01666) < 0)
            this.respawn();
        while(iterations > 0){

            var angle = noise(this.pos.x/options.noiseScale, this.pos.y/options.noiseScale)*TWO_PI*options.noiseScale;
            this.vel.x = cos(angle);
            this.vel.y = sin(angle);
            this.vel.mult(0.2);
            this.pos.add(this.vel);
            --iterations;
        }
    }

    this.checkEdge = function(){
        if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
            this.respawn();
        }
    }
    
    this.respawn = function(){
        this.pos.x = random(-50, width+50);
        this.pos.y = random(-50, height+50);
        this.life = maxLife;
    }

    this.display = function(r){
        ellipse(this.pos.x, this.pos.y, r, r);
    }
}

function touchStarted(){
    background(options.Background);
    for(var i = 0; i < options.Nums; i++){
        particles[i].respawn();
        particles[i].life = random(0,maxLife);
    }
}

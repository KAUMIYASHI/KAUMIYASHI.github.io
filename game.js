//Set up basic game with Phaser

//brackets IDE


let config = {
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update,
    }
};
let game = new Phaser.Game(config);
    
function preload(){
    //load an image
    console.log(this);
    this.load.image('background',"Asset/bg-01.jpg");
    this.load.image('wheel',"Asset/wheel.png");
    
    this.load.image('stand',"Asset/stand-01.png"); this.load.image('pin',"Asset/COFFIN.png");
    
    
}
function create(){
    //create that image
    let W = game.config.width;
    let H = game.config.height;
    
    this.add.sprite(W/2,H/2,'background').setScale(0.49);
    
    
    
    this.input.setDefaultCursor('url(Asset/defaultCursor.cur), pointer');
    
    
    
    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,'wheel');
    this.add.sprite(W/2,H/2,'stand').setScale(0.25);
    this.wheel.setScale(0.22); 
    console.log(this.wheel.depth);
    //this.input.on("pointerdown",spinwheel,this);
    let spinMoonButton = this.add.sprite(W/2 -150,H/2+205,'pin').setScale(0.50).setInteractive(
        { cursor: 'url(Asset/handCursor1.cur), pointer', 
          
        
        });
    
    spinMoonButton.on('pointerdown',spinwheel,this);
}
function update(){
    console.log("In Update");
    //this.wheel.angle -= 1;
    
}

function spinwheel(){
    console.log("Time to spin the wheel");
    
    let rounds = Phaser.Math.Between(2,4);
    console.log(rounds);
    
    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360 + extra_degrees;
    
    let tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration: 3000,
        
    });
}
                        

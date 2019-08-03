class Scene001 extends Phaser.Scene{
    constructor(){
        super("bootGame")
    }
    
    preload(){
        this.load.image("bgstage002","assets/images/houses-101.png");
        //this.load.image('player', 'assets/images/user-101.png');
        this.load.image('mosquitoflock', 'assets/images/mosquito-102.png');
        this.load.spritesheet("player","assets/images/user-moving-103.png",{
            frameWidth:195,
            frameHeight:254
        });
    }
    
    create (){
        this.add.text(20,30, "একটু অপেক্ষা করুন .....",{font:"15px Arial", fill:"yellow"});
        this.scene.start("playGame");
    }
}

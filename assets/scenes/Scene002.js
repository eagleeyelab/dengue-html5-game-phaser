class Scene002 extends Phaser.Scene{
    constructor(){
        super("playGame")
    }
    
    create(){
        //this.background = this.add.image(0,0,"bgstage002");
        //this.background.setOrigin(0,0);
        
        // background city houses
        this.background = this.add.tileSprite(0, 0, 0, 0, 'bgstage002');
        this.background.setOrigin(0,0);
        
        // player
        this.player = this.add.sprite(60, (config.height / 2 + 180), 'player');
        //this.player = this.add.sprite

        // player scale down
        this.player.setScale(0.75);
        
        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 10,
            repeat: -1
        });
        this.player.play("player_anim");

        // mosquito
        this.mosquitoflock1 = this.add.sprite(config.width, 60, 'mosquitoflock');
        this.mosquitoflock2 = this.add.sprite(config.width - 250, 120, 'mosquitoflock');
        this.mosquitoflock3 = this.add.sprite(config.width - 500, 60, 'mosquitoflock');
        this.mosquitoflock4 = this.add.sprite(config.width - 750, 60, 'mosquitoflock');

        // mosquito scale down
        this.mosquitoflock1.setScale(0.3);
        this.mosquitoflock2.setScale(0.3);
        this.mosquitoflock3.setScale(0.3);
        this.mosquitoflock4.setScale(0.3);
        
        this.add.text(config.width - 350,config.height - 50, "Dengue Master 1.0",{fontFamily: "Faster One, cursive",fontSize:30, fill:"red"});
    }
    
    update(){
        
        // background image scroll 
        this.background.tilePositionX += 0.5;
        
        // mosquito flock image scroll
        this.moveMosquito(this.mosquitoflock1, 1.5);
        this.moveMosquito(this.mosquitoflock2, 1.5);
        this.moveMosquito(this.mosquitoflock3, 1.5);
        this.moveMosquito(this.mosquitoflock4, 1.5);

    }
    
    moveMosquito(mosquitos, speedofmosquitos){
        mosquitos.x -= speedofmosquitos;
        if(mosquitos.x <= -100){
           this.resetMosquitosPos(mosquitos);
        }
    }

    resetMosquitosPos(mosquitos){
        mosquitos.x = config.width;
        var randy = Phaser.Math.Between(60, 200);
        mosquitos.y = randy;
    }
    
}
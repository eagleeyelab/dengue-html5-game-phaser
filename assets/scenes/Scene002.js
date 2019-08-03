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
        this.player = this.add.sprite(40, (config.height / 2 + 180), 'player');

        // player scale down
        this.player.setScale(0.75);

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
        
        this.add.text(config.width - 280,config.height - 50, "&#2466;&#2494;&#2453;&#2494;&#32;&#2486;&#2489;&#2480;&#32;&#2447;&#2454;&#2472;&#32;&#2447;&#2465;&#2495;&#2488;&#32;&#2478;&#2486;&#2494;&#2480;&#32;&#2470;&#2454;&#2482;&#2503;ে....",{font:"16px Arial", fill:"red"});
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

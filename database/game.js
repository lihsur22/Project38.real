class Game {
    constructor(){}

    getState() {
        var gameRef = db.ref('gameState');
        gameRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state) {
        db.ref('/').update(
            {
                gameState:state
            }
        )
    }

    async start() {
        if(gameState == 0)
        {
            player = new Player();
            var refCount = await db.ref('playC').once("value");
            if(refCount.exists()){
                playC = refCount.val();
                player.readCount();
            }
            form = new Form();
            form.display();
        }
        b1 = createSprite(200,by,40,40);
        b2 = createSprite(350,by,40,40);
        b3 = createSprite(500,by,40,40);
        b4 = createSprite(650,by,40,40);
        b1.addImage(playImg);
        b2.addImage(playImg);
        b3.addImage(playImg);
        b4.addImage(playImg);
        b1.scale = 0.2;
        b2.scale = 0.2;
        b3.scale = 0.2;
        b4.scale = 0.2;
        breaks = [b1,b2,b3,b4];
    }

    play() {
        form.hideAll();

        background(backImg,displayHeight/2,displayWidth/2);

        textSize(40);
        textAlign(CENTER);
        strokeWeight(2);
        stroke("red");
        fill("red");
        text(Math.round(player.waitTime / 30) + " Left Till Next Hit",displayWidth/2,displayHeight/2 - 200);

        Player.playerInfo();
        var index = 0;
        var wallTough = 3;

        if(allPlayer !== undefined)
        {
            var x = 220

            for(var plr in allPlayer)
            {
                index = index + 1;
                x = x + 300;
                
                if(allPlayer[plr].break == wallTough)
                {
                    breaks[index - 1].y = (by - 100);
                }
                if(allPlayer[plr].break == (2 * wallTough))
                {
                    breaks[index - 1].y = (by - 200);
                }
                if(allPlayer[plr].break == (3 * wallTough))
                {
                    breaks[index - 1].y = (by - 300);
                }
                if(allPlayer[plr].break == (4 * wallTough))
                {
                    breaks[index - 1].y = (by - 400);
                    this.update(2);
                }

                breaks[index - 1].x = x;

                if(index === player.index + 1)
                {
                    w = new Walls(breaks[index - 1].x, by);
                    w.display();
                    breaks[index - 1].addImage(chosenImg);
                    breaks[index - 1].scale = 0.55;
                    camera.position.x = displayWidth/2;
                    camera.position.y = breaks[index - 1].y;
                }
            }
        }
        
        if(keyCode === UP_ARROW && player.index !== null)
        {
            keyCode = DOWN_ARROW;
            if(player.waitTime == 0)
            {
                player.break += 1;
                player.update();
                player.waitTime += 30 * (Math.round(random(1,5)));
            }
        }
        //if(player.break == (4 * wallTough)){}
        drawSprites();
    }

    end(){
        console.log("end");
    }
};
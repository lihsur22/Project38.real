class Form {
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greet = createElement('h3');
    }

    hideAll(){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }

    display()
    {
        var title = createElement('h1');
        title.html('Break The Wall');
        title.position((displayWidth/2) - 80,0);

        this.input.position((displayWidth/2) - 50,(displayHeight/2) - 200);
    
        this.button.position((displayWidth/2) + 30,(displayHeight/2) - 100);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            player.index = playC;

            playC += 1;
            player.updateCount(playC);
            player.update();

            this.greet.html('Waiting For Other Players ' + player.name);
            this.greet.position((displayWidth/2) + 30,(displayHeight/4));
        });
    }
};
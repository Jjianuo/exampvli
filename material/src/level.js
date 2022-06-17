import Player from "./player.js";
import Sierra from "./sierra.js";
import Zone from "./zone.js";
import Wall from "./wall.js";

var text;
var saws;
export default class Level extends Phaser.Scene {
    constructor(difficulty_) {
        super({
            key: 'level'
        });
        this.start = false;
    }

    create(difficulty_) {
        let {
            width,
            height
        } = this.sys.game.canvas;

        this.difficulty = difficulty_;

        this.player = new Player(this, 200, 300).setDepth(3);

        for (let i = 0; i< width; i+=64) {
            this.wall = new Wall(this, i, 0, this.player, saws);
            this.wall = new Wall(this, i, height - 64, this.player, saws);
            this.wall = new Wall(this, 0, i, this.player, saws);
            this.wall = new Wall(this, width - 64, i, this.player, saws);
        }

        saws = this.add.group();

        this.spawnrate = 0;
        this.discvelocity = 0;
        this.timeneeded = 0;
        if(this.difficulty === 3) {
            this.spawnrate = 2;
            this.discvelocity = 100;
            this.timeneeded = 3;
        }
        else if(this.difficulty === 1) {
            this.spawnrate = 1.5;
            this.discvelocity = 200;
            this.timeneeded = 6;
        }
        else if(this.difficulty === 2) {
            this.spawnrate = 1.2;
            this.discvelocity = 250;
            this.timeneeded = 10;
        }

        this.timepassed = 0;

        this.saw = new Sierra(this, 400, 400, this.discvelocity);

        text = this.add.text(0, 0, '', { font: 'Future', fill: '#fff', fontSize: 60});

        text.setText([
            'Time: ' + this.timepassed
        ]);

        this.zone = new Zone(this, 600, 400);

        this.timerbool = false;
        this.delay = this.spawnrate * 1000;
    }

    insidezone() {
        this.timepassed++;

        text.setText([
            'Time: ' + this.timepassed / 100
        ]);
        console.log(this.timepassed);
    }

    update(t, dt) {
        super.update(t, dt);
        if(this.timepassed / 100 > this.timeneeded) {
            this.scene.launch("menu");
            this.scene.stop();
        }

        if (!this.timerbool) {
            this.timerbool = true;
            this.timer = this.time.addEvent({
              delay: this.delay,
              callback: onEvent,
              callbackScope: this,
              loop: false
            });
      
            function onEvent() {
                let {
                    width,
                    height
                } = this.sys.game.canvas;
              saws.add(new Sierra(this, Phaser.Math.FloatBetween(0, width), Phaser.Math.FloatBetween(0, height), this.discvelocity));
              this.timerbool = false
            }
          }
    }
}
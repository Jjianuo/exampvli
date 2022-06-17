import Menu from './menu.js';
import Level from './level.js';
import Boot from './boot.js';

window.onload = ()=>{

const config = {
    type: Phaser.WEBGL,
    parent: "mygame",
    scale: {
        width: 768,
        height: 576,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: [Boot, Menu, Level]
};

new Phaser.Game(config);
};
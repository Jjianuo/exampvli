export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    this.load.setPath('assets/sprites/');
    this.load.image('muro', 'muro.png');
    this.load.image('blood', 'blood.png');
    this.load.image('zone', 'time_zone.png');
    this.load.spritesheet('saw', 'sawblade2.png', {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.spritesheet('player', 'player_spritesheet.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.setPath('./assets/sound/');
    this.load.audio('audio_splat','splat.mp3');

  }
  create() {
    this.scene.start('menu');
  }

  creatanims() {

  }
}
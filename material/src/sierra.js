import Player from "./player.js";

export default class Sierra extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, speed_) {
        super(scene, x, y, 'saw', 0);
    
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        // Queremos que el jugador no se salga de los límites del mundo
        this.body.setCollideWorldBounds();
        this.speed = speed_;

        this.body.setCircle(true);
        this.body.setAllowGravity(false);
        this.body.setBounce(1, 1);
        this.body.setCollideWorldBounds();
    
        this.setPosition(x, y - (this.height / 2));
        this.splatsound = this.scene.sound.add('audio_splat');

        // this.createanims();
        // this.play('saw1');
        this.movement = new Phaser.Math.Vector2();
        this.movement = new Phaser.Math.Vector2(Phaser.Math.FloatBetween(-1, 1), Phaser.Math.FloatBetween(0, 1));
        this.movement.normalize();
        this.movement.scale(this.speed);
        this.body.setVelocity(this.movement.x, this.movement.y);
      }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        this.rotation -= 0.05;

        if(this.scene.physics.overlap(this.scene.player, this) && !this.added) {
            this.setTexture('saw', 1);
            this.scene.player.playerdeath();
            this.splatsound.play();
            console.log("points added");
          }
    }

    // createanims() {
    //     this.anims.create({
    //         key: 'saw1',
    //         frames: this.anims.generateFrameNumbers('saws', {
    //             start: 0,
    //             end: 0
    //         }),
    //         frameRate: 1, // Velocidad de la animación
    //         repeat: -1 // Animación en bucle
    //     });
    //     this.anims.create({
    //         key: 'saw2',
    //         frames: this.anims.generateFrameNumbers('saws', {
    //             start: 1,
    //             end: 1
    //         }),
    //         frameRate: 1, // Velocidad de la animación
    //         repeat: -1 // Animación en bucle
    //     });
    // }
}
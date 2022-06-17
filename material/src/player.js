export default class Player extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        // Queremos que el jugador no se salga de los límites del mundo
        this.body.setCollideWorldBounds();
        this.speed = 300;
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.createanims();

        this.play('rundown', true);

        this.dead = false;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if (!this.dead) {
            if (this.cursors.up.isDown) {
                this.body.setVelocityY(-this.height * 10);
                this.play('runup', true);
            } else if (this.cursors.down.isDown) {
                this.body.setVelocityY(this.height * 10);
                this.play('rundown', true);
            } else {
                this.body.setVelocityY(0);
            }
            if (this.cursors.right.isDown) {
                this.body.setVelocityX(this.height * 10);
                this.play('runright', true);
            } else if (this.cursors.left.isDown) {
                this.body.setVelocityX(-this.height * 10);
                this.play('runleft', true);
            } else {
                this.body.setVelocityX(0);
            }
        }
        else {
            this.body.setVelocity(0);
            // this.setVelocityY(0);
            (this.setTexture('blood'));
        }
    }

    playerdeath() {
        this.dead = true;
    }

    createanims() {
        this.anims.create({
            key: 'runright',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 2
            }),
            frameRate: 12, // Velocidad de la animación
            repeat: -1 // Animación en bucle
        });
        this.anims.create({
            key: 'runleft',
            frames: this.anims.generateFrameNumbers('player', {
                start: 3,
                end: 5
            }),
            frameRate: 12, // Velocidad de la animación
            repeat: -1 // Animación en bucle
        });
        this.anims.create({
            key: 'rundown',
            frames: this.anims.generateFrameNumbers('player', {
                start: 6,
                end: 8
            }),
            frameRate: 12, // Velocidad de la animación
            repeat: -1 // Animación en bucle
        });
        this.anims.create({
            key: 'runup',
            frames: this.anims.generateFrameNumbers('player', {
                start: 9,
                end: 11
            }),
            frameRate: 12, // Velocidad de la animación
            repeat: -1 // Animación en bucle
        });
    }
}
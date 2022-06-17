export default class Zone extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'zone');

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);

        if(this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.insidezone();
        }
    }
}
export default class Wall extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, player, sierras) {
        super(scene, x, y, 'muro');

        this.setPosition(x + (this.width / 2), y + (this.height / 2));
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        this.scene.physics.add.collider(this, player);
        this.scene.physics.add.collider(this, sierras);
    }
}
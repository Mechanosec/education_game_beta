export default class GameObject extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.realHeight = this.height / 2;
        this.setOrigin(0, 0);
    }

    setDebug() {
        this.setInteractive(new Phaser.Geom.Rectangle(0, this.realHeight, this.width, this.realHeight), Phaser.Geom.Rectangle.Contains);
        this.scene.input.enableDebug(this);
    }
}
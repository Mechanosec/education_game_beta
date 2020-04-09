export default class GameObject extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.realHeight = this.height / 2;
        this.setOrigin(0, 0);

        this.scene.mainObjects.push(texture);
        this.frameRate = 6;
        this.speed = 5;
        this.step = 1; //количество чанков которые может пройти персонаж за 1 евент
        this.events = []; //массив евентов
        this.lastEvent = ''; //массив евентов
        this.moveToX = []; //массив координат X, к которым должен прийти персонаж
        this.moveToY = []; //массив координат Y, к которым должен прийти персонаж
        this.playAnimation = false; //переменная отвечающая за то находится ли персонаж в движении
    }

    setDebug() {
        this.setInteractive(new Phaser.Geom.Rectangle(0, this.realHeight, this.width, this.realHeight), Phaser.Geom.Rectangle.Contains);
        this.scene.input.enableDebug(this);
    }
}
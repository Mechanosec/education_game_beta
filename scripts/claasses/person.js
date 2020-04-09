import GameObject from "./object.js";

export default class Person extends GameObject {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.frameRate = 6;
        this.keyboard = this.scene.input.keyboard.addKeys("W, A, S, D");
        this.createAnimation();
        this.play('standFront');
    }

    createAnimation() {
        this.scene.anims.create({
            key: 'standFront',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 0, end: 0}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runFront',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 0, end: 3}),
            frameRate: this.frameRate,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'standLeft',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 4, end: 4}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runLeft',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 4, end: 7}),
            frameRate: this.frameRate,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'standRight',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 8, end: 8}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runRight',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 8, end: 11}),
            frameRate: this.frameRate,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'standBack',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 12, end: 12}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runBack',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 12, end: 15}),
            frameRate: this.frameRate,
            repeat: -1
        });

    }

    listener() {
        if (this.keyboard.D.isDown === true) {
            this.play('runRight', true);
        } else if (this.keyboard.A.isDown === true) {
            this.play('runLeft', true);
        } else if (this.keyboard.W.isDown === true) {
            this.play('runBack', true);
        } else if (this.keyboard.S.isDown === true) {
            this.play('runFront', true);
        }
    }


}
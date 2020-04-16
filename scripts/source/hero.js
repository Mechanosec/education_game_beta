import InitSource from "./initialSource.js";

export default class HeroSource extends InitSource {
    constructor(name, spriteSetting, scene) {
        super(name, spriteSetting, scene);
    }

    initAnimation(gameObject) {
        gameObject.scene.anims.create({
            key: 'standDown',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 0, end: 0}),
            frameRate: gameObject.frameRate,
        });
        gameObject.scene.anims.create({
            key: 'runDown',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 0, end: 3}),
            frameRate: gameObject.frameRate,
            repeat: -1
        });
        gameObject.scene.anims.create({
            key: 'standLeft',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 4, end: 4}),
            frameRate: gameObject.frameRate,
        });
        gameObject.scene.anims.create({
            key: 'runLeft',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 4, end: 7}),
            frameRate: gameObject.frameRate,
            repeat: -1
        });
        gameObject.scene.anims.create({
            key: 'standRight',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 8, end: 8}),
            frameRate: gameObject.frameRate,
        });
        gameObject.scene.anims.create({
            key: 'runRight',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 8, end: 11}),
            frameRate: gameObject.frameRate,
            repeat: -1
        });
        gameObject.scene.anims.create({
            key: 'standUp',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 12, end: 12}),
            frameRate: gameObject.frameRate,
        });
        gameObject.scene.anims.create({
            key: 'runUp',
            frames: gameObject.scene.anims.generateFrameNumbers(gameObject.texture.key, {start: 12, end: 15}),
            frameRate: gameObject.frameRate,
            repeat: -1
        });
    }
}
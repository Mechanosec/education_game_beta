export default class InitSource {

    constructor(name, spriteSetting, scene) {
        this.name = name;
        this.scene = scene;
        this.spriteSetting = spriteSetting;
    }

    preloadSprite() {
        this.scene.load.spritesheet(
            this.name,
            '../../sprites/' + this.spriteSetting.name + '.png',
            {frameWidth: this.spriteSetting.frameWidth, frameHeight: this.spriteSetting.frameHeight}
        );
    }
}



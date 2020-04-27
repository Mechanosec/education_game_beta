import GameLevel from "./gameLevel.js";
import Person from "../claasses/person.js";
import HeroSource from "../source/hero.js";

export default class Level1 extends GameLevel {
    constructor() {
        super('playGame');
        this.heroSource = new HeroSource('hero', {name: 'human', frameWidth: 66, frameHeight: 65,}, this);
    }

    initGround() {
        var rect = new Phaser.Geom.Rectangle(0, 0, 66, 32.5);
        var graphics = this.add.graphics({lineStyle: {width: 1, color: 0x000000}});
        for (let j = 0; j < 14; j++) {
            for (let i = 0; i < 16; i++) {
                rect.x = i * rect.width;
                rect.y = j * rect.height;
                if (j === 1 && i === 1) {
                    graphics.fillStyle(0xFF3300);
                    graphics.fillRectShape(rect);
                } else {
                    graphics.strokeRectShape(rect);
                }
            }
        }
    }

    preload() {
        this.heroSource.preloadSprite();
        // this.load.spritesheet('hero', '../../sprites/hero.png', {frameWidth: 80, frameHeight: 94});

    }

    create() {
        this.initGround();
        this.hero = new Person(this, 0, 0, 'hero', this.heroSource.initAnimation);
        this.add.existing(this.hero);
        this.hero.setDebug();

        // this.enemy = new Person(this, 66, 0, 'enemy', initHero);
        // this.add.existing(this.enemy);
        // this.enemy.setDebug();
    }

    update() {
        this.hero.listener();
        // this.enemy.listener();
    }

    render() {
    }
}
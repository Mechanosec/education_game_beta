import GameObject from "./object.js";

export default class Person extends GameObject {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.createAnimation();

        this.play('standFront');
    }

    createAnimation() {
        this.scene.anims.create({
            key: 'standDown',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 0, end: 0}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runDown',
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
            key: 'standUp',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 12, end: 12}),
            frameRate: this.frameRate,
        });
        this.scene.anims.create({
            key: 'runUp',
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {start: 12, end: 15}),
            frameRate: this.frameRate,
            repeat: -1
        });

    }

    /**
     * анимирование движения
     * @param spriteName
     */
    animate(spriteName) {
        if (!this.playAnimation) {
            this.playAnimation = true;
            this.play(spriteName, true);
        }
    }

    /**
     * расчет текущего положения персонажа по оси X
     * @returns int
     */
    calcMoveToX() {
        let currentX;
        if (this.moveToX.length > 0) {
            currentX = this.moveToX[this.moveToX.length - 1];
        } else {
            currentX = this.x !== 0 ? this.x : 1;
        }
        return currentX;
    }

    /**
     * расчет текущего положения персонажа по оси Y
     * @returns int
     */
    calcMoveToY() {
        let currentY;
        if (this.moveToY.length > 0) {
            currentY = this.moveToY[this.moveToY.length - 1];
        } else {
            currentY = this.y !== 0 ? this.y : 1;
        }
        return currentY;
    }

    /**
     * состояние покоя
     */
    stand() {
        this.playAnimation = false;
        this.play('stand'+this.lastEvent);
    }

    /**
     * состояние движения вправо
     */
    right() {
        let currentX = this.calcMoveToX();
        if (currentX < this.scene.game.config.width - (this.width / 2)) { //проверка на край приложения
            this.moveToX.push(currentX + (this.step * this.width));
            this.events.push('right');
            this.lastEvent = 'Right';
        }
    }

    /**
     * состояние движения влево
     */
    left() {
        let currentX = this.calcMoveToX();
        if (currentX > (this.width / 2)) { //проверка на край приложения
            this.moveToX.push(currentX - (this.step * this.width));
            this.events.push('left');
            this.lastEvent = 'Left';
        }
    }

    /**
     * состояние движения вниз
     */
    down() {
        let currentY = this.calcMoveToY();
        if (currentY < this.scene.game.config.height - (this.realHeight / 2)) { //проверка на край приложения
            this.moveToY.push(currentY + (this.step * this.realHeight));
            this.events.push('down');
            this.lastEvent = 'Down';
        }

    }

    /**
     * состояние движения вверх
     */
    up() {
        let currentY = this.calcMoveToY();
        if (currentY > (this.height / 2)) { //проверка на край приложения
            this.moveToY.push(currentY - (this.step * this.height));
            this.events.push('up');
            this.lastEvent = 'Up';
        }

    }

    listener() {
        if (this.events.length > 0 && this.events[0] === 'right') {
            this.animate('runRight');
            this.x += this.speed;
            console.log(this.speed);
            if (this.x >= this.moveToX[0]) {
                this.x = this.moveToX[0];
                this.events.shift();
                this.moveToX.shift();
                // this.death();
            }
        } else if (this.events.length > 0 && this.events[0] === 'left') {
            this.animate('runLeft');
            this.x -= this.speed;
            if (this.x <= this.moveToX[0]) {
                this.x = this.moveToX[0];
                this.events.shift();
                this.moveToX.shift();
                // this.death();
            }
        } else if (this.events.length > 0 && this.events[0] === 'down') {
            this.animate('runDown');
            this.y += this.speed;
            if (this.y >= this.moveToY[0]) {
                console.log(this.moveToY[0]);
                this.y = this.moveToY[0];
                this.events.shift();
                this.moveToY.shift();
                // this.death();
            }
        } else if (this.events.length > 0 && this.events[0] === 'up') {
            this.animate('runUp');
            this.y -= this.speed;
            if (this.y <= this.moveToY[0]) {
                this.y = this.moveToY[0];
                this.events.shift();
                this.moveToY.shift();
                // this.death();
            }
        } else if (this.events.length === 0 && this.playAnimation === true) { //проверка на окончания всех евентов
            this.stand();
        }
    }
}
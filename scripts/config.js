import GameScene from "./scene/game.js";

export let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    parent: 'game-place',
    backgroundColor: 0xFFFF44,
    scene: [GameScene]
};
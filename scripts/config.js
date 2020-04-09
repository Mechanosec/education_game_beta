import Level1 from "./scene/level1.js";

export let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    parent: 'game-place',
    backgroundColor: 0xFFFF44,
    scene: [Level1]
};
import GameObject from "./object.js";

export default class Item extends GameObject{

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.isCollis = true;
    }
}
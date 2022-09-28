"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.growing = true;
    }
    update(others) {
        if (this.growing) {
            this.r += 1;
        }
        if (this.x + this.r > 500 ||
            this.x - this.r < 0 ||
            this.y + this.r > 500 ||
            this.y - this.r < 0) {
            this.growing = false;
        }
        for (let i = 0; i < others.length; i++) {
            const o = others[i];
            if (o.r + this.r + 2 > this.dist(o) && this !== o) {
                this.growing = false;
                return;
            }
        }
    }
    draw(ctx) {
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    dist(other) {
        const dX = Math.abs(this.x - other.x);
        const dY = Math.abs(this.y - other.y);
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }
}
exports.default = Circle;

class Player {
    consturctor(
    this.x = 210;
    
    )

    update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
    }
}
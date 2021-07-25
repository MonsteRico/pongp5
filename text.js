class Text {
    constructor(text, x, y) {
        this.str = text;
        this.y = y;
        this.x = x;
    }

    draw() {
        textSize(48)
        fill("#fff")
        textFont("Comic Sans MS")
        textAlign(CENTER)
        text(this.str, this.x, this.y)
    }

    text(string) {
        this.str = string;
    }
}
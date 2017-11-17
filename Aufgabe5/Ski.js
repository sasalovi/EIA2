var aufgabe5;
(function (aufgabe5) {
    class Ski {
        constructor(_x, _y) {
            this.x = _x - Math.random() * 200;
            this.y = _y;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 800) {
                this.x = 0 - Math.random() * 200;
                this.y = 230;
            }
            this.y += 1.7;
            this.x += 5;
        }
        draw() {
            aufgabe5.crc2.fillStyle = this.color;
            aufgabe5.crc2.fillRect(this.x, this.y, 5, -20);
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.moveTo(this.x - 10, this.y - 5);
            aufgabe5.crc2.lineTo(this.x + 15, this.y + 4);
            aufgabe5.crc2.stroke();
        }
    }
    aufgabe5.Ski = Ski;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Ski.js.map
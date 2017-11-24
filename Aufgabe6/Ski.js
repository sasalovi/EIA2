var aufgabe6;
(function (aufgabe6) {
    class Ski extends aufgabe6.Movingshapes {
        constructor(_x, _y) {
            super(_x - Math.random() * 200, _y);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //Zufallsfarbe
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
            aufgabe6.crc2.fillStyle = this.color;
            aufgabe6.crc2.fillRect(this.x, this.y, 5, -20);
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(this.x - 10, this.y - 5);
            aufgabe6.crc2.lineTo(this.x + 15, this.y + 4);
            aufgabe6.crc2.stroke();
        }
    }
    aufgabe6.Ski = Ski;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Ski.js.map
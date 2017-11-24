var aufgabe6;
(function (aufgabe6) {
    class Wolke extends aufgabe6.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
        }
        move() {
            if (this.x > 800) {
                this.x = Math.random();
            }
            this.x += 2;
        }
        draw() {
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 30, this.y - 10, 30, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 60, this.y, 30, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
        }
    }
    aufgabe6.Wolke = Wolke;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Wolke.js.map
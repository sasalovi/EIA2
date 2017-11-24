var aufgabe6;
(function (aufgabe6) {
    class Schnee extends aufgabe6.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 600);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += 2;
        }
        draw() {
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
        }
    }
    aufgabe6.Schnee = Schnee;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Schnee.js.map
var aufgabe5;
(function (aufgabe5) {
    class Wolke {
        constructor(_x, _y) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 100 + 80;
        }
        update() {
            this.move(); //this f�r Zugriff auf inhalte der Klasse
            this.draw();
        }
        move() {
            if (this.x > 800) {
                this.x = Math.random();
            }
            this.x += 2;
        }
        draw() {
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x + 30, this.y - 10, 30, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x + 60, this.y, 30, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
        }
    }
    aufgabe5.Wolke = Wolke;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Wolke.js.map
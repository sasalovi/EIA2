var aufgabe5;
(function (aufgabe5) {
    class Schnee {
        constructor(_x, _y) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
        }
        update() {
            this.move(); //this f�r Zugriff auf inhalte der Klasse
            this.draw();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += 2;
        }
        draw() {
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
        }
    }
    aufgabe5.Schnee = Schnee;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map
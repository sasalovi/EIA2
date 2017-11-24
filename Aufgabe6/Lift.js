var aufgabe6;
(function (aufgabe6) {
    class Lift extends aufgabe6.Movingshapes {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x <= -150) {
                this.x = 800;
                this.y = 370;
            }
            this.y -= 0.7;
            this.x -= 2.0588;
        }
        draw() {
            aufgabe6.crc2.fillStyle = "000000"; //Seilbahn
            aufgabe6.crc2.beginPath(); //Halteseil der Gondel
            aufgabe6.crc2.moveTo(this.x + 90, this.y + 30);
            aufgabe6.crc2.lineTo(this.x + 90, this.y + 50);
            aufgabe6.crc2.stroke();
            //
            aufgabe6.crc2.fillStyle = "#303030";
            aufgabe6.crc2.beginPath(); //Gondel
            aufgabe6.crc2.moveTo(this.x + 50, this.y + 35);
            aufgabe6.crc2.lineTo(this.x + 130, this.y + 60); //Dach der Gondel
            aufgabe6.crc2.lineTo(this.x + 130, this.y + 100); //Rechte Wand
            aufgabe6.crc2.lineTo(this.x + 50, this.y + 75); //Boden
            aufgabe6.crc2.lineTo(this.x + 50, this.y + 45); //Linke Wand
            aufgabe6.crc2.fill();
            //Seil
            aufgabe6.crc2.fillStyle = "000000"; //Seilbahn
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(0, 100);
            aufgabe6.crc2.lineTo(800, 370);
            aufgabe6.crc2.stroke();
        }
    }
    aufgabe6.Lift = Lift;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Lift.js.map
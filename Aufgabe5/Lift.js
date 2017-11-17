var aufgabe5;
(function (aufgabe5) {
    class Lift {
        constructor(_x, _y) {
            this.x = _x; //Werte werden von new an Constructor �bergeben
            this.y = _y; //mit this.y bzw this.x �bergibt man die Werte an x und y oben in der Funktion
        }
        update() {
            this.move();
            this.draw();
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
            aufgabe5.crc2.fillStyle = "000000"; //Seilbahn
            aufgabe5.crc2.beginPath(); //Halteseil der Gondel
            aufgabe5.crc2.moveTo(this.x + 90, this.y + 30);
            aufgabe5.crc2.lineTo(this.x + 90, this.y + 50);
            aufgabe5.crc2.stroke();
            //
            aufgabe5.crc2.fillStyle = "#303030";
            aufgabe5.crc2.beginPath(); //Gondel
            aufgabe5.crc2.moveTo(this.x + 50, this.y + 35);
            aufgabe5.crc2.lineTo(this.x + 130, this.y + 60); //Dach der Gondel
            aufgabe5.crc2.lineTo(this.x + 130, this.y + 100); //Rechte Wand
            aufgabe5.crc2.lineTo(this.x + 50, this.y + 75); //Boden
            aufgabe5.crc2.lineTo(this.x + 50, this.y + 45); //Linke Wand
            aufgabe5.crc2.fill();
            //Seil
            aufgabe5.crc2.fillStyle = "000000"; //Seilbahn
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.moveTo(0, 100);
            aufgabe5.crc2.lineTo(800, 370);
            aufgabe5.crc2.stroke();
        }
    }
    aufgabe5.Lift = Lift;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Lift.js.map
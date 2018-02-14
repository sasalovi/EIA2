var abschluss2;
(function (abschluss2) {
    class Munition {
        constructor(_x, _y) {
            this.removeValue = true;
            this.button = document.createElement("div");
            this.x = _x;
            this.y = _y;
        }
        setRemoveValue(n) {
            this.removeValue = n;
        }
        draw() {
            if (this.removeValue == true) {
                abschluss2.crc2.fillStyle = "red";
                abschluss2.crc2.fillRect(this.x, 630, 30, 70);
                abschluss2.crc2.fillStyle = "yellow";
                abschluss2.crc2.fillRect(this.x, 600, 30, 30);
                abschluss2.crc2.strokeRect(this.x, 600, 30, 100);
            }
            else {
                abschluss2.crc2.fillStyle = "blue";
                abschluss2.crc2.fillRect(this.x, 630, 30, 70);
                abschluss2.crc2.fillStyle = "yellow";
                abschluss2.crc2.fillRect(this.x, 600, 30, 30);
                abschluss2.crc2.strokeRect(this.x, 600, 30, 100);
            }
        }
    }
    abschluss2.Munition = Munition;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=Munition.js.map
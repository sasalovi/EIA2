var abschluss2;
(function (abschluss2) {
    class Raumschiff extends abschluss2.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
            //        button: HTMLButtonElement = document.createElement("button");
            this.button = document.createElement("div");
        }
        move() {
            if (this.x > 1280) {
                this.x = Math.random();
            }
            if (this.x > 1270) {
                this.button.style.display = "none";
            }
            else {
                this.button.style.display = "inline";
            }
            this.x += 2;
        }
        start() {
            //buttons generieren
            this.button.style.position = "absolute";
            //this.button.style.backgroundColor = "red";
            this.button.style.top = (this.y - 18).toString() + "px";
            this.button.style.left = this.x.toString() + "px";
            this.button.style.width = "65px";
            this.button.style.height = "38px";
            this.button.style.display = "inline";
            document.body.appendChild(this.button);
        }
        draw() {
            abschluss2.crc2.beginPath();
            abschluss2.crc2.fillStyle = "blue";
            //Halbkreis
            abschluss2.crc2.arc(this.x + 25, this.y, 25, 0, Math.PI, true);
            abschluss2.crc2.fill();
            abschluss2.crc2.closePath();
            abschluss2.crc2.fillStyle = "#ffffff";
            //            crc2.fillRect(this.x, this.y + 4, 40, 10);
            abschluss2.crc2.beginPath();
            abschluss2.crc2.moveTo(this.x, this.y);
            abschluss2.crc2.lineTo(this.x - 10, this.y + 10);
            abschluss2.crc2.lineTo(this.x + 60, this.y + 10);
            abschluss2.crc2.lineTo(this.x + 50, this.y);
            abschluss2.crc2.fill();
            abschluss2.crc2.closePath();
        }
    }
    abschluss2.Raumschiff = Raumschiff;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=Raumschiff.js.map
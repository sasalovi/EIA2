var abschluss2;
(function (abschluss2) {
    class Raumschiff extends abschluss2.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 1280, _y + Math.random() * 100 + 100);
            this.clickDiv = document.createElement("div");
            this.speed = 2 + Math.random() * 2;
        }
        move() {
            if (this.x > 1280) {
                this.x = 0;
            }
            if (this.x > 1210) {
                this.clickDiv.style.display = "none";
            }
            else {
                this.clickDiv.style.display = "inline";
            }
            this.x += this.speed; //Bewegungsgeschwindigkeit
        }
        start() {
            this.clickDiv.style.width = 65 * this.relation + "px";
            this.clickDiv.style.height = 38 * this.heightRel + "px";
            this.clickDiv.style.position = "absolute";
            //            this.clickDiv.style.backgroundColor = "red";  //  Zum Debugging      
            this.clickDiv.style.top = ((this.y * this.heightRel) - (25 * this.relation)).toString() + "px";
            document.body.appendChild(this.clickDiv);
        }
        draw() {
            //Halbkreis
            abschluss2.crc2.beginPath();
            abschluss2.crc2.fillStyle = "blue";
            abschluss2.crc2.arc(this.x + 25, this.y, 25, 0, Math.PI, true);
            abschluss2.crc2.fill();
            abschluss2.crc2.closePath();
            //Untertasse
            abschluss2.crc2.fillStyle = "#ffffff";
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
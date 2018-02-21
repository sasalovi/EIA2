var abschluss2;
(function (abschluss2) {
    class Raumschiff extends abschluss2.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
            //        button: HTMLButtonElement = document.createElement("button");
            this.clickDiv = document.createElement("div");
            this.upRel = 20;
        }
        move() {
            if (this.x > 1280) {
                this.x = Math.random();
            }
            if (this.x > 1270) {
                this.clickDiv.style.display = "none";
            }
            else {
                this.clickDiv.style.display = "inline"; //Tut nicht was es soll bzw gar nichts
            }
            this.x += 2;
        }
        start() {
            this.clickDiv.style.width = 65 * this.relation + "px";
            this.clickDiv.style.height = 38 * this.heightRel + "px";
            this.clickDiv.style.position = "absolute";
            this.clickDiv.style.backgroundColor = "red";
            this.clickDiv.style.left = (this.x * this.relation).toString() + "px";
            this.clickDiv.style.top = ((this.y * this.heightRel) - (this.upRel * this.relation)).toString() + "px";
            document.body.appendChild(this.clickDiv);
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
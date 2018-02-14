var abschluss2;
(function (abschluss2) {
    class Wolke extends abschluss2.Movingshapes {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
            //        button: HTMLButtonElement = document.createElement("button");
            this.button = document.createElement("div");
        }
        move() {
            if (this.x > 1280) {
                this.x = Math.random();
            }
            this.x += 2;
        }
        start() {
            //buttons generieren
            this.button.style.position = "absolute";
            this.button.style.backgroundColor = "red";
            this.button.style.top = this.y.toString() + "px";
            this.button.style.left = this.x.toString() + "px";
            this.button.style.width = "50px";
            this.button.style.height = "50px";
            document.body.appendChild(this.button);
        }
        draw() {
            abschluss2.crc2.fillStyle = "#ffffff";
            abschluss2.crc2.beginPath();
            abschluss2.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            abschluss2.crc2.fill();
            abschluss2.crc2.beginPath();
            abschluss2.crc2.arc(this.x + 30, this.y - 10, 30, 0, 2 * Math.PI);
            abschluss2.crc2.fill();
            abschluss2.crc2.beginPath();
            abschluss2.crc2.arc(this.x + 60, this.y, 30, 0, 2 * Math.PI);
            abschluss2.crc2.fill();
        }
    }
    abschluss2.Wolke = Wolke;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=Wolke.js.map
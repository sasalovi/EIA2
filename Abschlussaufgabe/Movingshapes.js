var abschluss2;
(function (abschluss2) {
    class Movingshapes {
        constructor(_x, _y) {
            this.wolkeTod = false;
            this.x = _x;
            this.y = _y;
        }
        update() {
            if (this.wolkeTod == false) {
                this.move(); //this f�r Zugriff auf inhalte der Klasse
                this.draw();
            }
        }
        move() {
            //Platzhalter
        }
        draw() {
            //Platzhalter
        }
        getWolkeTod() {
            return this.wolkeTod;
        }
        setWolkeTod(_wolkeTod) {
            this.wolkeTod = _wolkeTod;
        }
        moveDiv(i) {
            let div = document.getElementsByTagName("div")[i];
            div.style.left = this.x.toString() + "px";
        }
    }
    abschluss2.Movingshapes = Movingshapes;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=movingshapes.js.map
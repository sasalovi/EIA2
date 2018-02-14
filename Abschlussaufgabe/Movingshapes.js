var abschluss2;
(function (abschluss2) {
    class Movingshapes {
        constructor(_x, _y) {
            this.RaumschiffTod = false;
            this.x = _x;
            this.y = _y;
        }
        update() {
            if (this.RaumschiffTod == false) {
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
        getRaumschiffTod() {
            return this.RaumschiffTod;
        }
        setRaumschiffTod(_RaumschiffTod) {
            this.RaumschiffTod = _RaumschiffTod;
        }
        moveDiv(i) {
            let div = document.getElementsByTagName("div")[i];
            div.style.left = this.x.toString() + "px";
        }
    }
    abschluss2.Movingshapes = Movingshapes;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=movingshapes.js.map
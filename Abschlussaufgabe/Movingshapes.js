var abschluss2;
(function (abschluss2) {
    class Movingshapes {
        constructor(_x, _y) {
            this.RaumschiffTod = false;
            this.canvasWidth = document.getElementById("canvas");
            this.width = this.canvasWidth.scrollWidth;
            this.height = this.canvasWidth.scrollHeight;
            this.relation = this.width / window.innerWidth;
            this.heightRel = this.height / window.innerHeight;
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
            div.style.left = (this.x * this.relation * 1.5).toString() + "px";
        }
    }
    abschluss2.Movingshapes = Movingshapes;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=movingshapes.js.map
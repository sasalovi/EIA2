var abschluss2;
(function (abschluss2) {
    class Movingshapes {
        constructor(_x, _y) {
            this.raumschiffTod = false;
            this.canvasWidth = document.getElementById("canvas");
            this.width = this.canvasWidth.scrollWidth;
            this.height = this.canvasWidth.scrollHeight;
            this.relation = this.width / this.canvasWidth.width;
            this.heightRel = this.height / this.canvasWidth.height;
            this.canv2 = this.canvasWidth.width;
            this.x = _x;
            this.y = _y;
        }
        update() {
            if (this.raumschiffTod == false) {
                this.move();
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
            return this.raumschiffTod;
        }
        setRaumschiffTod(_RaumschiffTod) {
            this.raumschiffTod = _RaumschiffTod;
        }
        moveDiv(i) {
            let div = document.getElementsByTagName("div")[i];
            div.style.left = (this.x * this.relation).toString() + "px";
        }
    }
    abschluss2.Movingshapes = Movingshapes;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=movingshapes.js.map
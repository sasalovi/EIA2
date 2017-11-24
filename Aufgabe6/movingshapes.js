var aufgabe6;
(function (aufgabe6) {
    class Movingshapes {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move(); //this f�r Zugriff auf inhalte der Klasse
            this.draw();
        }
        move() {
            //Platzhalter
        }
        draw() {
            //Platzhalter
        }
    }
    aufgabe6.Movingshapes = Movingshapes;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=movingshapes.js.map
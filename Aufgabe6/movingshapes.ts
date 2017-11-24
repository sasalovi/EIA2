namespace aufgabe6 {
    export class Movingshapes {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move(); //this für Zugriff auf inhalte der Klasse
            this.draw();
        }

        move(): void {
            //Platzhalter
        }

        draw(): void {
            //Platzhalter
        }


    }

}
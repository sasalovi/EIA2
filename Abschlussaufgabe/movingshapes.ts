namespace abschluss2 {
    export class Movingshapes {
        x: number;
        y: number;
        RaumschiffTod: boolean = false;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            if (this.RaumschiffTod == false) {
                this.move(); //this für Zugriff auf inhalte der Klasse
                this.draw();
            }
        }

        move(): void {
            //Platzhalter
        }

        draw(): void {
            //Platzhalter
        }
        getRaumschiffTod(): boolean {
            return this.RaumschiffTod;
        }

        setRaumschiffTod(_RaumschiffTod: boolean): void { 
            this.RaumschiffTod = _RaumschiffTod;
        }
        moveDiv(i: number) {

            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.style.left = this.x.toString() + "px";


        }



    }

}
namespace abschluss2 {
    export class Movingshapes {
        x: number;
        y: number;
        wolkeTod: boolean = false;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            if (this.wolkeTod == false) {
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
        getWolkeTod(): boolean {
            return this.wolkeTod;
        }

        setWolkeTod(_wolkeTod: boolean): void { 
            this.wolkeTod = _wolkeTod;
        }
        moveDiv(i: number) {

            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.style.left = this.x.toString() + "px";


        }



    }

}
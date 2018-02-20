namespace abschluss2 {
    export class Movingshapes {
        x: number;
        y: number;
        RaumschiffTod: boolean = false;
        canvasWidth: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        width: number = this.canvasWidth.scrollWidth;
        height: number = this.canvasWidth.scrollHeight;
       // relation: number = this.width / window.innerWidth;
       // heightRel: number = this.height / window.innerHeight;
        
        relation: number = this.width / this.canvasWidth.width;
        heightRel: number = this.height / this.canvasWidth.height;
        canv2: number = this.canvasWidth.width;
        
        

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            if (this.RaumschiffTod == false) {
                this.move(); //this für Zugriff auf inhalte der Klasse
                this.draw();
//                alert(this.relation);
                
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
            div.style.left = (this.x*this.relation).toString() + "px";
            


        }



    }

}
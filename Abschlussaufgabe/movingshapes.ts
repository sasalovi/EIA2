namespace abschluss2 {
    export class Movingshapes {
        x: number;
        y: number;
        raumschiffTod: boolean = false;
        canvasWidth: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        width: number = this.canvasWidth.scrollWidth;
        height: number = this.canvasWidth.scrollHeight;
        relation: number = this.width / this.canvasWidth.width;
        heightRel: number = this.height / this.canvasWidth.height;
        canv2: number = this.canvasWidth.width;
        
        

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            if (this.raumschiffTod == false) {
                this.move();
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
            return this.raumschiffTod;
        }

        setRaumschiffTod(_RaumschiffTod: boolean): void {
            this.raumschiffTod = _RaumschiffTod;
        }
        moveDiv(i: number): void {
            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.style.left = (this.x * this.relation).toString() + "px";
        }
    }
}
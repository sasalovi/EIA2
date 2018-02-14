namespace abschluss2 {
    export class Wolke extends Movingshapes {
//        button: HTMLButtonElement = document.createElement("button");
        button: HTMLDivElement = document.createElement("div");
        


        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
        }


        move(): void {
            if (this.x > 1280) {
                this.x = Math.random();
            }

            this.x += 2;
        }
        start(): void {
            //buttons generieren
            this.button.style.position = "absolute";
            this.button.style.backgroundColor = "red";
            this.button.style.top = this.y.toString() + "px";
            this.button.style.left = this.x.toString() + "px";
            this.button.style.width = "50px";
            this.button.style.height = "50px";

            
            document.body.appendChild(this.button);
            
            }
        
        draw(): void {
            
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 30, this.y - 10, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 60, this.y, 30, 0, 2 * Math.PI);
            crc2.fill();
            
            
            
        }
        
        


    }

}
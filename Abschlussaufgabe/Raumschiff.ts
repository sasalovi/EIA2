namespace abschluss2 {
    export class Raumschiff extends Movingshapes {
        clickDiv: HTMLDivElement = document.createElement("div");
        speed: number = 2 + Math.random() * 2;



        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 1280, _y + Math.random() * 100 + 100);
        }


        move(): void {
            if (this.x > 1280) {
                this.x = 0;
            }

            if (this.x > 1210) {
                this.clickDiv.style.display = "none";
            } else {
                this.clickDiv.style.display = "inline";
            }

            this.x += this.speed; //Bewegungsgeschwindigkeit
        }
        
        start(): void {
            this.clickDiv.style.width = 65 * this.relation + "px";
            this.clickDiv.style.height = 38 * this.heightRel + "px";
            this.clickDiv.style.position = "absolute";
//            this.clickDiv.style.backgroundColor = "red";  //  Zum Debugging      
            this.clickDiv.style.top = ((this.y * this.heightRel) - (25 * this.relation)).toString() + "px";

            document.body.appendChild(this.clickDiv);

        }

        draw(): void {  
            //Halbkreis
            crc2.beginPath();
            crc2.fillStyle = "blue";
            crc2.arc(this.x + 25, this.y, 25, 0, Math.PI, true);
            crc2.fill();
            crc2.closePath();

            //Untertasse
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.lineTo(this.x + 60, this.y + 10);
            crc2.lineTo(this.x + 50, this.y);
            crc2.fill();
            crc2.closePath();
        }    
    }
}
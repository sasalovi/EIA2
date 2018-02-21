namespace abschluss2 {
    export class Raumschiff extends Movingshapes {
        //        button: HTMLButtonElement = document.createElement("button");
        clickDiv: HTMLDivElement = document.createElement("div");
        upRel: number = 20;



        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
        }


        move(): void {
            if (this.x > 1280) {
                this.x = Math.random();
            }

            if (this.x > 1210) {
                this.clickDiv.style.display = "none";
            } else {
                this.clickDiv.style.display = "inline"; //Tut nicht was es soll bzw gar nichts
            }



            this.x += 2;

            }
        start(): void {

            this.clickDiv.style.width = 65 * this.relation + "px";
            this.clickDiv.style.height = 38 * this.heightRel + "px";
            this.clickDiv.style.position = "absolute";
            this.clickDiv.style.backgroundColor = "red";          
            this.clickDiv.style.left = (this.x*this.relation).toString() + "px";
            this.clickDiv.style.top = ((this.y*this.heightRel)-(this.upRel*this.relation)).toString() + "px";


            document.body.appendChild(this.clickDiv);

        }

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = "blue";
            //Halbkreis
            crc2.arc(this.x + 25, this.y, 25, 0, Math.PI, true);
            crc2.fill();
            crc2.closePath();



            crc2.fillStyle = "#ffffff";
            //            crc2.fillRect(this.x, this.y + 4, 40, 10);
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y + 10);
            crc2.lineTo(this.x + 60, this.y + 10);
            crc2.lineTo(this.x + 50, this.y);
            crc2.fill();


            crc2.closePath();
        }
        
        init(): void {
           
            this.x = 0;
            this.y = 0;
            
            }




    }

}
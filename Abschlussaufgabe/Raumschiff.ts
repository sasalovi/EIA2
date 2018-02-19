namespace abschluss2 {
    export class Raumschiff extends Movingshapes {
        //        button: HTMLButtonElement = document.createElement("button");
        button: HTMLDivElement = document.createElement("div");



        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 100 + 80);
        }


        move(): void {
            if (this.x > 1280) {
                this.x = Math.random();
            }

            if (this.x > 1270) {
                this.button.style.display = "none";
            } else {
                this.button.style.display = "inline"; //Tut nicht was es soll bzw gar nichts
            }



            this.x += 2;
            }
        start(): void {
            //                                    let canvasWidth = document.getElementById("canvas");
            //            var width = this.canvasWidth.scrollWidth;
            //            var height = this.canvasWidth.scrollHeight;
            //            let relation = width / window.innerWidth;
            //            let heightRel = height / window.innerHeight;

            //buttons generieren
            //            this.button.style.position = "absolute";
            //            this.button.style.backgroundColor = "red";
            //            this.button.style.top = (this.y - 18).toString() + "px";
            //            this.button.style.left = this.x.toString() + "px";
            this.button.style.width = 65 * this.relation + "px";
            this.button.style.height = 38 * this.heightRel + "px";
            //            this.button.style.display ="inline";
            //responsive




            this.button.style.position = "absolute";
            this.button.style.backgroundColor = "red";

          
            
            this.button.style.left = (this.x).toString() + "px";
            this.button.style.top = (this.y*this.heightRel+5).toString() + "px";



            document.body.appendChild(this.button);

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




    }

}
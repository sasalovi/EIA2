namespace aufgabe6 {
    export class Schnee extends Movingshapes {


        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 600);
        }


        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }

            this.y += 2;
        }

        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.fill();
        }


    }

}
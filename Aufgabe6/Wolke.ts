namespace aufgabe6 {
    export class Wolke extends Movingshapes {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            super(_x+ Math.random() * 800,_y+ Math.random() * 100 + 80);
        }

        
        move(): void {
            if (this.x > 800) {
                this.x = Math.random();
            }
            
            this.x += 2;
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
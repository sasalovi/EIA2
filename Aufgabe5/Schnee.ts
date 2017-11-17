namespace aufgabe5 {
    export class Schnee {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random()* 600;
        }

        update(): void {
            this.move();
            this.draw();
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
namespace aufgabe5 {
    export class Ski {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x - Math.random() * 200;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }
        
        move(): void {
            if (this.x > 800) {
                this.x = 0 - Math.random() * 200;
                this.y = 230;
            }   
            this.y += 1.7;
            this.x += 5
        }

        draw(): void {
        crc2.fillStyle = this.color;
        crc2.fillRect(this.x, this.y, 5, -20);
        crc2.beginPath();
        crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(this.x - 10, this.y - 5);
        crc2.lineTo(this.x + 15, this.y + 4);
        crc2.stroke();
        }

        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
}
        
        
    }

}
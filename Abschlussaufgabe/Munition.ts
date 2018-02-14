namespace abschluss2 {
    export class Munition {
        x: number;
        y: number;
        removeValue: boolean = true;




        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        setRemoveValue(n: boolean): void {
            this.removeValue = n;
        }
        draw(): void {
            if (this.removeValue == true) {

                crc2.fillStyle = "red";
                crc2.fillRect(this.x, 630, 30, 70);
                crc2.fillStyle = "yellow";
                crc2.fillRect(this.x, 600, 30, 30);
                crc2.strokeRect(this.x,600,30,100);
            } else {

                crc2.fillStyle = "blue";
                crc2.fillRect(this.x, 630, 30, 70);
                crc2.fillStyle = "yellow";
                crc2.fillRect(this.x, 600, 30, 30);
                crc2.strokeRect(this.x,600,30,100);
            }

        }





    }

}
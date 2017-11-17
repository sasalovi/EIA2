namespace aufgabe5 {
    export class Lift {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x ; //Werte werden von new an Constructor übergeben
            this.y = _y; //mit this.y bzw this.x übergibt man die Werte an x und y oben in der Funktion
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x <= -150) {
                this.x = 800;
                this.y = 370;
            }

            this.y -= 0.7;
            this.x -= 2.0588;
        }

        draw(): void {
            crc2.fillStyle = "000000"; //Seilbahn
            crc2.beginPath(); //Halteseil der Gondel
            crc2.moveTo(this.x + 90, this.y + 30);
            crc2.lineTo(this.x + 90, this.y + 50);
            crc2.stroke();
            //
            crc2.fillStyle = "#303030";
            crc2.beginPath(); //Gondel
            crc2.moveTo(this.x + 50, this.y + 35);
            crc2.lineTo(this.x + 130, this.y + 60); //Dach der Gondel
            crc2.lineTo(this.x + 130, this.y + 100); //Rechte Wand
            crc2.lineTo(this.x + 50, this.y + 75); //Boden
            crc2.lineTo(this.x + 50, this.y + 45); //Linke Wand
            crc2.fill();

            //Seil
            crc2.fillStyle = "000000"; //Seilbahn
            crc2.beginPath();
            crc2.moveTo(0, 100);
            crc2.lineTo(800, 370);
            crc2.stroke();
        }


    }

}
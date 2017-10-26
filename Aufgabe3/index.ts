namespace aufgabe3 {

    //Aufgabe: Aufgabe 3
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 26.10.2017 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

    window.addEventListener("load", ski2);

    let crc2: CanvasRenderingContext2D;
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let fahrerX: number[] = [];
    let fahrerY: number[] = [];
    let gondelX: number[] = [];
    let gondelY: number[] = [];
    var image: any;


    function ski2(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        //Himmel
        crc2.fillStyle = "#26e2dc";
        crc2.fillRect(0, 0, 800, 600);

        //Berg2
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(250, 100);
        crc2.lineTo(425, 450);
        crc2.lineTo(75, 450);
        crc2.fill();

        //Berg3
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(450, 10);
        crc2.lineTo(625, 450);
        crc2.lineTo(275, 450);
        crc2.fill();
       
        //Boden  
        crc2.fillStyle = "#d7e4e5";
        crc2.fillRect(0, 500, 800, 200);

        //Berg
        crc2.fillStyle = "#d7e4e5";
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(800, 500);
        crc2.lineTo(-800, 500);
        crc2.fill();


        //Bäume Zufallsgenerator
        for (let i: number = 0; i < 3; i++) {
            let x: number = 50 + Math.random() * 300;
            let y: number = 350 + Math.random() * 30;
            console.log(x);
            drawTree(x, y, "#008000");
        }


        for (let i: number = 0; i < 1; i++) {
            gondelX[i] = 0;
            gondelY[i] = 100;
        }

        for (let i: number = 0; i < 1; i++) {
            fahrerX[i] = 0;
            fahrerY[i] = 230;
        }

        for (let i: number = 0; i < 140; i++) {
            arrayX[i] = 0 + Math.random() * 800;
            arrayY[i] = 0 + Math.random() * 600;
        }

        for (let i: number = 0; i < 3; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 0 + Math.random() * 100 + 80;
        }


        image = crc2.getImageData(0, 0, 800, 600);

        animate();
    }
    //Aufgabe 2

    //Schneeflocken

    //Gondel
    function gondel(_x: number, _y: number): void {
        crc2.fillStyle = "000000"; //Seilbahn
        crc2.beginPath(); //Halteseil der Gondel
        crc2.moveTo(_x + 90, _y + 30);
        crc2.lineTo(_x + 90, _y + 50);
        crc2.stroke();
        //
        crc2.fillStyle = "#303030";
        crc2.beginPath(); //Gondel
        crc2.moveTo(_x + 50, _y + 35);
        crc2.lineTo(_x + 130, _y + 60); //Dach der Gondel
        crc2.lineTo(_x + 130, _y + 100); //Rechte Wand
        crc2.lineTo(_x + 50, _y + 75); //Boden
        crc2.lineTo(_x + 50, _y + 45); //Linke Wand
        crc2.fill();
        
        //Seil
        crc2.fillStyle = "000000"; //Seilbahn
        crc2.beginPath();
        crc2.moveTo(0, 100);
        crc2.lineTo(800, 370);
        crc2.stroke();
    }



    //Skifahrer
    function fahrer(_x: number, _y: number): void {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 5, -20);
        crc2.beginPath();
        crc2.arc(_x + 2.5, _y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 10, _y - 5);
        crc2.lineTo(_x + 15, _y + 4);
        crc2.stroke();
    }


    //Schneeflocken
    function snowflake(_x: number, _y: number): void {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }

    //Wolken
    function wolke(_x: number, _y: number): void {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 30, _y - 10, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 60, _y, 30, 0, 2 * Math.PI);
        crc2.fill();
    }


    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);

        for (let i: number = 0; i < fahrerX.length; i++) {
            if (fahrerX[i] > 800) {
                fahrerX[i] = 0;
                fahrerY[i] = 230;
            }
            fahrerY[i] += 1.7;
            fahrerX[i] += 5; // andere Bewegungsmuster zu finden
            fahrer(fahrerX[i], fahrerY[i]);
        }
        //Snowflakes
        for (let i: number = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 0;
            }
            arrayY[i] += Math.random(); // andere Bewegungsmuster zu finden
            snowflake(arrayX[i], arrayY[i]);
        }

        //Wolke
        for (let i: number = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random(); // andere Bewegungsmuster zu finden
            wolke(cloudX[i], cloudY[i]);
        }
        for (let i: number = 0; i < gondelX.length; i++) {
            if (gondelX[i] <= -150) {
                gondelX[i] = 800;
                gondelY[i] = 370;
            }
            gondelY[i] -= 0.7;
            gondelX[i] -= 2.0588; 
            gondel(gondelX[i], gondelY[i]);
        }


        window.setTimeout(animate, 20);
    }

    //Bäume
    function drawTree(_x: number, _y: number, _color: string): void {
        crc2.fillStyle = "#a52a2a";
        crc2.fillRect(_x + 60, _y - 85, 20, 150);
        crc2.fillStyle = _color;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 140, _y);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 120, _y - 30);
        crc2.lineTo(_x + 70, _y - 80);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 40, _y - 60);
        crc2.lineTo(_x + 100, _y - 60);
        crc2.lineTo(_x + 70, _y - 110);
        crc2.fill();

    }

}